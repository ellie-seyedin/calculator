"use strict";

var number1 = "";
var number2 = "";
var isNumber1Ready = false;
var equalSign = document.getElementById("equal");

function formNumber(n) {
  if (!isNumber1Ready) {
    number1 += n;
    document.getElementById("displayNumber").textContent = number1;
  } else {
    number2 += n;
    document.getElementById("displayNumber").textContent = number2;
  }
}

function calculate(p1, p2, operation) {
  p2 = Number(p2);
  result = operation(p1, p2);
  document.getElementById("displayNumber").textContent = result;
}

function sum(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function formOperatorSum() {
  number1 = Number(number1);
  isNumber1Ready = true;
  equalSign.setAttribute("onclick", "calculate(number1,number2,sum)");
}

function formOperatorSubtract() {
  number1 = Number(number1);
  isNumber1Ready = true;
  equalSign.setAttribute("onclick", "calculate(number1,number2,subtract)");
}

function formOperatorMultiply() {
  number1 = Number(number1);
  isNumber1Ready = true;
  equalSign.setAttribute("onclick", "calculate(number1,number2,multiply)");
}

function formOperatorDivide() {
  number1 = Number(number1);
  isNumber1Ready = true;
  equalSign.setAttribute("onclick", "calculate(number1,number2,divide)");
}

function clearDisplay() {
  number1 = "";
  number2 = "";
  document.getElementById("displayNumber").textContent = "0";
}