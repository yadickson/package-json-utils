'use strict'

const fs = require('file-system');
const os = require('os')

function getFile(filename) {
    return filename || './package.json';
}

function getPackageJson(filename) {

    filename = getFile(filename);

    var json = {};

    if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
        try {
            var buffer = fs.readFileSync(filename);
            json = JSON.parse(buffer.toString());
        } catch (e) {
            return {};
        }
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

function setPackageJson(data, filename) {
    data = JSON.stringify(data, null, 2);
    fs.writeFileSync(filename, data + os.EOL);
}

function setProjectName(name, filename) {
    var json = getPackageJson(filename);
    json.name = name;
    setPackageJson(json, filename);
}

function setVersion(version, filename) {
    var json = getPackageJson(filename);
    json.version = version;
    setPackageJson(json, filename);
}

function setDescription(description, filename) {
    var json = getPackageJson(filename);
    json.description = description;
    setPackageJson(json, filename);
}

function setAuthor(name, filename) {
    var json = getPackageJson(filename);
    json.author = json.author || {};
    json.author.name = name;
    setPackageJson(json, filename);
}

function setEmail(email, filename) {
    var json = getPackageJson(filename);
    json.author = json.author || {};
    json.author.email = email;
    setPackageJson(json, filename);
}

function setLicense(license, filename) {
    var json = getPackageJson(filename);
    json.license = license;
    setPackageJson(json, filename);
}

module.exports = {
    getPackageJson: getPackageJson,
    getProjectName: getProjectName,
    getVersion: getVersion,
    getDescription: getDescription,
    getAuthor: getAuthor,
    getEmail: getEmail,
    getUsername: getUsername,
    getLicense: getLicense,
    setPackageJson: setPackageJson,
    setProjectName: setProjectName,
    setVersion: setVersion,
    setDescription: setDescription,
    setAuthor: setAuthor,
    setEmail: setEmail,
    setLicense: setLicense
};