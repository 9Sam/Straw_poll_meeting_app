import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { EventI } from "../../interfaces/event.interface";
import { Avatar, AvatarGroup, Box, Chip, Link as MuiLink } from "@mui/material";
import { TbUserCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

type EventCardProps = {
   event: EventI;
};

const EventCard = ({ event }: EventCardProps) => {
   // const { _id, name, description, eventType, status, dueDate, guests } = event;
   const { name, description, dueDate } = event;

   return (
      <Card sx={{ width: "auto", maxWidth: "400px" }}>
         <CardContent>
            <Box
               display={"flex"}
               flexDirection={"row"}
               justifyContent={"space-between"}
               alignItems={"center"}
            >
               <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color={"primary"}
                  sx={{ fontSize: "1.2rem" }}
               >
                  {name}
               </Typography>
               <TbUserCheck style={{ fontSize: "1.2rem", color: "#FF7144" }} />
            </Box>

            {dueDate && (
               <Typography color="text.secondary" fontSize="0.8rem">
                  {dueDate.toDateString()}
               </Typography>
            )}
            <Chip
               label="Small"
               size="small"
               color="warning"
               sx={{ margin: "10px 0" }}
            />
            <Box
               display={"flex"}
               flexDirection={"row"}
               justifyContent={"start"}
            >
               <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                     alt="Travis Howard"
                     src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                     alt="Agnes Walker"
                     src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                     alt="Trevor Henderson"
                     src="/static/images/avatar/5.jpg"
                  />
               </AvatarGroup>
            </Box>
            <Typography variant="body2" color="text.secondary">
               {description}
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small">
               <Link
                  to={`/events/${event._id}`}
                  style={{ textDecoration: "none", color: "#FF7144" }}
               >
                  See event
               </Link>
            </Button>
         </CardActions>
      </Card>
   );
};

export default EventCard;
