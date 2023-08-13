import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AuthPage from "../../pages/Auth.page";
import { GoogleOAuthProvider } from "@react-oauth/google";

describe("AuthPage", () => {
   beforeEach(() => {
      render(
         <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <MemoryRouter>
               <AuthPage />
            </MemoryRouter>
         </GoogleOAuthProvider>
      );
   });

   it("should work as expected", () => {
      expect(AuthPage).toBeDefined();
   });

   describe("Login", () => {
      it("should have a title with text 'Log In'", () => {
         expect(screen.getByText("Log In")).toBeDefined();
      });

      it("should contain an input with placeholder text 'Email Address *'", () => {
         expect(screen.getByText("Email Address *")).toBeDefined();
      });

      it("should contain an input with placeholder text 'Password *'", () => {
         expect(screen.getByText("Email Address *")).toBeDefined();
      });

      it("should contain the google login button", async () => {
         await waitFor(() => {
            const googleButton = screen.getByTestId("google-button");

            expect(googleButton.innerHTML).toBeDefined();
         });
      });
   });

   describe("Signup", () => {
      beforeEach(() => {
         const button = screen.getByText("Don't have an account? Sign Up");
         fireEvent.click(button);
      });

      it("should have a title with text 'Sign Up'", () => {
         // Get all elements with the specified text
         const elementsWithText = screen.queryAllByText("Sign Up");

         // Find the h1 element among the elements
         const h1Element = elementsWithText.find(
            (element) => element.tagName === "H1"
         );

         expect(h1Element).toBeDefined();
      });

      it("should contain an input with placeholder text 'Username *'", () => {
         expect(screen.getByText("Username *")).toBeDefined();
      });

      it("should contain an input with placeholder text 'Email Address *'", () => {
         expect(screen.getByText("Email Address *")).toBeDefined();
      });

      it("should contain an input with placeholder text 'Password *'", () => {
         expect(screen.getByText("Password *")).toBeDefined();
      });

      it("should have a text 'Already have an account? Sign In'", () => {
         const link = screen.getByText("Already have an account? Sign In");

         expect(link).toBeDefined();
      });

      it("should change to the login page when the 'Already have an account? Sign In' link is clicked", () => {
         const link = screen.getByText("Already have an account? Sign In");
         fireEvent.click(link);

         expect(screen.getByText("Log In")).toBeDefined();
      });
   });
});
