const fs = require('fs');

const filePath = 'start/changelog.md';

const getLatestVersion = () => new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const lines = data.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.includes('##')) {
                resolve({
                    cleared: line.split(" ").splice(3).join(" ").replace("\r", ""),
                    title: "⏬-"+line.split(" ").splice(2).join(" ").replace("\r", "").replaceAll(".","-").replaceAll(" ","-").replaceAll("/","-")
                });
            }
        };
    });
})

getLatestVersion().then(version => {
    console.log(version);
    // 复制一份 main_page.vue 到 main_page.vue.bak
    fs.copyFile('main_page.vue', 'main_page.vue.bak', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Successfully backed up main_page.vue');
    });
    // 替换掉 main_pgae.vue 中的所有 || LatestVersionPlaceHolder || 到最新版本号
    const mainPagePath = 'main_page.vue';
    fs.readFile(mainPagePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const newData = data.replace(/\|\| LatestVersionPlaceHolder \|\|/g, version.cleared).replace(/\|\| LatestVersionLinkPlaceHolder \|\|/g, version.title);
        fs.writeFile(mainPagePath, newData, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Successfully updated version in main_page.vue');
        });
    });
})