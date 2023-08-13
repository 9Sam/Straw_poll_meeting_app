import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Event = () => {
   const [eventId, setEventId] = useState<string | undefined>("");
   const params = useParams();

   useEffect(() => {
      setEventId(params?.eventId);
   });

   return <div>Event is {eventId}</div>;
};

export default Event;
