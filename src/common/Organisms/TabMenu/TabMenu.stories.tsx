import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Meta } from "@storybook/react/types-6-0";
import { TabList, TabMenu, TabPanel } from "./index";

export default {
  title: "organisms/TabMenu",
  component: TabMenu,
} as Meta;

const TabMenuTemplate = () => (
  <MemoryRouter>
    <TabMenu>
      <TabList tabButtonList={["write", "preview"]} />
      <TabPanel index={0}>
        <div>첫번째 panel</div>
      </TabPanel>
      <TabPanel index={1}>
        <div>두번째 panel</div>
      </TabPanel>
    </TabMenu>
  </MemoryRouter>
);
export const DefaultTabMenu = TabMenuTemplate.bind({});
