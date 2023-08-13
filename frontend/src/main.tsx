import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.ts";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <Provider store={store}>
            <BrowserRouter>
               <GoogleOAuthProvider
                  clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
               >
                  <App />
               </GoogleOAuthProvider>
            </BrowserRouter>
         </Provider>
      </ThemeProvider>
   </React.StrictMode>
);
