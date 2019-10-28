const mocha = require('mocha')
const chai = require('chai')

const v = require('./index')

describe('Test avatar generation', () => {
    const helloURL = 'http://vanillicon.com/v2/5d41402abc4b2a76b9719d911017c592.svg'
    it(`Should return ${helloURL}`, () => {
        return v.generate('hello').then(url => chai.assert(url === helloURL))
    })

    const lolURL = 'http://vanillicon.com/v2/9cdfb439c7876e703e307864c9167a15.svg'
    it(`Should return ${lolURL}`, () => {
        return v.generate('lol').then(url => chai.assert(url === lolURL))
    })
})

