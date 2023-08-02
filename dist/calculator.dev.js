"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var calculator =
/*#__PURE__*/
function () {
  function calculator() {
    _classCallCheck(this, calculator);
  }

  _createClass(calculator, [{
    key: "add",
    value: function add(num1, num2) {
      return num1 + num2;
    }
  }, {
    key: "subtract",
    value: function subtract(num1, num2) {
      return num1 - num2;
    }
  }, {
    key: "multiply",
    value: function multiply(num1, num2) {
      return num1 * num2;
    }
  }, {
    key: "divide",
    value: function divide(num1, num2) {
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }

      return num1 / num2;
    }
  }, {
    key: "remainder",
    value: function remainder(num1, num2) {
      return num1 % num2;
    }
  }]);

  return calculator;
}();

var calculator1 = new calculator();
console.log("Addition is = " + calculator1.add(1, 2));
console.log("Subtraction is = " + calculator1.subtract(54, 19));
console.log("Multiplication is = " + calculator1.multiply(18, 987));
console.log("Division is = " + calculator1.divide(1, 2));
console.log("Remainder is = " + calculator1.remainder(1, 2));