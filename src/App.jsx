import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay-ts";
import { CustomUseContext } from "./contexts/Datacontext";

const Home = React.lazy(() => import("./Pages/Home"));
const SignUp = React.lazy(() => import("./Pages/Authentication/SignUp"));
const SignIn = React.lazy(() => import("./Pages/Authentication/SignUp"));

function App() {
  const { load, loadmsg } = CustomUseContext();

  return (
    <React.Fragment>
      <LoadingOverlay active={load} spinner text={loadmsg}>
        <Suspense fallback={<div className="loading" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>
        </Suspense>
      </LoadingOverlay>
    </React.Fragment>
  );
}

export default App;
