import { Modal, List, Frame, TitleBar, Tooltip } from "@react95/core";
import { User } from "@react95/icons";

export default function Credit(props) {
  const showCredit = props.show;
  const toggleShowCredit = props.toggle;
  const handleCloseCredit = () => {
    toggleShowCredit(false);
  };

  // Define the default position
  const screenW = window.innerWidth * 0.04; // Initial width 50% of screen
  const screenH = -20;
  return (
    <>
      {showCredit && (
        <Modal
          width="400px"
        //   height="200px"
          icon={<User variant="16x16_4" />}
          title="Credit"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <Modal.Minimize />,
            <TitleBar.Close key="close" onClick={handleCloseCredit} />,
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
                  <List.Item key="exit-item" onClick={handleCloseCredit}>
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
            <div className="flex-container contact-info">
              <div className="box">
                <img src="src/images/patrick-star/egg.gif"></img>
              </div>
              <div className="box">
                <p>
                  The amazing initial original source code for this project is largely
                  from Github user hawwokitty :{" "}
                  <br></br>
                  <a
                    href="https://github.com/hawwokitty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="gentle-tilt-move-shake">Hawwokitty's Github Repo</span>
                  </a>

                  <br></br>
                  Style components are sourced from the incredibly cool <b>React95</b> repo! Link can be found below:
                  
                  <br></br>
                  <a
                    href="https://github.com/React95/React95"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="gentle-tilt-move-shake">React95 library</span>
                  </a>
                  .
                </p>
              </div>
            </div>
          </Frame>
        </Modal>
      )}
    </>
  );
}
