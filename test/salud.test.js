const test = require("node:test");
const assert = require("node:assert/strict");
const { saludo } = require("../src/saludo");

test("saluda por nombre", () => {
  assert.equal(saludo("LAB"), "Hola, LAB");
});
