const path = require('path');

module.exports = {
  entry: './localML.js', // Entry point of your application
  output: {
    filename: 'localML.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
};