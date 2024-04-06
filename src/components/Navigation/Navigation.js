import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="flex justify-end">
      <p
        onClick={() => onRouteChange("signin")}
        className="text-2xl link dim black underline p-3 cursor-pointer"
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
