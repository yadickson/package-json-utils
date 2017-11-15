# package-json-utils

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![npm version][npm-image]][npm-url]

Read and update package.json files.

## Installation
To install this module, you need to run the following command

```
$ npm install package-json-utils
```

## Usage

```Javascript
var pkg = require('package-json-utils');

// Get all package json string
var packageJson = pkg.getPackageJson();

// Get project name
// "name": "project name"
var projectName = pkg.getProjectName();

// Get project version
// "version": "project version"
var version = pkg.getVersion();

// Get project description
// "description": "project description"
var description = pkg.getDescription();

// Get project author (author -> name)
// "author" : { "name" : "author name" }
var author = pkg.getAuthor();

// Get project email (author -> email)
// "author" : { "email" : "author email" }
var email = pkg.getEmail();

// Get project github username (author -> url -> username)
// "author" : { "url" : "https://github.com/username" }
var username = pkg.getUsername();

// Get project license
// "license": "GPL-3.0"
var license = pkg.getLicense();

// Write all package json string
pkg.setPackageJson(json);

// Set project name
// "name": "new name"
pkg.setProjectName('new name');

// Set project version
// "version": "new version"
pkg.setVersion('new version');

// Set project description
// "description": "new description"
pkg.setDescription('new description');

// Set project author (author -> name)
// "author" : { "name" : "new name" }
pkg.setAuthor('new name');

// Set project email (author -> email)
// "author" : { "email" : "new email" }
pkg.setEmail('new email');

// Set project license
// "license": "new license"
pkg.setLicense('new license');
```

[travis-image]: https://travis-ci.org/yadickson/package-json-utils.svg
[travis-url]: https://travis-ci.org/yadickson/package-json-utils

[coveralls-image]: https://coveralls.io/repos/github/yadickson/package-json-utils/badge.svg
[coveralls-url]: https://coveralls.io/github/yadickson/package-json-utils

[dependencies-image]: https://david-dm.org/yadickson/package-json-utils/status.svg
[dependencies-url]: https://david-dm.org/yadickson/package-json-utils?view=list

[dev-dependencies-image]: https://david-dm.org/yadickson/package-json-utils/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/yadickson/package-json-utils?type=dev&view=list

[vulnerabilities-image]: https://snyk.io/package/npm/package-json-utils/badge.svg
[vulnerabilities-url]: https://snyk.io/package/npm/package-json-utils

[npm-image]: https://badge.fury.io/js/package-json-utils.svg
[npm-url]: https://badge.fury.io/js/package-json-utils
