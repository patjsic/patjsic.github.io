import React, { useState } from "react";
import { Modal, Frame, TitleBar } from "@react95/core";
import { Mshtml32528 } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";

export default function TraceComp(props) {
    const showTrace = props.show;
    const toggleShowTrace = props.toggle;
    const handleShowHelp = props.onHelp;

    const windowSmall = useWindowSize();

    // Define the default position
    const screenW = window.innerWidth * 0.05;
    const screenH = -30;
    const handleCloseTrace = () => toggleShowTrace(false);
    return (
    <>
        {showTrace && (
        <Modal
            className="resize"
            key="paint-modal"
            width="1200px"
            height={windowSmall ? "500px" : "800px"}
            icon={<Mshtml32528 variant="48x48_4" />}
            title="ClimateTRACE"
            dragOptions={{
            defaultPosition: {
                x: screenW,
                y: screenH,
            },
            }}
            titleBarOptions={[
            <TitleBar.Help key="help" onClick={handleShowHelp} />,
            <Modal.Minimize />,
            <TitleBar.Close key="close" onClick={handleCloseTrace} />,
            ]}
        >
            <Frame h="100%" w="100%" overflow="auto">
            <iframe
                src="https://climatetrace.org/explore#admin=&gas=co2e&year=2025&timeframe=100&sector=transportation&asset="
                width="100%"
                height="99%"
            ></iframe>
            </Frame>
        </Modal>
        )}
    </>
    );
} 
