import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { ServerLocation } from "@reach/router"

import App from '../src/App'

const PORT = 8000
const app = express()

const router = express.Router()

app.use('/build', express.static('build'))
app.use((req, res, next) => {
    if (/\.js|\.css|\.png|\.svg|\.jpg|\.gif/.test(req.path)) {
        res.redirect('/build' + req.path)
    } else {
        next()
    }
})

app.get('*', (req, res) => {
    const markup = ReactDOMServer.renderToString(
        <ServerLocation url={req.url}>
            <App />
        </ServerLocation>
    );
    const indexFile = path.resolve('./build/index.html')
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.log("error !");
            return res.status(500).send('opps', 'error!')
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${markup}</div>`))
    })
})

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '10d' }))

app.use(router)

app.listen(PORT, () => {
    console.log('SSR port is: ' + PORT);
})