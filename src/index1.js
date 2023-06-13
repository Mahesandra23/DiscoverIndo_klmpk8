import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Toba from "./Toba";
import LhokMe from "./LhokMe";
import Ranau from "./Ranau";
import PesisirKalianda from "./PesisirKalianda";
import NgaraiSianok from "./NgaraiSianok";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Toba />
    <LhokMe />
    <Ranau />
    <PesisirKalianda />
    <NgaraiSianok />
  </StrictMode>
);
