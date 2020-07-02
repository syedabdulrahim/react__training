import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

c
export default App;


// /////////////////
// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.default = void 0;

// var _react = _interopRequireWildcard(require("react"));

// var _Person = _interopRequireDefault(require("./Person/Person"));

// require("./App.css");

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

// function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// class App extends _react.Component {
//   constructor(...args) {
//     super(...args);

//     _defineProperty(this, "state", {
//       persons: [{
//         name: "Abdul",
//         age: 20
//       }, {
//         name: "Rahim",
//         age: 21
//       }, {
//         name: "Syed",
//         age: 22
//       }],
//       age: 28
//     });

//     _defineProperty(this, "switchNameHandler", () => {
//       this.setState({
//         persons: [{
//           name: "Normal",
//           age: 20
//         }, {
//           name: "Rahim",
//           age: 21
//         }, {
//           name: "Syed",
//           age: 22
//         }]
//       });
//       console.log(this);
//     });
//   }

//   render() {
//     return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Hello World!!", console.log(this)), /*#__PURE__*/_react.default.createElement("button", {
//       onClick: this.switchNameHandler
//     }, "Change Person qwerty"), /*#__PURE__*/_react.default.createElement(_Person.default, {
//       name: this.state.persons[0].name,
//       age: this.state.persons[0].age
//     }), /*#__PURE__*/_react.default.createElement(_Person.default, {
//       name: this.state.persons[1].name,
//       age: this.state.persons[1].age
//     }), /*#__PURE__*/_react.default.createElement(_Person.default, {
//       name: this.state.persons[2].name,
//       age: this.state.persons[2].age
//     })); // return React.createElement('div',{className:"App"},React.createElement('h1',null,'Hello World!!!'),React.createElement('h1',null,'Hel World!!!'))
//   }

// }

// var _default = App;
// exports.default = _default;