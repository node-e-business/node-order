'use strict';
var assert = require('assert');
var nodeOrder = require('../');

describe('node-order node module', function () {
  it('It should generate order id', function () {
    var no = nodeOrder.id.generate(6);
    var a = no.split('-');
    assert(true, /[0-9]{14}/.test(a[0]));
    assert(true, /[A-Z]{6}/.test(a[1]));
  });
});
