import User from '../model/userModal.js';

export const createUserController = async (req,res) => {
    try {
        const { name } = req.body;
        const user = new User({name, P5: { balance: 100 }, Reward: { balance: 0 }});
        user.save();
        res.status(201).json({
            data: user,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            error,
            success: false
        })
    }
}

export const edituserController = async (req,res) => {
    try {
        const { name, userId } = req.body;
        const existedUser = await User.findById(userId);

        if(userId) {
            const response = await User.findByIdAndUpdate(userId,{name});
            res.status(200).json({
                data: response,
                success: true
            })
        }else {
            res.status(500).json({
                message: 'User Id does not exist',
                success: false
            })
        }
        
    } catch (error) {
        
    }
}

export const getUserController = async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            data: user,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}