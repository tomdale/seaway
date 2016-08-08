import { expect } from "chai";
import Application from "../src/application"

describe("routing", () => {
  it("routes", () => {
    expect(new Application()).to.be.an.instanceof(Application);
  });
});