import React, { useEffect } from "react";
// import "./App.css";
import "./index.css";
// import "./tailwind.css"
import Chat from "./components/Chat";
import { Toaster } from "react-hot-toast";

const App = function AppWrapper() {
  return (
    <>
      <main>
        <div className="watermark">ICPGPT</div>
        <Chat />
      </main>
      <Toaster />
    </>
  );
};

export default App;
