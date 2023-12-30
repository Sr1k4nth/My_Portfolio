import React from "react";
import App from "./App";
import store from "./redux/store";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ContextProvider } from "./contexts/Datacontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ContextProvider>
          <BrowserRouter>
            <ToastContainer />
            <App />
          </BrowserRouter>
        </ContextProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
