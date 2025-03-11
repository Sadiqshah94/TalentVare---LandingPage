import { createRoot } from "react-dom/client";
import "@/styles/global.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen space-y-3">
         <div className="w-100 loader"></div>
        </div>
      }
    >
      <App />
    </Suspense>
  </BrowserRouter>
);
