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
  CANCELLED: 8
};

const events = {
  error: -1,
  create: 1,
  pay: 2,
  accept: 3,
  deliver: 4,
  receive: 5,
  comment: 6,
  timeout: 7,
  rebuy: 8,
  finish: 9,
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
      default:
        return status.ERROR;
    }
  }
};
