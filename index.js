#!/usr/bin/env node

const { one } = require("./src/functions")
const { One } = require("./src/classes")

require && require.main && console.log(functions.one(), new classes.One().run())
