const { equal } = require("assert")
const { one, two, three } = require("../src/functions")
const { map } = Array.prototype

describe("Function tests", () =>
  map.call([
    it("one()", () =>
      equal(one(), 1)),
    it("two()", () =>
      equal(two(), 2)),
    it("three()", () =>
      equal(three(), 3))], x => x))
