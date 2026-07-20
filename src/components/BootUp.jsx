import { useEffect } from "react";
import { Modal, Frame } from "@react95/core";

export default function StartupScreen(props) {
    const showStartUp = props.show;
    const toggleShowStartup = props.toggle;

    useEffect(()=>{
        if (!showStartUp) {
            return;
        }
        const timer = setTimeout(() => {
            toggleShowStartup(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [showStartUp, toggleShowStartup]);

    if (!showStartUp){
        return null;
    }

    const handleCloseStartup = () => {
        toggleShowStartup(false);
    }

    return (
        <>
            {showStartUp && (

                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "black",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                }}>
                    <img 
                    src="./boot.gif"
                    alt="Startup gif animation"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                    />
                </div>

            )}
        </>
    )
}
