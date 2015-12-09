var moment = require('moment');

module.exports = {
  generate: function(length, upper) {
    var date = new Date();
    var time = moment(date).format('YYYYMMDDHHmmss');
    return time + '-' + this.letters(length || 4, upper);
  },
  letters: function(length, upperCase) {
    var upper = 65;
    var lower = 97;
    var max = 26;
    var str = '';
    for (var i = 0; i < length; i++) {
      var offset = (Math.random() * 100).toFixed(0) % max;
      if (upperCase) {
        str += String.fromCharCode(upper + offset);
      } else {
        str += String.fromCharCode(lower + offset);
      }
    }
    return str;
  }
};
