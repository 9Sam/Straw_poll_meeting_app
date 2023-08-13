// import { useState } from "react";
// import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import TestUi from "./pages/TestUi";
import Event from "./pages/Event.page";
import Events from "./pages/Events.page";
import Auth from "./pages/Auth.page";

function App() {
   return (
      <Routes>
         <Route path="/auth" element={<Auth />}></Route>
         <Route path="/home" element={<Home />}></Route>
         <Route path="/events" element={<Events />}></Route>
         <Route path="/event/create" element={<Event />}></Route>
         <Route path="/event/:eventId" element={<Event />}></Route>
         <Route path="/testui" element={<TestUi />}></Route>
      </Routes>
   );
}

export default App;
