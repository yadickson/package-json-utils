'use strict';
const pkgUtils = require('..');
const expect = require('chai').expect;

describe('Check pkgUtils current package.json', () => {
    describe('Check package.json', () => {

        it('Check name', () => {
            expect(pkgUtils.getProjectName()).to.be.equal('package-json-utils');
        });

    });
});
