import mongoose from 'mongoose';

const p5HistorySchema = new mongoose.Schema({
    datetimeStamp: {
      type: Date,
      default: Date.now,
    },
    amount: {
      type: Number,
      required: true,
    },
    givenTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
  });

const P5History = mongoose.model('P5History', p5HistorySchema);
export default P5History;