e used cross-browser. Handles the inconsistencies of
     * Array, `null`, and `undefined` detection.
     *
     *     utils.type({}) // 'object'
     *     utils.type(null) // `null'
     *     utils.type(undefined) // `undefined`
     *     utils.type([]) // `array`
     *
     * @param {Mixed} object to detect type of
     * @name type
     * @api private
     */

    module.exports = function (obj) {
      var str = Object.prototype.toString.call(obj);
      if (natives[str]) return natives[str];
      if (obj === null) return 'null';
      if (obj === undefined) return 'undefined';
      if (obj === Object(obj)) return 'object';
      return typeof obj;
    };

  }); // module: chai/utils/type.js

  require.alias("./chai.js", "chai");

  return require('chai');
});