"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const SideNav = ({ children }: { children: React.ReactNode }) => {
  const [sideWidth, setSideWidth] = useState("250px");
  const [navWidth, setNavWidth] = useState("calc(100vw - 250px)");
  const [navMargin, setNavMargin] = useState("250px");
  const [hideTitle, setHideTitle] = useState("inline");
  const handleWidth = () => {
    setSideWidth((prev) => (prev === "250px" ? "40px" : "250px"));
    setNavWidth((prev) =>
      prev === "calc(100vw - 250px)" ? "100vw" : "calc(100vw - 250px)"
    );
    setNavMargin((prev) => (prev === "250px" ? "40px" : "250px"));
    setHideTitle((prev) => (prev === "inline" ? "none" : "inline"));
  };
  return (
    <>
      <Sidebar sideWidth={sideWidth} hideTitle={hideTitle} />
      <Navbar
        navWidth={navWidth}
        handleBtn={handleWidth}
        navMargin={navMargin}
      />
      <div className="content" style={{ marginRight: navMargin }}>
        {children}
      </div>
    </>
  );
};

export default SideNav;
