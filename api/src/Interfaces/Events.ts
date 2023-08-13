import { EventType, StatusType, VotesType } from '../utils/types'

export interface IEvent {
   name: string;
   eventType: EventType;
   description?: string;
   dueDate: Date;
   duration: number;
   days: IDay[];
   guests: IGuest[];
   status: StatusType;
   creationDate: Date;
   createdBy: string;
   save(): any;
}

export interface IDay {
   date: Date;
   votes: IVotes[];
   creationDate: Date;
   createdBy: string,
}

export interface IVotes {
   user: string;
   vote: VotesType;
}

export interface IGuest {
   userId: string;
   username: string;
   photo: string;
}