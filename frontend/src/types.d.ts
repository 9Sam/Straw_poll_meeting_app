export type StatusT = "voting" | "due" | "complete" | "closed" | "posposed";

export type EventT = "infinite" | "due";

export type VotesT = "yes" | "maybe" | "no";

export type GoogleResponseT = {
   clientId: string;
   credential: string;
   select_by: string;
};
