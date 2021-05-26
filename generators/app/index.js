const Generator = require('yeoman-generator');
module.exports = class extends Generator {
    inputData = {};
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Your project name?',
                default: this.appname
            }
        ]).then((result) => {
            this.inputData = { ...this.inputData, ...result };
        });
    }

    writing() {
        // this.fs.write(this.destinationPath('test.html'), 'Helle world！I`m here~');
        // 模板文件路径
        /* const tmpl = this.templatePath('tmp.html');
        //输出目标路径
        const output = this.destinationPath('tmp.html');
        this.fs.copyTpl(tmpl, output, this.inputData); */

        const templates = ['public/favicon.ico', 'src/assets/fonts/pages.eot', 'src/assets/fonts/pages.svg', 'src/assets/fonts/pages.ttf', 'src/assets/fonts/pages.woff', 'src/assets/images/brands.svg', 'src/assets/images/logo.png', 'src/assets/scripts/main.js', 'src/assets/styles/_icons.scss', 'src/assets/styles/_variables.scss', 'src/assets/styles/main.scss', 'src/layouts/basic.html', 'src/partials/footer.html', 'src/partials/header.html', 'src/about.html', 'src/index.html', 'gulpfile.js', 'LICENSE', 'package.json', 'README.md'];

        templates.forEach((item) => {
            this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), this.inputData);
        });
    }
};
