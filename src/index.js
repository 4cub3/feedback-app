import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "./index.css";
import App from "./App";
import FormProvider from "./context/FormProvider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
