import { EventT, StatusT, VotesT } from "../types";

export interface EventI {
   _id: string;
   name: string;
   eventType: EventT;
   description?: string;
   dueDate?: Date;
   duration: number;
   days: DayI[];
   guests: GuestI[];
   status: StatusT;
   creationDate: Date;
   createdBy: string;
}

export interface DayI {
   date: Date;
   votes: VotesI[];
   creationDate: Date;
   createdBy: string;
}

export interface VotesI {
   user: string;
   vote: VotesT;
}

export interface GuestI {
   userId: string;
   username: string;
   photo: string;
}
