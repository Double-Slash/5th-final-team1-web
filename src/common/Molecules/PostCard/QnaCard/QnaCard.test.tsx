import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import QnaCard, { QnaCardProps, dummyData } from "./index";

const initialProps: QnaCardProps = {
  cardData: dummyData,
};

const setup = (props: Partial<QnaCardProps> = {}) => {
  const wrapper = mount(
    <MemoryRouter>
      <QnaCard {...initialProps} {...props} />
    </MemoryRouter>,
  );
  const title = wrapper.find(QnaCard).find("h1");
  const paragraph = wrapper.find(QnaCard).find("p");
  return { paragraph, title };
};

describe("<QnaCard />", () => {
  // TO DO... 10글자는 임의로 기준을 잡음. 추후에 글자가 줄바꿈하려고 할때로 변경
  describe("제목이 10글자를 초과할 경우, 초과 된 부분을 ...으로 대체한다", () => {
    it("10글자 이하", () => {
      const { cardData } = initialProps;
      cardData.title = "안녕하세요";
      const { title } = setup({ cardData });
      expect(title.text()).toBe("안녕하세요");
    });

    it("10글자", () => {
      const { cardData } = initialProps;
      cardData.title = "안녕하세요안녕하세요";
      const { title } = setup({ cardData });
      expect(title.text()).toBe("안녕하세요안녕하세요");
    });

    it("10글자 초과", () => {
      const { cardData } = initialProps;
      cardData.title = "안녕하세요안녕하세요안녕하세요안녕하세요";
      const { title } = setup({ cardData });
      expect(title.text()).toBe("안녕하세요안녕하세요...");
    });

    it("한글, 영어, 띄어쓰기, 특수문자", () => {
      const { cardData } = initialProps;
      cardData.title = "[hi]타이틀 title입니다";
      const { title } = setup({ cardData });
      expect(title.text()).toBe("[hi]타이틀 ti...");
    });

    it("길이가 10을 초과하고 10번째가 띄어쓰기인 경우, 띄어쓰기를 trim()한다", () => {
      const { cardData } = initialProps;
      cardData.title = "sdf wds 가 나다라밥";
      const { title } = setup({ cardData });
      expect(title.text()).not.toBe("sdf wds 가 ...");
      expect(title.text()).toBe("sdf wds 가...");
    });
  });

  // TO DO... 10글자는 임의로 기준을 잡음. 추후에 글자가 줄바꿈하려고 할때로 변경
  describe("본문이 50글자를 초과할 경우, 초과 된 부분을 ...으로 대체한다", () => {
    it("49글자", () => {
      const { cardData } = initialProps;
      cardData.payload = "0123456789012345678901234567890123456789012345678";
      const { paragraph } = setup({ cardData });
      expect(paragraph.text()).toBe("0123456789012345678901234567890123456789012345678");
    });

    it("50글자", () => {
      const { cardData } = initialProps;
      cardData.payload = "01234567890123456789012345678901234567890123456789";
      const { paragraph } = setup({ cardData });
      expect(paragraph.text()).toBe("01234567890123456789012345678901234567890123456789");
    });

    it("51글자 초과", () => {
      const { cardData } = initialProps;
      cardData.payload = "012345678901234567890123456789012345678901234567890";
      const { paragraph } = setup({ cardData });
      expect(paragraph.text()).toBe("01234567890123456789012345678901234567890123456789...");
    });

    it("한글, 영어, 띄어쓰기, 특수문자", () => {
      const { cardData } = initialProps;
      cardData.payload = "[hi]본문 ti";
      const { paragraph } = setup({ cardData });
      expect(paragraph.text()).toBe("[hi]본문 ti");
    });

    it("길이가 50을 초과하고 50번째가 띄어쓰기인 경우, 띄어쓰기를 trim()한다", () => {
      const { cardData } = initialProps;
      cardData.payload = "0123456789012345678901234567890123456789012345678 9012345";
      const { paragraph } = setup({ cardData });
      expect(paragraph.text()).not.toBe("0123456789012345678901234567890123456789012345678 ...");
      expect(paragraph.text()).toBe("0123456789012345678901234567890123456789012345678...");
    });
  });
});
