module.exports = {
  generate: function (length) {
    var moment = require("moment");
    var encrypt = require('crypto');
    var date = new Date();
    var time = moment(date).format('YYYYMMDDHHmmss');
    return time + '-' + this.letters(length || 4);
  },
  letters: function (length, noEven) {
    var upper = 65;
    var lower = 97;
    var max = 26;
    var str = "";
    for (var i = 0; i < length; i++) {
      var even = (Math.random() * 100).toFixed(0) % 2;
      var offset = (Math.random() * 100).toFixed(0) % max;
      if (!noEven) {
        even = 1;
      }
      if (even) {
        str += String.fromCharCode(upper + offset);
      } else {
        str += String.fromCharCode(lower + offset);
      }
    }
    return str;
  }
}
