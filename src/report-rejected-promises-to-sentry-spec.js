'use strict'

/* global describe, it */
describe('reporter', () => {
  it('exports a function', () => {
    const installReporter = require('.')
    const type = typeof installReporter
    console.assert(type === 'function', type)
  })
})
