import { Button, Container, styled } from "@mui/material";
import Flexbox from "./material-ui/Flexbox.page";

const TestUi = () => {
   const BlueButton = styled(Button)({
      color: "purple",
      backgroundColor: "cyan",
      borderRadius: "15px",
      border: "none",
      "&:hover": {
         backgroundColor: "purple",
         border: "none",
         color: "white",
      },
      "&:disabled": {
         backgroundColor: "orange",
      },
   });

   return (
      <Container fixed>
         <Flexbox />
         {/* <Box sx={{ bgcolor: "white", height: "100vh" }}>
            <Button variant="outlined" disabled startIcon={<Delete />}>
               Delete
            </Button>
            <BlueButton>Hola suras</BlueButton>
            <Button
               color="primary"
               variant="outlined"
               startIcon={<Delete />}
               sx={{
                  textTransform: "capitalize",
                  border: "none",
                  boxShadow: 1,
                  "&:hover": {
                     border: "none",
                  },
               }}
            >
               Test with theme
            </Button>
         </Box> */}
      </Container>
   );
};

export default TestUi;
