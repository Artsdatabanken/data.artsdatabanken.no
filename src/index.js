import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';
//import './index.css';
//import App from './App';
//import { promises as fs } from "fs";
import  fs  from "fs";
import babel from '@babel/core'



// Transpile JSX using Babel
const transpileJSX = async (code) => {
  const x =  await babel.transformAsync(code, {
    presets: ['@babel/preset-react', '@babel/preset-env'],
  });
  return x.code;
};

const make = async () => {
  const d =await  transpileJSX("<h1>test</h1>")
  fs.writeFileSync('d.js', d)
  const xhtml = ReactDOMServer.renderToString(d);
  fs.writeFileSync('xx.html', xhtml)
  throw new Error(d)
  //const root = ReactDOM.createRoot(document.getElementById('root'));
  //const html = ReactDOMServer.renderToString(<App />);
  console.log(html)
  console.log("xx")
}

make().then(x=>{throw new Error(x)})

/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/