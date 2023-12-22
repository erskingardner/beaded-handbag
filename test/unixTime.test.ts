import { expect, test } from "bun:test";
import * as UnixTime from "../src/unixTime";

test("unixTimeNowInSeconds", () => {
    expect(UnixTime.nowInSeconds()).toBe(Math.floor(new Date().getTime() / 1000));
});

test("unixTimeNowInMilliseconds", () => {
    expect(UnixTime.nowInMilliseconds()).toBe(new Date().getTime());
});
