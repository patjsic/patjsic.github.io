import { Modal, Frame, TitleBar } from "@react95/core";
import { GIFConstructionSet } from "react-old-icons"

export default function IntroComp(props) {
    const showIntro = props.show;
    const toggleShowIntro = props.toggle;
    const handleCloseIntro = () => {
        toggleShowIntro(false);
    };

    const screenW = window.innerWidth * 0.3; // Initial width 50% of screen
    const screenH = -20;

    return (
        <>
        {showIntro && (
            <Modal
                width="300px"
                height="150px"
                icon=<GIFConstructionSet size={16} />
                title="UNDER CONSTRUCTION"
                dragOptions={{
                defaultPosition: {
                    x: screenW,
                    y: screenH,
                },
                }}
                titleBarOptions={[
                <Modal.Minimize />,
                <TitleBar.Close key="close" onClick={handleCloseIntro} />,
                ]}
            >
            <Frame w="100%" h="100%">
                <div class="flex-container-vert" style={{ textAlign: "center", marginTop: "10px"}}>
                    <div >
                        <img src="./uc3.gif"></img>
                    </div>
                    <div>
                        <b>WARNING!</b> This site is currently in development. Please proceed with caution.
                        The Recycling Bin is known to act funky...
                    </div>
                </div>
            </Frame>

            </Modal>
        )}
        </>
    )
}
