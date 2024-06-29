import Granim from "granim";
import { useEffect } from "react";

function Background() {
  useEffect(() => {
    var granimInstance = new Granim({
      element: "#canvas-complex",
      direction: "top-bottom",
      isPausedWhenNotInView: false,
      states: {
        "default-state": {
          gradients: [
            [
              { color: "#7caeef", pos: 0.2 },
              { color: "#f5ce9e", pos: 0.8 },
              { color: "#98baf3", pos: 1 },
            ],
            [
              { color: "#8be7de", pos: 0 },
              { color: "#e9b575", pos: 0.3 },
              { color: "#91e4fb", pos: 0.75 },
            ],
          ],
        },
      },
    });
  }, []);

  return (
    <div className="block-logo">
      <canvas id="canvas-complex" />
      <div className="noise" />
      {/* <div className="logo-mask" /> */}
    </div>
  );
}

export default Background;
