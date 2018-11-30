'use strict';

const md5 = require('md5');

module.exports = {
  parseInt(string) {
    if (typeof string === 'number') return string;
    if (!string) return string;
    return parseInt(string) || 0;
  },
  toMD5(string) {
  	return md5(string);
  },
};
