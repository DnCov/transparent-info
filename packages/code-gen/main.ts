import { runner } from 'hygen';
import path from 'path';
import fs from 'fs';

const Logger = require('hygen/lib/logger');

const defaultTemplates = path.join(__dirname, '_templates');

async function genAggregation() {
  const timelines = await fs.promises.readdir(`${__dirname}/../transparent-info-app/timeline`);

  const posts = await fs.promises.readdir(`${__dirname}/../transparent-info-app/pages/posts`);

  runner(['infoapp', 'agg'], {
    templates: defaultTemplates,
    cwd: process.cwd(),
    createPrompter: () => require('enquirer'),
    logger: new Logger(console.log.bind(console)),
    // exec: (action, body) => {
    //   const opts = {};
    //   return require('execa').shell(action, opts);
    // },
    helpers: {
      timelines,
      posts: posts.filter(e => !e.startsWith('index.')),
    },
  });
}

async function main() {
  await genAggregation();
}

main();
