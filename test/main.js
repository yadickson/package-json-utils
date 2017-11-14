'use strict';
const pkgUtils = require('..');
const expect = require('chai').expect;
const path = require('path');

describe('Check pkgUtils with package.json', () => {
    describe('Check package.json', () => {

        it('Check name', () => {
            expect(pkgUtils.getProjectName(path.join(__dirname, 'package.json'))).to.be.equal('app-project');
        });

        it('Check version', () => {
            expect(pkgUtils.getVersion(path.join(__dirname, 'package.json'))).to.be.equal('1.0.0');
        });

        it('Check description', () => {
            expect(pkgUtils.getDescription(path.join(__dirname, 'package.json'))).to.be.equal('description project');
        });

        it('Check author', () => {
            expect(pkgUtils.getAuthor(path.join(__dirname, 'package.json'))).to.be.equal('author name');
        });

        it('Check email', () => {
            expect(pkgUtils.getEmail(path.join(__dirname, 'package.json'))).to.be.equal('mail@domain.com');
        });

        it('Check username', () => {
            expect(pkgUtils.getUsername(path.join(__dirname, 'package.json'))).to.be.equal('user');
        });

        it('Check license', () => {
            expect(pkgUtils.getLicense(path.join(__dirname, 'package.json'))).to.be.equal('MIT');
        });

        it('Check appModule', () => {
            expect(pkgUtils.getModuleName(path.join(__dirname, 'package.json'))).to.be.equal('appProjectModule');
        });

    });
});
