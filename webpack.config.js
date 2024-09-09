const path = require('path');

module.exports = {
  // Your other webpack configuration
  resolve: {
    fallback: {
      "http": false,
      "https": false,
      "os": false,
      "path": false
    }
  }
};
