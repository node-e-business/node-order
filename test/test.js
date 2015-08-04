'use strict';
var assert = require('assert');
var nodeOrder = require('../');

describe('node-order node module', function () {
  it('This it the first test should be passed.', function () {
    nodeOrder();
    assert(true, 'Initial test added');
  });
});
