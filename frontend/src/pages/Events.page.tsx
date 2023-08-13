import Grid from "@mui/material/Grid";
import Navbar from "../components/shared/Navbar";
// import Stack from "@mui/material/Stack";
import { EventI } from "../interfaces/event.interface";
import { Box, Button, Divider, Typography } from "@mui/material";
import EventCard from "../components/features/EventCard";

const Events = () => {
   const events: EventI[] = [
      {
         _id: "1",
         name: "Event 1",
         createdBy: "Sam",
         dueDate: new Date("12-12-2023"),
         creationDate: new Date(),
         status: "voting",
         description: "This is the description for my first task",
         eventType: "due",
         days: [],
         duration: 0,
         guests: [],
      },
      {
         _id: "2",
         name: "Event 2",
         createdBy: "Sam",
         dueDate: new Date("12-12-2023"),
         creationDate: new Date(),
         status: "voting",
         description: "This is the description for my second task",
         eventType: "due",
         days: [],
         duration: 0,
         guests: [],
      },
      {
         _id: "3",
         name: "Event 2",
         createdBy: "Sam",
         dueDate: new Date("12-12-2023"),
         creationDate: new Date(),
         status: "voting",
         description: "This is the description for my third class",
         eventType: "due",
         days: [],
         duration: 0,
         guests: [],
      },
      {
         _id: "4",
         name: "Event 2",
         createdBy: "Sam",
         dueDate: new Date("12-12-2023"),
         creationDate: new Date(),
         status: "voting",
         description: "This is my task",
         eventType: "due",
         days: [],
         duration: 0,
         guests: [],
      },
   ];

   return (
      <div>
         <Navbar />
         <Grid
            container
            pt={6}
            justifyContent={"center"}
            maxWidth={"1200px"}
            mx={"auto"}
         >
            <Grid item justifyContent={"center"} width={"100%"}>
               <Box
                  p={3}
                  bgcolor={"white"}
                  boxShadow={0.5}
                  sx={{ minHeight: "600px" }}
               >
                  <Typography
                     variant="h1"
                     sx={{ fontSize: "30px" }}
                     my={"20px"}
                  >
                     My Events
                  </Typography>
                  <Divider sx={{ marginTop: "30px" }} />
                  <Box className="events-container">
                     {events &&
                        events.map((event) => (
                           <EventCard key={event._id} event={event} />
                        ))}
                  </Box>
                  <Box display={"flex"} justifyContent={"center"} my={"30px"}>
                     <Button variant="contained">Create new event</Button>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </div>
   );
};

export default Events;
