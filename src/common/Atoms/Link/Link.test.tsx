import React from "react";
import { MemoryRouter, Link as ReactLink } from "react-router-dom";
import { JSDOM } from "jsdom";
import { mount } from "enzyme";
import Link, { LinkProps } from "./index";

describe("<Link />", () => {
  const initialProps: LinkProps = {
    to: "to",
  };

  const setup = (props: Partial<LinkProps> = {}) => {
    const utils = mount(
      <MemoryRouter>
        <Link {...initialProps} {...props} />
      </MemoryRouter>,
    );
    const wrapper = utils.find(Link);
    const link = utils.find(ReactLink);
    return { link, wrapper };
  };

  it("Link의 to는 link props가 된다", () => {
    const { link: link1 } = setup({ to: "Project" });
    const { link: link2 } = setup({ to: "project" });
    const { link: link3 } = setup({ to: "안녕하세요" });
    expect(link1.props().to).toBe("/Project");
    expect(link2.props().to).toBe("/project");
    expect(link3.props().to).toBe("/안녕하세요");
  });

  it("Link를 클릭할 경우, 해당 페이지로 이동한다", () => {
    const dom = new JSDOM();
    const { link } = setup({ to: "QnA" });
    dom.reconfigure({ url: "https://www.blahblah.com/qna" });
    link.simulate("click");
    expect(dom.window.location.pathname).toBe("/qna");
  });
});
