import {
   Box,
   Button,
   Container,
   CssBaseline,
   Grid,
   Link,
   TextField,
   Typography,
} from "@mui/material";
import Layout from "../components/core/Layout";
import AuthService from "../services/auth.service";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { store } from "../store/store";
import { setUser } from "../store/slices/userSlice";
import { GoogleUserI } from "../interfaces/google-user.interface";
import Logo from "/Logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isLogin, setIsLogin] = useState(true);
   const [invalid, setInvalid] = useState<boolean | null>(null);

   const handleSubmit = async (e: any) => {
      e.preventDefault();

      if (isLogin) {
         try {
            const user: any = await AuthService.signin({
               username: username,
               email: email,
               password: password,
            });
            console.log(user);

            navigate("/home");
            store.dispatch(setUser(user));
         } catch (error) {
            setInvalid(true);
         }
      }

      if (!isLogin) {
         AuthService.signup({
            username: username,
            email: email,
            password: password,
         });
      }
   };

   const responseGoogle = (response: any) => {
      console.log(response);

      if (response) {
         const user: GoogleUserI | null = AuthService.getGoogleUser(
            response.credential
         );

         if (user) {
            store.dispatch(
               setUser({
                  username: user.name,
                  email: user.email,
                  picture: user.picture,
               })
            );

            console.log(store.getState());
         }
      }
   };

   return (
      <div>
         <Layout>
            <Container component="main" maxWidth="xs">
               <CssBaseline />
               <Box
                  sx={{
                     marginTop: 8,
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                  }}
               >
                  <Box sx={{ display: "flex" }}>
                     <img src={Logo} alt="logo" width={150} />
                  </Box>
                  {/* </Avatar> */}
                  <Typography component="h1" variant="h5">
                     {isLogin ? "Log In" : "Sign Up"}
                  </Typography>
                  <Box
                     component="form"
                     onSubmit={handleSubmit}
                     noValidate
                     sx={{ mt: 1 }}
                  >
                     {!isLogin && (
                        <TextField
                           margin="normal"
                           required
                           fullWidth
                           id="username"
                           label="Username"
                           name="username"
                           autoComplete="username"
                           onChange={(e) => {
                              setUsername(e.target.value);
                           }}
                           value={username}
                        />
                     )}
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => {
                           setEmail(e.target.value);
                        }}
                        value={email}
                     />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => {
                           setPassword(e.target.value);
                        }}
                        value={password}
                     />
                     {/* {isLogin && (
                        <FormControlLabel
                           control={
                              <Checkbox value="remember" color="primary" />
                           }
                           label="Remember me"
                        />
                     )} */}
                     {invalid && (
                        <Typography color="error">
                           Invalid user or password
                        </Typography>
                     )}
                     <Box
                        sx={{
                           display: "flex",
                           justifyContent: "center",
                           cursor: "pointer",
                           mt: 2,
                           mb: 1,
                        }}
                        data-testid="google-button"
                     >
                        <GoogleLogin
                           onSuccess={responseGoogle}
                           type="icon"
                           onError={() => {
                              console.log("Login Failed");
                           }}
                           key={"google_button"}
                           text="signin_with"
                        />
                     </Box>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                     >
                        {isLogin ? "Log in" : "Sign Up"}
                     </Button>
                     {isLogin ? (
                        <Grid container>
                           <Grid item xs>
                              <Link className="link" href="#" variant="body2">
                                 Forgot password?
                              </Link>
                           </Grid>
                           <Grid item>
                              <Link
                                 className="link"
                                 onClick={() => setIsLogin(!isLogin)}
                              >
                                 {"Don't have an account? Sign Up"}
                              </Link>
                           </Grid>
                        </Grid>
                     ) : (
                        <Grid container>
                           <Grid item>
                              <Link
                                 className="link"
                                 onClick={() => setIsLogin(!isLogin)}
                              >
                                 {"Already have an account? Sign In"}
                              </Link>
                           </Grid>
                        </Grid>
                     )}
                  </Box>
               </Box>
            </Container>
         </Layout>
      </div>
   );
};

export default Login;
