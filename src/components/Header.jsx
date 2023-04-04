import React from "react";
import MenuItem from "./MenuItem";
import AppLauncherIcon from "./AppLauncherIcon";
import Avater from "./Avater";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "16px",
        gap: "15px",
      }}
    >
      <MenuItem title={"Gmail"} />
      <MenuItem title={"Images"} />
      <AppLauncherIcon />
      <Avater />
    </div>
  );
};

export default Header;
