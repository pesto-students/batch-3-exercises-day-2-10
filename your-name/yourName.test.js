import { yourName } from "./yourName";

describe("Write your name in the test", () => {
    test("should return name", () => {
        expect(yourName()).toBe("Shikhar Dubey");
    });
});
