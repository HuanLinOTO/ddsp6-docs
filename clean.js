const fs = require('fs');

// 将main_page.vue.bak还原到main_page.vue
fs.copyFile('main_page.vue.bak', 'main_page.vue', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Successfully restored main_page.vue');
});
// 删掉main_page.vue.bak
fs.unlink('main_page.vue.bak', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Successfully deleted main_page.vue.bak');
});