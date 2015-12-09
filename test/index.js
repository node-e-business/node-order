import assert from 'assert';
import nodeOrder from '../lib';

describe('node-order', function() {
  it('should generate order id', function() {
    var no = nodeOrder.id.generate(6);
    var a = no.split('-');
    assert(true, /[0-9]{14}/.test(a[0]));
    assert(true, /[A-Z]{6}/.test(a[1]));
    no = nodeOrder.id.generate(6, true);
    a = no.split('-');
    assert(true, /[0-9]{14}/.test(a[0]));
    assert(true, /[a-z]{6}/.test(a[1]));
  });
  it('should be able to listen on events and emit event changes', function(done) {
    nodeOrder.on('create', function(data) {
      assert(true, !!data.id);
      assert(true, data.a === 'aa');
      assert(true, data.b === 'bb');
      done();
    });

    nodeOrder.emit('create', {
      id: nodeOrder.id.generate(6),
      a: 'aa',
      b: 'bb'
    });
  });

  it('should not be able to listen on events out of defined and emit it', function() {
    assert.equal(false, nodeOrder.on('create1', function() {
    }));

    assert.equal(false, nodeOrder.emit('create1', {
      id: nodeOrder.id.generate(6),
      a: 'aa',
      b: 'bb'
    }));
  });

  it('should get -1 without event success', function() {
    assert.equal(-1, nodeOrder.getStatus(nodeOrder.events.create, false));
  });

  it('should get status when event success', function() {
    assert.equal(nodeOrder.status.CREATED, nodeOrder.getStatus(nodeOrder.events.create, true));
  });
});
