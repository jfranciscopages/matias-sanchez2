// components/CalendlyWidget.tsx
import React, { useEffect } from "react";

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget min-w-[320px] w-full h-[1150px]"
      data-url="https://calendly.com/matiassanchezsorondo/asesoria"
    ></div>
  );
};

export default CalendlyWidget;
