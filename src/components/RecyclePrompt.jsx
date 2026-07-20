import React, { useState } from "react";
import { Modal, Frame, TitleBar } from "@react95/core";
import { useWindowSize } from "./WindowSizeContext";
import { TheSimpsonsIcon } from "react-old-icons";

export default function RecyclePrompt(props) {
    const handleCloseImage = props.toggle;
    const showImage = props.show;

    const windowSmall = useWindowSize();
    const imgPath = props.imgPath;

    const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
    const screenH = -30;

    return <>
        <Modal
            key="trash-image"
            icon={<TheSimpsonsIcon size={16} />}
            title="Image"
            width="500px"
            height={windowSmall ? "2500px" : "400px"}
            dragOptions={{
            defaultPosition: {
                x: screenW,
                y: screenH,
            },
            }}
            titleBarOptions={[
            <TitleBar.Help
                key="help"
                onClick={() => {
                alert("there is no god.");
                }}
            />,
            <TitleBar.Close key="close" onClick={handleCloseImage} />,
            ]}> 
            <Frame>
                <img src={imgPath} alt={imgPath} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </Frame>
        </Modal>
    </>
}
