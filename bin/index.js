#!/usr/bin/env node

const { execSync } = require('child_process');
const chalk = require('chalk');
const degit = require('degit');
const path = require('path');
const fs = require('fs');

const repo = 'yourusername/node-boilerplate'; // তোমার GitHub Repo
const projectName = process.argv[2] || 'my-app'; // ইউজার যদি নাম না দেয়, তাহলে `my-app`

async function createProject() {
    const projectPath = path.join(process.cwd(), projectName);

    console.log(chalk.blue(`🚀 Creating project: ${projectName}\n`));

    // Degit দিয়ে GitHub থেকে Boilerplate ক্লোন করো
    const emitter = degit(repo, { cache: false, force: true });

    try {
        await emitter.clone(projectPath);
        console.log(chalk.green(`✅ Project created successfully!`));

        // Install dependencies
        console.log(chalk.yellow(`📦 Installing dependencies...`));
        execSync(`cd ${projectPath} && npm install`, { stdio: 'inherit' });

        console.log(chalk.green(`🎉 All done! Next steps:`));
        console.log(chalk.cyan(`cd ${projectName}`));
        console.log(chalk.cyan(`npm run dev`));
    } catch (err) {
        console.error(chalk.red(`❌ Error: ${err.message}`));
    }
}

createProject();
