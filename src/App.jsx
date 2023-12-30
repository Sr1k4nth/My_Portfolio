import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay-ts";
import { CustomUseContext } from "./contexts/Datacontext";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import './assests/scss/config/app.scss';

const Home = React.lazy(() => import("./Pages/Home"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const About = React.lazy(() => import("./Pages/About"));
const Portfolio = React.lazy(() => import("./Pages/Portfolio"));
const Service = React.lazy(() => import("./Pages/Service"));
const Skills = React.lazy(() => import("./Pages/Skills"));

function App() {
  const { load, loadmsg } = CustomUseContext();

  return (
    <React.Fragment>
      <LoadingOverlay active={load} spinner text={loadmsg}>
        <Suspense fallback={<div className="loading" />}>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="About" element={<About />} />
              <Route path="Portfolio" element={<Portfolio />} />
              <Route path="Service" element={<Service />} />
              <Route path="Skills" element={<Skills />} />
            </Route>
          </Routes>
        </Suspense>
      </LoadingOverlay>
    </React.Fragment>
  );
}

export default App;
