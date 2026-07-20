import TaskBarComp from "./components/TaskBarComp";
import PaintComp from "./components/PaintComp";
import Desktop from "./components/Desktop";
import TraceComp from "./components/ClimateTrace";
import ArtPrompt from "./components/ArtPrompt";
import ResumePrompt from "./components/ResumePrompt";
import ArtsAndCrafts from "./components/ArtsAndCrafts";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Coding from "./components/Coding";
import WindowSizeProvider from "./components/WindowSizeContext";
import RecycleBin from "./components/RecycleBin";
import RecyclePrompt from "./components/RecyclePrompt";
import Credit from "./components/Credit";
import IntroComp from "./components/IntroComp";
import BootUp from "./components/BootUp";

import { useState } from "react";

function App() {

  const initWindows = {
    boot: true,
    intro: false,
    desktop: false,
    paint: false,
    artsAndCrafts: false,
    resume: false,
    contact: false,
    coding: false,
    recycleBin: false,
    trace: false,
    credit: false,
    arthelp: false,
    diehosit: false,
    windows95: false,
  };
  
  const [showWindows, setShowWindows] = useState(initWindows);
  const [resumePrompts, setResumePrompts] = useState([]); //used to manage windows coming from resume comp
  const [recycleImagePath, setRecycleImagePath] = useState(null); //used to manage windows from recycle bin comp

  // const onStartUp = () => {

  // }

  const toggleWindow = (windowName, isVisible) => {
    setShowWindows((prev) => ({
      ...prev,
      [windowName]: isVisible,
    }));
  };

  const addResumeHelp = () => {
    setResumePrompts((previousPrompts) => {
      const nextId =
        previousPrompts.length === 0
          ? 0
          : Math.max(
              ...previousPrompts.map((prompt) => prompt.id)
            ) + 1;

      return [
        ...previousPrompts,
        {
          id: nextId,
          visible: true,
        },
      ];
    });
  };

  const closeResumeHelp = (id) => {
    setResumePrompts((previousPrompts) =>
      previousPrompts.filter((prompt) => prompt.id !== id)
    );
  };

  const createResumePrompt = (items) => {
    // take in ShowWindows object and pull out a list of resume help objects
    let helpList = [];

    for (const [key, value] of Object.entries(items)) {
      if (String(key).includes("resumehelp")){
        helpList.push(key);
      }
    }
    return helpList;
  }

  // to control the state of the <body> tag background color
  const handleSwapBg = (path) => {
    if (path.includes("diehochzeits")){
      document.body.style.backgroundImage =
        'url("./diehochzeits.webp")';

      document.body.style.backgroundSize = "100px auto";
      document.body.style.backgroundRepeat = "repeat";
    } else if (path.includes("win95")) {
      document.body.style.background =
      "rgb(0, 128, 128) no-repeat center fixed";
      document.body.style.backgroundSize = "cover";
    } else if (path.includes("bliss")) {
      document.body.style.backgroundImage =
        'url("./winxp.webp")';
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    }

  };

  const handleOpenWindow = (windowName) => toggleWindow(windowName, true);
  const handleCloseArtHelp = () => toggleWindow("arthelp", false);
  const handleCloseResumeHelp = () => toggleWindow("resumehelp", false);
  const handleCloseRecycleHelp = () => {
    toggleWindow("diehosit", false);
    handleSwapBg(recycleImagePath);
  }

  const handleOpenRecyclePrompt = (imgPath) => {
    setRecycleImagePath(imgPath);
    toggleWindow("diehosit", true);
  }

  const handleFinishBoot = () => {
      toggleWindow("boot", false);
      toggleWindow("desktop", true);
      toggleWindow("intro", true);
  };

  return (
    <>
      <WindowSizeProvider>
        <TaskBarComp
          openPaint={() => handleOpenWindow("paint")}
          openResume={() => handleOpenWindow("resume")}
          openContact={() => handleOpenWindow("contact")}
          openCoding={() => handleOpenWindow("coding")}
          openCredit={() => handleOpenWindow("credit")}
        />
        <Desktop
          openPaint={() => handleOpenWindow("paint")}
          openResume={() => handleOpenWindow("resume")}
          openContact={() => handleOpenWindow("contact")}
          openCoding={() => handleOpenWindow("coding")}
          openTrace={() => handleOpenWindow("trace")}
          openRecycleBin={() => handleOpenWindow("recycleBin")}
          openIntro={()=> handleOpenWindow("intro")}

          show={showWindows.desktop}
        />
        <BootUp
          show={showWindows.boot}
          toggle={handleFinishBoot}
        />
        <IntroComp
          show={showWindows.intro}
          toggle={() => toggleWindow("intro", !showWindows.intro)}
        />
        <PaintComp
          show={showWindows.paint}
          toggle={() => toggleWindow("paint", !showWindows.paint)}
          onHelp={() => toggleWindow("arthelp", true)}
        />
        <TraceComp
          show={showWindows.trace}
          toggle={() => toggleWindow("trace", !showWindows.trace)}
        />
        <Resume
          show={showWindows.resume}
          toggle={() => toggleWindow("resume", !showWindows.resume)}
          onHelp={addResumeHelp}//{() => toggleWindow("resumehelp", true)}
        />

        <Contact
          show={showWindows.contact}
          toggle={() => toggleWindow("contact", !showWindows.contact)}
        />
        <Coding
          show={showWindows.coding}
          toggle={() => toggleWindow("coding", !showWindows.coding)}
        />
        <Credit
          show={showWindows.credit}
          toggle={() => toggleWindow("credit", !showWindows.credit)}
        />
        <RecycleBin
          show={showWindows.recycleBin}
          toggle={() => toggleWindow("recycleBin", !showWindows.recycleBin)}
          openRecyclePrompt={handleOpenRecyclePrompt}//toggleWindow("diehosit", true)}
        />
        {showWindows.arthelp && <ArtPrompt show={showWindows.arthelp} toggle={handleCloseArtHelp} />}
        {showWindows.diehosit && <RecyclePrompt show={showWindows.diehosit} toggle={handleCloseRecycleHelp} imgPath={recycleImagePath}/>}
        {resumePrompts.map((prompt) => (
          <ResumePrompt
            key={prompt.id}
            show={prompt.visible}
            onHelp={addResumeHelp}
            toggle={() => closeResumeHelp(prompt.id)}
          />
        ))}
        {/* {showWindows.resumehelp && <ResumePrompt onHelp={()=>addResumeHelp()} show={showWindows.resumehelp} toggle={handleCloseResumeHelp} />} */}
      </WindowSizeProvider>
    </>
  );
}

export default App;
