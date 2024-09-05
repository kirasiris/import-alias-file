const lookFile = require("import-alias-file");
const test = lookFile("@/example");
console.log("Test", test);
