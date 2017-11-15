'use strict';

const pkgUtils = require('..');
const expect = require('chai').expect;
const mock = require('mock-fs');

describe('Check pkgUtils with write mock-fs success', () => {
    describe('Check package.json', () => {

        beforeEach(function() {
            mock({
                'mock-file': ''
            });
        });

        afterEach(mock.restore);

        it('Set name', () => {
            pkgUtils.setProjectName('app-mock-project', 'mock-file');
            expect(pkgUtils.getProjectName('mock-file')).to.be.equal('app-mock-project');
        });

        it('Set version', () => {
            pkgUtils.setVersion('1.2.3', 'mock-file');
            expect(pkgUtils.getVersion('mock-file')).to.be.equal('1.2.3');
        });

        it('Set description', () => {
            pkgUtils.setDescription('description project', 'mock-file');
            expect(pkgUtils.getDescription('mock-file')).to.be.equal('description project');
        });

        it('Set author', () => {
            pkgUtils.setAuthor('author name', 'mock-file');
            expect(pkgUtils.getAuthor('mock-file')).to.be.equal('author name');
        });

        it('Set email', () => {
            pkgUtils.setEmail('mail@domain.com', 'mock-file');
            expect(pkgUtils.getEmail('mock-file')).to.be.equal('mail@domain.com');
        });

        it('Set license', () => {
            pkgUtils.setLicense('MIT', 'mock-file');
            expect(pkgUtils.getLicense('mock-file')).to.be.equal('MIT');
        });

    });
});