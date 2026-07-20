import React, { useState, useEffect } from "react";
import { Modal, Fieldset, Tabs, Tab, TitleBar } from "@react95/core";
import { HelpBook } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";

function getRandomFloat(min, max, decimals){
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

export default function ResumePrompt(props){
    const id = props.id;
    const showHelp = props.show;
    const handleCloseHelp = props.toggle;
    const handleShowHelp = props.onHelp;

    const windowSmall = useWindowSize();

    const screenW = getRandomFloat(10.0, window.innerWidth - 50.0, 1);
    const screenH = getRandomFloat(10.0, window.innerHeight - 50.0, 1);

    return (
    <>
      {showHelp && (
        <Modal
          key="${id}"
          icon={<HelpBook variant="16x16_4" />}
          title="Uh-oh. Don't make more, please!"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help key="help" onClick={handleShowHelp}/>, // I want recursive help boxes...
            <TitleBar.Close key="close" onClick={handleCloseHelp} />,
          ]}>
        </Modal>
      )}
    </>
  );
}
