"use client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader";

function LoaderLogic({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="h-[50vh] w-full flex flex-col items-center justify-center">
      <Loader />
    </div>
  ) : (
    children
  );
}

export default LoaderLogic;
