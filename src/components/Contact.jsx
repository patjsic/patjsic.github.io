import { useEffect, useState } from "react";
import { Modal, List, Frame, TitleBar, Tooltip } from "@react95/core";
import { Dialer1 } from "@react95/icons";

export default function Contact(props) {
  const showContact = props.show;
  const toggleShowContact = props.toggle;
  const handleCloseContact = () => {
    toggleShowContact(false);
  };

  // Define the default position
  const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
  const screenH = -20;
  return (
    <>
      {showContact && (
        <Modal
          width="400px"
          height="200px"
          icon={<Dialer1 variant="16x16_4" />}
          title="Contact"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <Modal.Minimize />,
            <TitleBar.Close key="close" onClick={handleCloseContact} />,
          ]}
          menu={[
            {
              name: (
                <>
                  <u>F</u>ile
                </>
              ),
              list: (
                <List width="200px" className="dropdown-menu">
                  <List.Item key="exit-item" onClick={handleCloseContact}>
                    Exit
                  </List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>E</u>dit
                </>
              ),
              list: (
                <List width="200px" className="dropdown-menu">
                  <List.Item key="copy-item">Copy</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame w="100%" h="100%" bgColor="white" boxShadow="$in">
            <div className="contact-info">
              <p>Let's get in touch!</p>
              <p>Find me on any of the following:</p>
              <div className="contact-icons">
                <Tooltip delay={500} text="Github">
                  <a
                    href="https://github.com/patjsic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./github-logo.png"
                      alt="Github"
                      style={{ width: "25px" }}
                    />
                  </a>
                </Tooltip>
                <Tooltip delay={500} text="LinkedIn">
                  <a
                    href="https://www.linkedin.com/in/patrick-sicurello-12716a169/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./linkedin.png"
                      alt="LinkedIn"
                      style={{ width: "25px" }}
                    />
                  </a>
                </Tooltip>
              </div>
            </div>
          </Frame>
        </Modal>
      )}
    </>
  );
}
