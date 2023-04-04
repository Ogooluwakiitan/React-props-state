import React from "react";
import Location from "./Location";
import FooterLeftMenu from "./FooterLeftMenu";
import FooterRightMenu from "./FooterRightMenu";
import FooterText from "./FooterText";

const Footer = () => {
  return (
    <div>
     <div>
     <Location />
     </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <FooterLeftMenu title={"About"} />
          <FooterLeftMenu title={"Advertising"} />
          <FooterLeftMenu title={"Business"} />
          <FooterLeftMenu title={"How Search Works"} />
        </div>

        <div>
          <FooterText />
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <FooterRightMenu title={"Privacy"} />
          <FooterRightMenu title={"Terms"} />
          <FooterRightMenu title={"Settings"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
