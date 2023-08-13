import { Box, Grid } from "@mui/material";

const Flexbox = () => {
   return (
      <Box>
         <Grid container>
            <Grid item xs={12} sm={4} lg={4} bgcolor={"red"}>
               <Box>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  dignissimos delectus perferendis animi recusandae rem, dolor
                  assumenda porro rerum nostrum perspiciatis fugit quod
                  excepturi magnam blanditiis similique neque officia! Veniam.
               </Box>
            </Grid>
            <Grid item xs={12} sm={4} lg={4} bgcolor={"orange"}>
               <Box>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                  ratione cum doloremque alias provident quam, delectus ad
                  voluptatibus! Maxime magni deserunt sequi quos fugiat, sunt ea
                  odit vero laudantium rerum.
               </Box>
            </Grid>
            <Grid container item xs={12} sm={4} lg={4} bgcolor={"blue"}>
               <Grid item xs={12} sm={6} bgcolor={"green"}>
                  <Box component="div">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Rem perferendis nam molestias harum nostrum suscipit vitae
                     libero.
                  </Box>
               </Grid>
               <Grid
                  item
                  xs={12}
                  sm={6}
                  bgcolor={"lime"}
                  sx={{ display: { xs: "none", sm: "block" } }}
               >
                  <Box component="div">
                     Lorena ipsum dolor, sit amet consectetur adipisicing elit.
                     Rem perferendis nam molestias harum nostrum suscipit vitae
                     libero.
                  </Box>
               </Grid>
            </Grid>
         </Grid>
      </Box>
   );
};

export default Flexbox;
