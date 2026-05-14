import React from "react";
import ReactDOM from "react-dom/client";
import SmokeyCursor from "./components/lightswind/smokey-cursor";

function mountSmokeyCursor() {
  const rootEl = document.getElementById("smokey-root");
  if (!rootEl) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const mobile = window.matchMedia("(max-width: 768px)").matches;

  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <SmokeyCursor
        simulationResolution={mobile ? 64 : 256}
        dyeResolution={mobile ? 512 : 2048}
        densityDissipation={mobile ? 5 : 2}
        velocityDissipation={mobile ? 3 : 2}
        curl={mobile ? 3 : 5}
        splatForce={mobile ? 2500 : 5000}
        enableShading={!mobile}
        colorUpdateSpeed={10}
        autoColors={false}
        backgroundColor={{ r: 0, g: 0, b: 0 }}
        transparent={true}
        splatRadius={0.05}
      />
    </React.StrictMode>
  );
}

mountSmokeyCursor();
