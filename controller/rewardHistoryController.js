import RewardHistory from "../model/rewardHistory.js"

export const getRewardHistoryController = async (req,res) => {
    try {
        const rewardHistory = await RewardHistory.find();
        res.status(200).json({
            data: rewardHistory,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}