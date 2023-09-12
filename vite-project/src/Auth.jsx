import React from "react";
import SignUp from "./auth/SignUp";
import Instructor from "./auth/Instructor";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const MainAuth = () => {
  return (
    <div className="auth-page">
      <Tabs variant="enclosed" className="chakra-tabs">
        <TabList>
          <Tab>
            <span>sign-up</span>
          </Tab>
          <Tab>
            <span>Cources / for teachers</span>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUp />
          </TabPanel>
          <TabPanel>
            <Instructor />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default MainAuth;
