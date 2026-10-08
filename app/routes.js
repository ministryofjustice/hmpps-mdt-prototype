//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const path = require('path')
const express = require('express')
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Serve the existing hand-built SPA (prototype/) unchanged under the kit's dev server.
// This keeps all current functionality working while the kit's tooling/config is adopted.
// TODO (phase 2): replace this passthrough with real kit routes/Nunjucks views, page by page.
const prototypeDir = path.join(__dirname, '..', 'prototype')
router.use(express.static(prototypeDir))
router.get('*', (req, res) => {
  res.sendFile(path.join(prototypeDir, 'index.html'))
})
