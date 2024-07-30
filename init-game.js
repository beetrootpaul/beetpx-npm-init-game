#!/usr/bin/env node

'use strict';

const expectedNodeMinVersionMajor = 18;
const currentNodeVersionMajor = process.versions.node?.split('.')?.[0];

if (isNaN(Number(currentNodeVersionMajor)) || Number(currentNodeVersionMajor) < expectedNodeMinVersionMajor) {
    console.warn(
        `This tool is supposed to be run under Node.js ${expectedNodeMinVersionMajor} or newer. Currently run under Node.js version: ${process.version}.`
    );
    process.exit(1);
}

if (process.argv.length < 3) {
    console.warn("Project name has to be provided as a first argument.");
    process.exit(1);
}
const projectName = process.argv[2];

const projectNameConstraints = /^[-_0-9a-zA-Z]+$/;
if (!projectNameConstraints.test(projectName)) {
    console.warn(`Project name has to match a following RegExp: ${projectNameConstraints.toString()}`);
    process.exit(1);
}

console.log(`Will create project: ${projectName}`);
