'use strict'

const fs = require('file-system');
const camelize = require('camelize');
var path = require('path');
var callerId = require('caller-id');

function getPackageJson(filename) {

    if (!filename) {
        filename = './package.json';
    } else if (!path.isAbsolute(filename)) {
        var caller = callerId.getData();
        filename = path.join(path.dirname(caller.filePath), filename);
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

function getModuleName(filename) {
    return camelize(getProjectName(filename) || 'app') + 'Module';
}

module.exports = {
    getProjectName: getProjectName,
    getVersion: getVersion,
    getDescription: getDescription,
    getAuthor: getAuthor,
    getEmail: getEmail,
    getUsername: getUsername,
    getLicense: getLicense,
    getModuleName: getModuleName
};
