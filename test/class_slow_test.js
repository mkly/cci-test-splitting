const { equal } = require("assert")
const { One, Two, Three } = require("../src/classes")
const { map } = Array.prototype

describe("Class tests", () =>
  map.call([
    describe("One", () =>
      it("onerun()", done =>
        map.call([
          setTimeout.bind(null, done, 2200),
          equal.bind(null, new One().run(), 1)], x => x()))),
    describe("Two", () => 
      it("tworun()", ()=>
        equal(new Two().run(), 2)))], x => x))
