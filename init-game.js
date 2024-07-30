#!/usr/bin/env node

'use strict';

console.log("WE ARE HERE!");

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

console.log(`Running in Node.js ${major}`);

if (process.argv.length < 3) {
    console.error("Project name was not provided");
    process.exit(1);
}

const projectName = process.argv[2];
console.log(`Will create project: ${projectName}`);
