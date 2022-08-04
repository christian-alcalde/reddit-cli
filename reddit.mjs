#! /usr/bin/env node
// ^ tells the cli to interpret this in the node environment

import fetch from 'node-fetch';
import open from 'open';
import yargs from 'yargs';

// process arguments that are passed in
const {argv} = yargs(process.argv);

const res = await fetch('https://reddit.com/.json');
const data = await res.json();
const children = data.data.children;
const randomPost = children[Math.floor(Math.random() * children.length)];
const link = `https://reddit.com${randomPost.data.permalink}`

if(argv.print) {
  console.log(`
    title: ${randomPost.data.title}
    link: ${link}
  `)
} else {
  open(link)
}