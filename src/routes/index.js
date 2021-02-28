import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import Index from '../components/pages/index';


const sheet = new ServerStyleSheet();

const router = express.Router();

router.get('/', async (req,res) => {
    const body = renderToString(sheet.collectStyles(<Index/>));
    const styleTags = sheet.getStyleTags();
    res.status(200).render('pages/index', {reactApp: body, styling: styleTags});
})

export default router;