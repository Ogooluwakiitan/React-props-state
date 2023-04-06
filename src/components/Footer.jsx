import React from "react";
import Location from "./Location";
import FooterLeftMenu from "./FooterLeftMenu";
import FooterRightMenu from "./FooterRightMenu";
import FooterText from "./FooterText";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Location />

        <hr style={{ borderBottom: "1px solid rgba(128, 128, 128, 0.247)" }} />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "16px" }}>
            <FooterLeftMenu title={"About"} />
            <FooterLeftMenu title={"Advertising"} />
            <FooterLeftMenu title={"Business"} />
            <FooterLeftMenu title={"How Search Works"} />
          </div>

          <FooterText />

          <div style={{ display: "flex", gap: "16px" }}>
            <FooterRightMenu title={"Privacy"} />
            <FooterRightMenu title={"Terms"} />
            <FooterRightMenu title={"Settings"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
