import { body } from "express-validator"

export const validateGetUserEvents = [
   body("userId").exists().withMessage("userId should be in the body"),
   body("userId").isString().withMessage("userId should be a string")
]

export const validateGetEventById = [
   body("eventId").exists().withMessage("eventId should be in the body"),
   body("eventId").isString().withMessage("eventId should be a string"),
   
]

export const validateGetEventGuests = [

]

export const validateCreateEvent = [

]

export const validateUpdateEvent = [

]

export const validateAddGuest = [

]

export const validateAddEventDate = [

]

export const validateAddVote = [

]

export const validateDeleteEvent = [

]