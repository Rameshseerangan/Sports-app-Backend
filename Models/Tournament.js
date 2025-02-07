import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  sports_name: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  eventCode: {
    type: String,
    required: true,
    unique: true,
  },
  place: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Tournament = mongoose.model("Tournament", tournamentSchema);
export default Tournament;
