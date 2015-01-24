'use strict';

/**
 * @ngdoc service
 * @name qWebApp.qTypes
 * @description
 * # qTypes
 * Constant in the qWebApp.
 */
angular.module('qWebApp')
  .constant('qTypes', {
    bool : {
      name: 'boolean',
      num: 1,
      charVal: 'b',
      size: 1,
      nullVal: null
    },
    guid: {
      name: 'guid',
      num: 2,
      charVal: 'g',
      size: 16,
      nullVal: '0Ng'
    },
    byt: {
      name: 'byte',
      num: 4,
      charVal: 'x',
      size: 1,
      nullVal: null
    },
    shrt: {
      name: 'short',
      num: 5,
      charVal: 'h',
      size: 2,
      nullVal: '0Nh'
    },
    integer: {
      name: 'int',
      num: 6,
      charVal: 'i',
      size: 4,
      nullVal: '0N'
    },
    lng: {
      name: 'long',
      num: 7,
      charVal: 'j',
      size: 8,
      nullVal: '0Nj'
    },
    real: {
      name: 'real',
      num: 8,
      charVal: 'e',
      size: 4,
      nullVal: '0Ne'
    },
    float: {
      name: 'float',
      num: 9,
      charVal: 'f',
      size: 8,
      nullVal: '0n'
    },
    chr: {
      name: 'char',
      num: 10,
      charVal: 'c',
      size: '1',
      nullVal: ''
    },
    symbol: {
      name: 'symbol',
      num: 11,
      charVal: 's',
      size: null,
      nullVal: '`'
    },
    timeStamp: {
      name: 'timestamp',
      num: 12,
      charVal: 'p',
      size: 8,
      nullVal: '0Np'
    },
    month: {
      name: 'month',
      num: 13,
      charVal: 'm',
      size: 4,
      nullVal: '0Nm'
    },
    date: {
      name: 'date',
      num: 14,
      charVal: 'd',
      size: 4,
      nullVal: '0Nd'
    },
    dateTime: {
      name: 'datetime',
      num: 15,
      charVal: 'z',
      size: 8,
      nullVal: '0Nz'
    },
    timeSpan: {
      name: 'timespan',
      num: 16,
      charVal: 'n',
      size: 8,
      nullVal: '0Nn'
    },
    minute: {
      name: 'minute',
      num: '17',
      charVal: 'u',
      size: 4,
      nullVal: '0Nu'
    },
    second: {
      name: 'second',
      num: 18,
      charVal: 'v',
      size: 4,
      nullVal: '0Nv'
    },
    time: {
      name: 'time',
      num: 19,
      charVal: 't',
      size: 4,
      nullVal: '0Nt'
    },
    table: {
      name: 'table',
      num: 98,
      charVal: null,
      size: null,
      nullVal: null
    },
    dictionary: {
      name: 'dict',
      num: 99,
      charVal: null,
      size: null,
      nullVal: null
    }
  });
