import Tournament from "../Models/Tournament.js";

// Create a new tournament
export const createTournament = async (req, res) => {
  try {
    const { sports_name, name, eventCode, place, startDate, endDate } =
      req.body;

    const newTournament = new Tournament({
      sports_name,
      name,
      eventCode,
      place,
      startDate,
      endDate,
    });

    const savedTournament = await newTournament.save();
    res.status(201).json({
      success: true,
      message: "Tournament created successfully.",
      data: savedTournament,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all tournaments
export const getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    res.status(200).json({ success: true, data: tournaments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single tournament by ID
export const getTournamentSports_name = async (req, res) => {
  try {
    const { sports_name } = req.params;
    const tournament = await Tournament.findOne(sports_name);

    if (!tournament) {
      return res
        .status(404)
        .json({ success: false, message: "Tournament not found." });
    }

    res.status(200).json({ success: true, data: tournament });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a tournament
export const updateTournament = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedTournament = await Tournament.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedTournament) {
      return res
        .status(404)
        .json({ success: false, message: "Tournament not found." });
    }

    res.status(200).json({
      success: true,
      message: "Tournament updated successfully.",
      data: updatedTournament,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a tournament
export const deleteTournament = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTournament = await Tournament.findByIdAndDelete(id);

    if (!deletedTournament) {
      return res
        .status(404)
        .json({ success: false, message: "Tournament not found." });
    }

    res.status(200).json({
      success: true,
      message: "Tournament deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
