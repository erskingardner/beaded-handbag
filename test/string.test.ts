import { expect, test } from "bun:test";
import * as String from "../src/string";

test("capitalize", () => {
    expect(String.capitalize("bob")).toBe("Bob");
});
