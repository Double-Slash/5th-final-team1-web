import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import HashTag from "@common/Atoms/HashTag";
import HashTagGroup, { HashTagGroupProps } from "./index";

const initialProps: HashTagGroupProps = {
  namingList: ["react", "vue", "더블슬래쉬"],
};

const setup = (props: Partial<HashTagGroupProps> = {}) => {
  const wrapper = mount(
    <MemoryRouter>
      <HashTagGroup {...initialProps} {...props} />
    </MemoryRouter>,
  );
  const hashTagGroup = wrapper.find(HashTagGroup);
  return { hashTagGroup };
};

describe("<HashTagGroup />", () => {
  it("전달받은 namingList로 Link 컴포넌트를 출력시킨다", () => {
    const namingList = ["더블슬래쉬", "개발자", "developer"];
    const { hashTagGroup } = setup({ namingList });
    expect(hashTagGroup.find(HashTag)).toHaveLength(3);
    hashTagGroup.find(HashTag).forEach((node, index) => {
      expect(node.text()).toBe(namingList[index]);
    });
  });
});
