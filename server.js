// Minimal static server for Cloud Platform hosting (npm run serve).
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const prototypeDir = path.join(__dirname, 'prototype');

app.use(express.static(prototypeDir));

// Hash-router SPA: any unmatched path should still load index.html.
app.get('*', (req, res) => {
  res.sendFile(path.join(prototypeDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Prototype listening on port ${port}`);
});
