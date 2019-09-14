#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var program = require("commander");
program
    .version(require('../package').version)
    .usage('<command> [options]')
    .command('add', 'add a new template')
    .command('delete', 'delete a template')
    .command('list', 'list all the templates')
    .command('init', 'generate a new project from a template');
program.parse(process.argv);
//# sourceMappingURL=index.js.map