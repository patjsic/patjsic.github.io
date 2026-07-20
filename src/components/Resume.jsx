import { useContext } from "react";
import {
  Modal,
  List,
  Fieldset,
  Tabs,
  Tab,
  Checkbox,
  ProgressBar,
  Avatar,
  TitleBar,
} from "@react95/core";
import { AcrobatReader } from "react-old-icons";
import { New16 } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";
import { Button } from "@react95/core";

// const handleShowResume = () => {
//   alert("help");
// }

export default function Resume(props) {
  const showResume = props.show;
  const toggleShowResume = props.toggle;
  const handleShowHelp = props.onHelp;

  const handleCloseResume = () => {
    toggleShowResume(false);
  };

  const windowSmall = useWindowSize();

  // Define the default position
  const screenW = window.innerWidth * 0.04;
  const screenH = -30;
  return (
    <>
      {showResume && (
        <Modal
          width="400px"
          // height="650px"
          icon={<New16 variant="16x16_4" />}
          title="Resume"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help key="help" onClick={handleShowHelp}/>,
            <Modal.Minimize />,
            <TitleBar.Close key="close" onClick={handleCloseResume} />,
          ]}
          // menu={[
          //   {
          //     name: (
          //       <>
          //         <u>F</u>ile
          //       </>
          //     ),
          //     list: (
          //       <List width="200px" className="dropdown-menu">
          //         <List.Item key="exit-item" onClick={handleCloseResume}>
          //           Exit
          //         </List.Item>
          //       </List>
          //     ),
          //   },
          //   {
          //     name: (
          //       <>
          //         <u>E</u>dit
          //       </>
          //     ),
          //     list: (
          //       <List width="200px" className="dropdown-menu">
          //         <List.Item key="copy-item">Copy</List.Item>
          //       </List>
          //     ),
          //   },
          // ]}
        >
          <Tabs defaultActiveTab="About">
            <Tab title="About">
              <div style={{ display: 'inline-flex' }}>
                <Avatar  src="./pstar_science.jpeg" 
                style={{ marginTop : '20px', marginLeft : '2px'}}/>
                <div style={{ marginLeft: '12px' }}>
                  <h3>Hello! I'm Pat</h3>
                  <p>an AI/ML Researcher</p>
                </div>
              </div>
              
              <Fieldset legend="About me">
                <p>
                  Currently at the Johns Hopkins University Applied Physics Laboratory, 
                  I work on developing and evaluating machine-learning methods for complex engineering and physical systems,
                  with a focus on scientific computing, physics-informed modeling, and remote sensing. 
                  My work has included assessing AI-driven algorithm discovery frameworks for the DARPA DIAL program, 
                  developing physics-informed deep learning models for sea-ice drift prediction,
                  and building complex-valued diffusion models for synthetic-aperture radar imagery. This work has been accepted to AMS 2024 and AGU 2024. 
                  I also regularly maintain and update the road transportation global emissions dataset from
                  ClimateTRACE -- which has been presented at Conference of the Parties, COP29 and COP30.
                </p>
              </Fieldset>
              <br/>
              <div style={{ textAlign: "center" }}>
                <a href='src/assets/PS_Resume_new_2026.pdf' target='_blank'>
                <Button 
                  size='lg'
                >
                  <div style={{marginRight: "0px"}}><AcrobatReader size={16}/></div> Download My Resume Here!
                </Button>
                </a>
              </div>
            </Tab>
          </Tabs>
        </Modal>
      )}
    </>
  );
}
