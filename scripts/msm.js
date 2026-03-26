import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import {execSync} from "child_process";

const config = yaml.load(fs.readFileSync("msm.yml", "utf8"));

function run(cmd, cwd = process.cwd()) {
    console.log(`\n👉 ${cmd}`);
    execSync(cmd, {stdio: "inherit", cwd});
}

function getRepoName(url) {
    return url.split("/").pop().replace(".git", "");
}

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true});
    }
}


if (config.startScript) {
    console.log("\n🚀 Running start_script...");
    config.startScript.forEach(cmd => run(cmd));
}

for (const dep of config.dependencies || []) {
    console.log(`\n📦 Processing: ${dep.name}`);

    const baseDir = dep.dir || ".";
    ensureDir(baseDir);

    const branch = dep.clone?.branch || "main";
    const scriptList = dep.clone?.script || [];

    for (const repo of dep.clone.repo || []) {
        const repoName = getRepoName(repo.url);
        const targetDir = path.join(baseDir, repoName);

        if (fs.existsSync(targetDir)) {
            console.log(`🔄 Pulling ${repoName}...`);
            run(`git pull`, targetDir);
        } else {
            console.log(`📥 Cloning ${repoName}...`);
            run(`git clone -b ${branch} ${repo.url} ${targetDir}`);
        }

        // Run post scripts inside repo
        for (const cmd of scriptList) {
            run(cmd, targetDir);
        }
    }
}

if (config.endScript) {
    console.log("\n🏁 Running end script...");
    config.endScript.forEach(cmd => run(cmd));
}

console.log("\n✅ Setup completed!");