import User from '../model/userModal.js';
import P5History from '../model/P5HistoryModal.js';
import RewardHistory from '../model/rewardHistory.js';


export const createP5HistoryController = async (req,res) => {
    try {
        const { amount, toUserId, userId } = req.body;
        let toUser
        if(toUserId) {
            toUser = await User.findById(toUserId);
            if(!toUser) {
                throw new Error(`To user does not exist`);
            }
        }else {
            throw new Error('Please provide to user Id');
        }

        const currentUser = await User.findById(userId);

        if(currentUser.P5.balance < amount) {
            throw new Error(`Given amount is greater than current balance`);
        }
        currentUser.P5.balance -= amount;
        toUser.Reward.balance += amount;

        const p5Transaction = await new P5History({amount, givenTo: toUserId});
        await p5Transaction.save();
        const rewardTransaction = await new RewardHistory({amount, givenBy: userId});
        await rewardTransaction.save();

        currentUser.P5.history = [...currentUser.P5.history, p5Transaction];
        toUser.Reward.history = [...toUser.Reward.history, rewardTransaction];
        

        const editCurrentUserBalance = await User.findByIdAndUpdate(userId, currentUser );
        const editToUserBalance = await User.findByIdAndUpdate(toUserId, toUser);

        res.status(200).json({
            message: 'P5 points given successfully',
            success: true
        });


    } catch (error) {
        throw error;
    }
}

export const deleteP5HistoryController = async (req,res) => {
    try {
        const { userId, P5HistoryId } = req.body;
        const p5Transaction = await P5History.findById(P5HistoryId);
        const toUserId = p5Transaction.givenTo;
        const givenUser = await User.findById(toUserId);
        const currentUser = await User.findById(userId);

        givenUser.Reward.balance -= p5Transaction.amount;
        currentUser.P5.balance += p5Transaction.amount;

        const updatedCurrentUser = await User.findByIdAndUpdate(userId,currentUser);
        const updatedGivenUser = await User.findByIdAndUpdate(givenUser._id,givenUser);

        res.status(200).json({
            message: `Successfully reversted P5 transaction`,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}

export const getP5HistoryController = async (req,res) => {
    try {
        const p5History = await P5History.find();
        res.status(200).json({
            data: p5History,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}