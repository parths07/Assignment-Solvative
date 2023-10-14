import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    P5: {
      balance: Number,
      history: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'P5History', // Reference to the P5History model
      }],
    },
    Reward: {
      balance: Number,
      history: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RewardHistory', // Reference to the RewardHistory model
      }],
    },
});

const user = mongoose.model('User',userSchema);
export default user;