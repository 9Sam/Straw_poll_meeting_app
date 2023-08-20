import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { EventI } from "../../interfaces/event.interface";
import { Avatar, AvatarGroup, Box, Chip } from "@mui/material";
import { TbUserCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

type EventCardProps = {
   event: EventI;
};

const EventCard = ({ event }: EventCardProps) => {
   // const { _id, name, description, eventType, status, dueDate, guests } = event;
   const { name, description, dueDate } = event;

   return (
      <Card className="tw-w-auto tw-max-w-md">
         <CardContent>
            <Box
               className="tw-flex tw-justify-between tw-center"
            >
               <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color={"primary"}
               >
                  {name}
               </Typography>
               <TbUserCheck className="tw-text-orange-600 tw-text-lg" />
            </Box>

            {dueDate && (
               <Typography className="tw-text-xs" color="secondary">
                  {dueDate.toDateString()}
               </Typography>
            )}
            <Chip
               label="Small"
               size="small"
               color="warning"
               className="tw-my-4"
            />
            <Box
            className="tw-flex tw-justify-between tw-items-center"
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
            <Typography variant="body2" color="text.secondary" className="tw-pt-3">
               {description}
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small">
               <Link
                  to={`/events/${event._id}`}
                  className="text-decoration-none tw-text-[#FF7144]"
               >
                  See event
               </Link>
            </Button>
         </CardActions>
      </Card>
   );
};

export default EventCard;
