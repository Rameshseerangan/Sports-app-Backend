import express from "express";
import {
  createTournament,
  getAllTournaments,
  getTournamentSports_name,
  updateTournament,
  deleteTournament,
} from "../Controllers/tournamentController.js";

const router = express.Router();

// Create a new tournament
router.post("/create", createTournament);

// Get all tournaments
router.get("/getall", getAllTournaments);

// Get a single tournament by ID
router.get("/sportsname", getTournamentSports_name);

// Update a tournament
router.put("/:id", updateTournament);

// Delete a tournament
router.delete("/:id", deleteTournament);

export default router;
