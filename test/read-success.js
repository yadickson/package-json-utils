'use strict';

const pkgUtils = require('..');
const expect = require('chai').expect;
const mock = require('mock-fs');

describe('Check pkgUtils with mock-fs success', () => {
    describe('Check package.json', () => {

        beforeEach(function() {
            mock({
                'mock-file': '{ "name": "app-project", "version": "1.0.0", "description": "description project", "author": { "name": "author name", "email": "mail@domain.com", "url": "https://github.com/user" }, "license": "MIT" }'
            });
        });

        afterEach(mock.restore);

        it('Check name', () => {
            expect(pkgUtils.getProjectName('mock-file')).to.be.equal('app-project');
        });

        it('Check version', () => {
            expect(pkgUtils.getVersion('mock-file')).to.be.equal('1.0.0');
        });

        it('Check description', () => {
            expect(pkgUtils.getDescription('mock-file')).to.be.equal('description project');
        });

        it('Check author', () => {
            expect(pkgUtils.getAuthor('mock-file')).to.be.equal('author name');
        });

        it('Check email', () => {
            expect(pkgUtils.getEmail('mock-file')).to.be.equal('mail@domain.com');
        });

        it('Check username', () => {
            expect(pkgUtils.getUsername('mock-file')).to.be.equal('user');
        });

        it('Check license', () => {
            expect(pkgUtils.getLicense('mock-file')).to.be.equal('MIT');
        });

    });
});