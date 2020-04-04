const { equal } = require("assert")
const { One, Two, Three } = require("../src/classes")
const { map } = Array.prototype

describe("Class tests", () =>
  map.call([
    describe("One", () =>
      it("onerun()", () =>
        equal(new One().run(), 1))),
    describe("Two", () =>
      it("tworun()", () =>
        equal(new Two().run(), 2))),
    describe("Three", () => 
      it("threerun()", ()=>
        equal(new Three().run(), 3)))], x => x))
