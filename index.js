'use strict'

const fs = require('file-system');

function getPackageJson(filename) {

    if (!filename) {
        filename = './package.json';
    }

    var json = {};

    if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
        var buffer = fs.readFileSync(filename);
        json = JSON.parse(buffer.toString());
    }

    return json;
}

function getProjectName(filename) {
    return getPackageJson(filename).name;
}

function getVersion(filename) {
    return getPackageJson(filename).version || '0.0.0';
}

function getDescription(filename) {
    return getPackageJson(filename).description || '';
}

function getAuthor(filename) {
    var author = getPackageJson(filename).author || {};
    return author.name || '';
}

function getEmail(filename) {
    var author = getPackageJson(filename).author || {};
    return author.email || '';
}

function getUsername(filename) {
    var author = getPackageJson(filename).author || {};
    var user = author.url || '';
    return user.substr(user.lastIndexOf('/') + 1);
}

function getLicense(filename) {
    return getPackageJson(filename).license || 'GPL-3.0';
}

module.exports = {
    getPackageJson: getPackageJson,
    getProjectName: getProjectName,
    getVersion: getVersion,
    getDescription: getDescription,
    getAuthor: getAuthor,
    getEmail: getEmail,
    getUsername: getUsername,
    getLicense: getLicense
};
