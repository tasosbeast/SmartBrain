import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="flex justify-end">
        <p
          onClick={() => onRouteChange("signout")}
          className="text-2xl link dim black underline p-3 cursor-pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-end">
        <p
          onClick={() => onRouteChange("signin")}
          className="text-2xl link dim black underline p-3 cursor-pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="text-2xl link dim black underline p-3 cursor-pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
