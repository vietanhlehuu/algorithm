#!/usr/bin/env zx

let questionNo = await question("What question do you want to make? ");
await $`mkdir src/${questionNo}`;
cd(`src/${questionNo}`);
await $`touch question.md`;
await $`touch solution.ts`;
await $`touch solution.test.ts`;
