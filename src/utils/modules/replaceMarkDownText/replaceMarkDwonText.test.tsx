import replaceMarkDownText from "./index";

describe("replaceMarkDownText", () => {
  it("↵을 공백 문자로 대체한다", () => {
    const singleTest = replaceMarkDownText("ㄱㄴㄷㄹㅁㅂㅅㅇㅈ↵");
    const multipleTest = replaceMarkDownText("ㅁㅁ↵ㅁㅁ↵ㅁㅁ↵ㅁㅁ↵ㅁㅁ↵");
    expect(singleTest).toBe("ㄱㄴㄷㄹㅁㅂㅅㅇㅈ ");
    expect(multipleTest).toBe("ㅁㅁ ㅁㅁ ㅁㅁ ㅁㅁ ㅁㅁ ");
  });

  it("# 을 전부 제거한다", () => {
    const h1 = replaceMarkDownText("# asd↵");
    const h2 = replaceMarkDownText("## asd↵");
    const h3 = replaceMarkDownText("### asd↵");
    const h4 = replaceMarkDownText("#### asd↵");
    const h5 = replaceMarkDownText("##### asd↵");
    const h6 = replaceMarkDownText("###### asd↵");
    const mutiple = replaceMarkDownText("# aaa↵## bbb↵### ccc↵#### ddd↵##### eee↵");
    expect(h1).toBe("asd ");
    expect(h2).toBe("asd ");
    expect(h3).toBe("asd ");
    expect(h4).toBe("asd ");
    expect(h5).toBe("asd ");
    expect(h6).toBe("asd ");
    expect(mutiple).toBe("aaa bbb ccc ddd eee ");
  });

  it("좌우에 **을 전부 제거한다", () => {
    const defaultBold = replaceMarkDownText("**defaultBold**↵");
    const existsSpace = replaceMarkDownText("**exists space**↵");
    const notNewLine = replaceMarkDownText("**not new line**");
    expect(defaultBold).toBe("defaultBold ");
    expect(existsSpace).toBe("exists space ");
    expect(notNewLine).toBe("not new line");
  });

  it("좌우에 _을 전부 제거한다", () => {
    const defaultItalic = replaceMarkDownText("_defaultItalic_↵");
    const existsSpace = replaceMarkDownText("_exists space_↵");
    const notNewLine = replaceMarkDownText("_not new line_");
    expect(defaultItalic).toBe("defaultItalic ");
    expect(existsSpace).toBe("exists space ");
    expect(notNewLine).toBe("not new line");
  });

  it("좌우에 ~~을 전부 제거한다", () => {
    const defaultStrike = replaceMarkDownText("~~defaultStrike~~↵");
    const existsSpace = replaceMarkDownText("~~exists space~~↵");
    const notNewLine = replaceMarkDownText("~~not new line~~");
    expect(defaultStrike).toBe("defaultStrike ");
    expect(existsSpace).toBe("exists space ");
    expect(notNewLine).toBe("not new line");
  });

  it("``` 사이에 있는 텍스트와 ```울 전부 제거한다", () => {
    const example = "```javascript↵    import React from 'react';↵    const Test = 'test';↵    ```";
    const code = replaceMarkDownText(example);
    expect(code).toBe("");
  });
});
