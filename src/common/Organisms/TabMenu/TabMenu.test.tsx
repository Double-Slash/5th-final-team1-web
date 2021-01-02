import React from "react";
import { mount } from "enzyme";
import { TabList, TabMenu, TabPanel } from "./index";
import { TabMenuContext } from "./context";

interface IProps {
  buttons: string[];
  panels: JSX.Element[];
}

const DummyPanel = (
  <>
    <div>d</div>
  </>
);

const props = {
  buttons: ["글작성", "미리보기"],
  panels: [DummyPanel, DummyPanel],
};

const setup = ({ buttons, panels }: IProps) => {
  const wrapper = mount(
    <TabMenuContext.Provider
      value={{
        dispatch: jest.fn(),
        tabBtnIndex: 1,
      }}
    >
      <TabMenu>
        <TabList tabButtonList={buttons} />
        {panels.map((value, index) => (
          <TabPanel key={Math.random()} index={index}>
            {value}
          </TabPanel>
        ))}
      </TabMenu>
    </TabMenuContext.Provider>,
  );
  const button = wrapper.find(TabList).find("li");
  const panel = wrapper.find(TabPanel);
  return { button, panel };
};

describe("<TabMenu />", () => {
  it("기본값으로 첫번째 TabButton과 TabPanel에 active classname이 존재한다", () => {
    const { button, panel } = setup(props);
    const firstButton = button.first().getDOMNode();
    const firstPanel = panel.first().getDOMNode();
    expect(firstButton.className).toContain("active");
    expect(firstPanel.className).toContain("active");
  });

  it("클릭한 TabButton에만 active classname이 존재한다", () => {
    const { button } = setup(props);
    const firstButton = button.at(0);
    const clickedBtn = button.at(1);
    clickedBtn.simulate("click");
    expect(firstButton.getDOMNode().className).not.toContain("active");
    expect(clickedBtn.getDOMNode().className).toContain("active");
  });

  it("클릭한 TabButton index와 동일한 TabPanel에다가 active classname을 추가한다", () => {
    const { button, panel } = setup(props);
    const clickedBtn = button.at(1);
    const firstPanel = panel.first().getDOMNode();
    const secondPanel = panel.at(1).getDOMNode();
    clickedBtn.simulate("click");
    expect(firstPanel.className).not.toContain("active");
    expect(secondPanel.className).toContain("active");
  });
});
