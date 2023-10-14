import mongoose from 'mongoose';

const rewardHistorySchema = new mongoose.Schema({
    datetimeStamp: {
      type: Date,
      default: Date.now,
    },
    amount: {
      type: Number,
      required: true,
    },
    givenBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
  });
  
const RewardHistory = mongoose.model('RewardHistory', rewardHistorySchema);
export default RewardHistory;