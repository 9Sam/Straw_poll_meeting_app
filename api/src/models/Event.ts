import { Schema, model } from "mongoose";
import { IEvent } from '../Interfaces/Events';

const daySchema = new Schema({
   date: {
      type: Date,
      required: true
   },
   votes: [
      {
         user: String,
         vote: String
      }
   ],
   creationDate: {
      type: Date,
      required: true
   },
   createdBy: {
      type: Date,
      required: true
   }
});

const eventSchema = new Schema({
   name: {
      type: String,
      required: true,
      min: 4
   },
   eventType: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true,
      max: 300
   },
   dueDate: {
      type: Date
   },
   duration: {
      type: Number,
      required: true
   },
   days: [daySchema],
   guests: [String],
   status: {
      type: String,
      required: true
   },
   creationDate: {
      type: Date,
      required: true
   },
   createdBy: {
      type: String,
      required: true
   }
})

export default model<IEvent>('Event', eventSchema);