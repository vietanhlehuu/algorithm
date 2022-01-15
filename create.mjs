#!/usr/bin/env zx

let questionNo = await question("What question do you want to make? ");
await $`mkdir src/${questionNo}`;
cd(`src/${questionNo}`);
await $`touch question.md`;
await $`touch solution.ts`;
await $`touch solution.test.ts`;

const testContent = `
describe("Question ${questionNo}", () => {
  test("Test ${questionNo}.1", () => {
    const actual = 1;
    const expected = 1;

    expect(actual).toBe(expected);
  });
});

`;

await $`echo ${testContent} > solution.test.ts`;
