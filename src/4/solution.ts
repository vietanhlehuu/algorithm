// brute force: O(n2)
// sort: O(nlogn)
export type Meeting = {
  startTime: number;
  endTime: number;
};

export function mergeRanges(meetings: Meeting[]): Meeting[] {
  if (meetings.length == 0) {
    return [];
  }
  meetings.sort((m1, m2) => m1.startTime - m2.startTime);
  const result: Meeting[] = [meetings[0]];

  for (let idx = 0; idx < meetings.length; idx++) {
    const meeting = meetings[idx];
    const lastMeetingInResult = result[result.length - 1];

    if (meeting.startTime > lastMeetingInResult.endTime) {
      result.push(meeting);
    } else {
      if (meeting.endTime > lastMeetingInResult.endTime) {
        lastMeetingInResult.endTime = meeting.endTime;
      }
    }
  }

  return result;
}
