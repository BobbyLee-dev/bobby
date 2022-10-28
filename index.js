#!/usr/bin/env node

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./package.json");
import welcome from 'cli-welcome';
import chalk from 'chalk';
import sym from 'log-symbols'
const log = console.log;


welcome({
  title: `Bobby Lee`,
  version: data.version,
  bgColor: `#FADC00`,
  color: `#8A2BE2`,
  bold: true,
  clear: true
})

log(`${chalk.cyan.bold(`Senior Web Developer who loves to code!
Working with an awesome team, building some sweeeet stuff.
`)}

`)
