/*
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs'
*/
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const fs = require('fs')
const MyComponent = require('./App').default;
const babel = require('@babel/core');
//require('@babel/polyfill')

// Transpile JSX using Babel
const jsxCode = `
  const element = ${ReactDOMServer.renderToStaticMarkup(
  React.createElement(MyComponent, {})
    )};
  document.getElementById('root').appendChild(element);
`;

const transpiledCode = babel.transformSync(jsxCode, {
  presets: ['@babel/preset-env', '@babel/preset-react'],
}).code;

console.log(transpiledCode)
//const html = ReactDOMServer.renderToString(<h1>test</h1>);
//const html = ReactDOMServer.renderToString(MyComponent);
//console.log(html)
console.log("xx")
//fs.writeFileSync('xx', html)
fs.writeFileSync('xx2', transpiledCode)

