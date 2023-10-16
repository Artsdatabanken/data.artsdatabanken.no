import React, { createElement } from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'node:fs'
import path from 'node:path'
import Type from './templates/type'
import { Helmet } from "react-helmet";
import {findFiles} from '@artsdatabanken/lastejobb/lib/io.js'
import {log} from '@artsdatabanken/lastejobb'

const JSON_PROPS_SRC_DIR = 'temp/page_data'
const BUILD_DIR = 'build'
const SRC_DIR = 'src'
const STATIC_CONTENT_DIR = path.join(SRC_DIR, 'static_content')

if(!fs.existsSync(BUILD_DIR))
    fs.mkdirSync(BUILD_DIR)

const htmlPageTemplate = fs.readFileSync('src/page_template.html').toString()

const copyLastModifiedTime = (fromFilePath, toFilePath) => {
    var stat = fs.statSync(fromFilePath);
    fs.utimesSync(toFilePath, stat.atime, stat.mtime);
}

function copyStaticContent(fromPath, toPath) {
    const files = findFiles(fromPath)
    files.forEach(fromFilePath => {
        const toFilePath = fromFilePath.replace(fromPath, toPath)
        fs.copyFileSync(fromFilePath, toFilePath)
        copyLastModifiedTime(fromFilePath, toFilePath)
    });
}

function writeStaticFileToBuild(destFilePath, content) {
    const directory = path.dirname(destFilePath)
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, {recursive:true});
    }
    fs.writeFileSync(destFilePath, content)
}

const renderStaticPage = (component, props, targetFile) => {
    const staticHtml = ReactDOMServer.renderToStaticMarkup(
        createElement(component, props))
    const helmet = Helmet.renderStatic();
    const fullPath = path.join(BUILD_DIR, targetFile)
    let page = htmlPageTemplate
    const variables = {
        body: staticHtml,
        base: helmet.base.toString(),
        body_attributes: helmet.bodyAttributes.toString(),
        htmlattr: helmet.htmlAttributes.toString(),
        link: helmet.link.toString(),
        meta: helmet.meta.toString(),
        noscript: helmet.noscript.toString(),
        script: helmet.script.toString(),
        style: helmet.style.toString(),
        title: helmet.title.toString(),
    }
    const replacedContent = page.replace(/\{\{(\w+)\}\}/g, (_, variable) => variables[variable]);
    writeStaticFileToBuild(fullPath, replacedContent)
}

copyStaticContent(STATIC_CONTENT_DIR, BUILD_DIR)

const r = findFiles(JSON_PROPS_SRC_DIR,'.json')
r.forEach(srcFile => {
    let relativePath = srcFile.replace(/\\/g, '/') // Windows hack needed for stripping base path
    relativePath = relativePath.replace(JSON_PROPS_SRC_DIR, '')
    if(relativePath.indexOf('Natur_i_Norge.json')<0) return
    relativePath = relativePath.replace(path.extname(srcFile),'')
    const props = JSON.parse(fs.readFileSync(srcFile))
    renderStaticPage(Type, props, relativePath+'/index.html')
}) 
log.info(`Skrev ${r.length} statiske websider.`)