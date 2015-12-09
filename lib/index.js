import {
  EventEmitter as Emitter
}
from 'events';
const status = {
  ERROR: -1,
  CREATED: 1, //
  PAID: 2,
  ACCEPTED: 3,
  DELIVERED: 4,
  RECEIVED: 6,
  COMMENTED: 6,
  FINISHED: 7,
  CANCELLED: 8,
  TAKEN: 9
};

const events = {
  create: 1,
  pay: 2,
  accept: 3,
  deliver: 4,
  receive: 5,
  comment: 6,
  timeout: 7,
  finish: 8,
  take: 9,
  cancel: 10
};
var emitter = new Emitter();
export default {
  status: status,
  events: events,
  id: require('./id'),
  on: function(event, cb) {
    if (events[event]) {
      emitter.on(event, cb);
      return true;
    }
    return false;
  },
  emit: function(event, data) {
    if (events[event]) {
      emitter.emit(event, data);
      return true;
    }
    return false;
  },
  getStatus: function(event, success) {
    if (!success) {
      return -1;
    }
    switch (event) {
      case events.create:
        return status.CREATED;
      case events.cancel:
        return status.CANCELLED;
      case events.pay:
        return status.PAID;
      case events.accept:
        return status.ACCEPTED;
      case events.deliver:
        return status.DELIVERED;
      case events.receive:
        return status.RECEIVED;
      case events.take:
        return status.TAKEN;
      case events.comment:
        return status.COMMENTED;
      case events.timeout:
      case events.finish:
        return status.FINISHED;
      default:
        return status.ERROR;
    }
  }
};
