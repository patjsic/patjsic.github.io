import React, { useState } from "react";
import {
  Pbrush1,
  MsawtAwtIcon,
  Mshtml32528,
  Explorer108,
  Gcdef100,
  Progman11,
  Wordpad,
  Awfxcg321304,
} from "@react95/icons";

export default function Desktop(props) {
  const handleOpenPaint = props.openPaint;
  const handleOpenTrace = props.openTrace;
  const [activeIcon, setActiveIcon] = useState(null);
  const handleOpenCoding = props.openCoding;
  const handleOpenRecycleBin = props.openRecycleBin;
  const handleOpenResume = props.openResume;
  const handleOpenContact = props.openContact;

  const showDesktop = props.show;

  const handleToggleIcon = (iconId) => {
    setActiveIcon((prev) => (prev === iconId ? null : iconId));
  };

  return (
    <>
    {showDesktop && (
    <div className="desktop-icons">
      <div
        className={activeIcon === 1 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(1)}
        onDoubleClick={handleOpenRecycleBin}
      >
        <Explorer108 variant="32x32_4" />
        <p>Recycle Bin</p>
      </div>
      <div
        className={activeIcon === 2 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(2)}
        onDoubleClick={handleOpenPaint}
      >
        <Pbrush1 variant="32x32_4" />
        <p>Paint</p>
      </div>
      {/* <div
        className={activeIcon === 3 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(3)}
        onDoubleClick={handleOpenCoding}
      >
        <MsawtAwtIcon variant="32x32_4" />
        <p>Coding</p>
      </div> */}
      <div
        className={activeIcon === 4 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(4)}
        onDoubleClick={handleOpenTrace}
      >
        <Mshtml32528 variant="32x32_4" />
        <p>ClimateTRACE</p>
      </div>
      <div
        className={activeIcon === 5 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(5)}
        onDoubleClick={handleOpenResume}
      >
        <Wordpad variant="32x32_4" />
        <p>Resume</p>
      </div>
      <div
        className={activeIcon === 6 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(6)}
        onDoubleClick={handleOpenContact}
      >
        <Awfxcg321304 variant="32x32_4" />
        <p>Contact</p>
      </div>
    </div>)}
    </>
  );
}
