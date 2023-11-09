import React, { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const existingScript = document.getElementById("calendly-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://assets.calendly.com/assets/external/widget.js";

      document.body.appendChild(script);

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/canguden/30min",
            parentElement: document.querySelector(".calendly-inline-widget"),
          });
        }
      };

      return () => {
        // Cleanup: Remove the Calendly script when the component unmounts
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      style={{ minWidth: 320, height: 700 }}
    ></div>
  );
};

export default CalendlyWidget;
