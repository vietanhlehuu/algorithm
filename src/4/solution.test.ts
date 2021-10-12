import { Meeting, mergeRanges } from "./solution";

describe("Question 4", () => {
  let actual: Meeting[], expected: Meeting[];

  test("meetings overlap", () => {
    actual = mergeRanges([
      { startTime: 1, endTime: 3 },
      { startTime: 2, endTime: 4 },
    ]);
    expected = [{ startTime: 1, endTime: 4 }];

    expect(actual).toEqual(expected);
  });

  test("meetings touch", () => {
    actual = mergeRanges([
      { startTime: 5, endTime: 6 },
      { startTime: 6, endTime: 8 },
    ]);
    expected = [{ startTime: 5, endTime: 8 }];

    expect(actual).toEqual(expected);
  });

  test("meeting contains other meeting", () => {
    actual = mergeRanges([
      { startTime: 1, endTime: 8 },
      { startTime: 2, endTime: 5 },
    ]);
    expected = [{ startTime: 1, endTime: 8 }];

    expect(actual).toEqual(expected);
  });

  test("meetings stay separate", () => {
    actual = mergeRanges([
      { startTime: 1, endTime: 3 },
      { startTime: 4, endTime: 8 },
    ]);
    expected = [
      { startTime: 1, endTime: 3 },
      { startTime: 4, endTime: 8 },
    ];

    expect(actual).toEqual(expected);
  });

  test("multiple merged meetings", () => {
    actual = mergeRanges([
      { startTime: 1, endTime: 4 },
      { startTime: 2, endTime: 5 },
      { startTime: 5, endTime: 8 },
    ]);
    expected = [{ startTime: 1, endTime: 8 }];

    expect(actual).toEqual(expected);
  });

  test("meetings not sorted", () => {
    actual = mergeRanges([
      { startTime: 5, endTime: 8 },
      { startTime: 1, endTime: 4 },
      { startTime: 6, endTime: 8 },
    ]);
    expected = [
      { startTime: 1, endTime: 4 },
      { startTime: 5, endTime: 8 },
    ];

    expect(actual).toEqual(expected);
  });

  test("oneLongMeetingContainsSmallerMeetings", () => {
    actual = mergeRanges([
      { startTime: 1, endTime: 10 },
      { startTime: 2, endTime: 5 },
      { startTime: 6, endTime: 8 },
      { startTime: 9, endTime: 10 },
      { startTime: 10, endTime: 12 },
    ]);
    expected = [{ startTime: 1, endTime: 12 }];

    expect(actual).toEqual(expected);
  });

  test("sample input", () => {
    actual = mergeRanges([
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 5 },
      { startTime: 4, endTime: 8 },
      { startTime: 10, endTime: 12 },
      { startTime: 9, endTime: 10 },
    ]);
    expected = [
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 12 },
    ];
    expect(actual).toEqual(expected);
  });
});
