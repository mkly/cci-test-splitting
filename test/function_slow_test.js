const { equal } = require("assert")
const { one, two, three } = require("../src/functions")
const { map } = Array.prototype

describe("Function Slow tests", () =>
  map.call([
    it("one()", done =>
      map.call([
        setTimeout.bind(null, done, 1000),
        equal.bind(null, one(), 1)], x => x())),
    it("two()", done =>
      map.call([
        setTimeout.bind(null, done, 3000),
        equal.bind(null, two(), 2)], x => x()))], x => x))
