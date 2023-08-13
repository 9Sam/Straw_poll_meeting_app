import { Request, Response } from "express";
import { IEvent, IGuest } from "../Interfaces/Events";
import Event from "../models/Event";
import { ErrorResponse } from "../utils/errorResponse";
import { SuccessResponse } from "../utils/successResponse";

//? GetUserEvents {green,7}
export const getUserEvents = async (req: Request, res: Response) => {
   const exists = await Event.exists({ createdBy: req.params.userId });
   const events = await Event.find({ createdBy: req.params.userId });

   if (!exists) return res.status(404).json(ErrorResponse.getNotFound(events));

   return res.json(
      SuccessResponse.getReponse("Events recovered successfully", events)
   );
};

//? GetEventById {green, 14}
export const getEventById = async (req: Request, res: Response) => {
   const event = await Event.findById(req.params.eventId);

   if (!event) res.status(404).json(ErrorResponse.getNotFound(event));

   return res.json(
      SuccessResponse.getReponse("Event recovered successfully", event)
   );
};

//? GetEventGuests
export const getEventGuests = async (req: Request, res: Response) => {
   const event = await Event.findById(req.params.eventId);

   if (!event) res.status(404).json(ErrorResponse.getNotFound(event));

   return res.json(
      SuccessResponse.getReponse("Event recovered successfully", event?.guests)
   );
}

//? CreateEvent {cyan,21}
export const createEvent = async (req: Request, res: Response) => {
   const event: IEvent = new Event({
      name: req.body.name,
      eventType: req.body.eventType,
      description: req.body.description,
      dueDate: req.body.dueDate,
      duration: req.body.duration,
      guests: req.body.guests,
      status: req.body.status,
      creationDate: new Date(),
      createdBy: req.body.createdBy,
   });

   const savedEvent = await event.save();

   if (!savedEvent) return res.status(500).json(ErrorResponse.getServerError(savedEvent));

   return res.json(SuccessResponse.getReponse("Event created successfully", savedEvent));
};

//? UpdateEvent {purple, 17}
export const updateEvent = async (req: Request, res: Response) => {
   const event = await Event.findByIdAndUpdate(req.params.eventId, {
      name: req.body.name,
      eventType: req.body.eventType,
      description: req.body.description,
      dueDate: req.body.dueDate,
      duration: req.body.duration,
      guests: req.body.guests,
      status: req.body.status,
   });

   if (!event) return res.status(404).json(ErrorResponse.getNotFound(event));

   return res.json(SuccessResponse.getReponse("Event updated successfully", []))
};

//? addGuest {purple, 17}
export const addGuest = async (req: Request, res: Response) => {
   try {
      const event = await Event.findById(req.params.eventId);

      const guests = req.body;

      guests.forEach((guest: IGuest) => event?.guests.push(guest));

      const savedEvent = await event?.save();

      return res.json(SuccessResponse.getReponse("Event created successfully", savedEvent));
   } catch (error) {
      return res.status(500).json(ErrorResponse.getServerError(error));
   }
};

export const addEventDate = async (req: Request, res: Response) => {
   try {
      const id = req.params.eventId;
      const updatedDays = req.body.days;

      const result = await Event.updateOne({ "_id": id }, { $set: { "days": updatedDays } });

      if (result.modifiedCount === 0) {
         res.status(404).json({ message: 'Could not find and update the document' });
      }
      return res.status(200).json({ message: 'Document updated successfully' });
   } catch (error) {
      return res.status(500).json(ErrorResponse.getServerError(error));
   }
};

export const addVote = async (req: Request, res: Response) => {
   try {
      const id = req.params.eventId;
      const dateId = req.params.dateId;
      const vote = req.body.vote;

      const result = await Event.updateOne(
         { "_id": id, "days._id": dateId },
         { $push: { "days.$.votes": vote } }
       );

      if (result.modifiedCount === 0) {
         res.status(404).json({ message: 'Could not find and update the document' });
      }
      return res.status(200).json({ message: 'Document updated successfully' });
   } catch (error) {
      return res.status(500).json(ErrorResponse.getServerError(error));
   }
}

//? DeleteEvent {purple, 17}
export const deleteEvent = async (req: Request, res: Response) => {
   const event = await Event.findByIdAndDelete(req.params.eventId);

   if (!event) return res.status(404).json(ErrorResponse.getNotFound(event));

   return res.json(SuccessResponse.getReponse("Event deleted successfully", event))
};