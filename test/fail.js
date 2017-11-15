'use strict';
const pkgUtils = require('..');
const expect = require('chai').expect;
const path = require('path');

describe('Check pkgUtils with package.json', () => {
    describe('Check package.json', () => {

        it('Check name', () => {
            expect(pkgUtils.getProjectName('notfail')).to.be.undefined;
        });

        it('Check version', () => {
            expect(pkgUtils.getVersion('notfail')).to.be.equal('0.0.0');
        });

        it('Check description', () => {
            expect(pkgUtils.getDescription('notfail')).to.be.equal('');
        });

        it('Check author', () => {
            expect(pkgUtils.getAuthor('notfail')).to.be.equal('');
        });

        it('Check email', () => {
            expect(pkgUtils.getEmail('notfail')).to.be.equal('');
        });

        it('Check username', () => {
            expect(pkgUtils.getUsername('notfail')).to.be.equal('');
        });

        it('Check license', () => {
            expect(pkgUtils.getLicense('notfail')).to.be.equal('GPL-3.0');
        });

    });
});
