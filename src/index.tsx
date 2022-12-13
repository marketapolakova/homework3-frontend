import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Autobazar from "./pages/Autobazar";
import ColorSchemaProvider from "./context/ColorSchemaContext";
import ColorSchemaChanger from "./components/ColorSchemaChanger/ColorSchemaChanger";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorSchemaProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/autobazar" element={<Autobazar />} />
            <Route
              path="/colorSchemaChanger"
              element={<ColorSchemaChanger />}
            />
          </Route>
        </Routes>
      </ColorSchemaProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
