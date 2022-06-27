import { Suspense, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/index";
import TicketBuy from "./pages/ticket-buy/TicketBuy";
import Tickets from "./pages/tickets/Tickets";

export default function App() {
  const [stateLength, setStateLength] = useState(3);

  return (
    <Suspense fallback={<>loading ...</>}>
      <Routes>
        <Route path="/">
          <Route path="buy" element={<TicketBuy />} />
          <Route path="ticket" element={<Tickets />} />
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Suspense>
  );
}
