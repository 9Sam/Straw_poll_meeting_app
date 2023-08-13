import express from "express";
import {
   createEvent,
   getEventById,
   getUserEvents,
   deleteEvent,
   updateEvent,
   getEventGuests,
   addGuest,
   addEventDate,
   addVote,
} from "../controllers/events.controller";
import { validateGetEventById, validateGetUserEvents } from "../validators/event.validators";

const router = express.Router();

router.get("/user/:userId", validateGetUserEvents, getUserEvents);
router.get("/:eventId", validateGetEventById, getEventById);
router.get("/guests/:eventId", getEventGuests);
router.delete("/:eventId", deleteEvent);
router.post("/guests/:eventId", addGuest);
router.post("/eventDate/:eventId", addEventDate);
router.post("/eventDate/:eventId/:dateId", addVote);
router.post("/", createEvent);
router.put("/:eventId", updateEvent);

export default router;
