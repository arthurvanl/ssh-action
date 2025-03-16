// main.ts
import * as core from "@actions/core";
console.log(`Hello ${core.getInput("name")}!`);
console.log(core.getInput('commands'))