var replace = require('replace-in-file');
var package = require("./package.json");
var appVersion = package.version;
const options = {
    files: 'src/environments/environment*.ts',
    from: /version: '(.*)'/g,
    to: "version: '"+ appVersion + "'",
    allowEmptyPaths: false,
};

try {
    let changedFiles = replace.sync(options);
    if (changedFiles == 0) {
      console.info('No changes to app version');
    }
    console.log('Application version set: ' + appVersion);
}
catch (error) {
    console.error('Error occurred:', error);
    throw error
}
