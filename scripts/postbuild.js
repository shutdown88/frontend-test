#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Creating index.php...');

const indexHtmlPath = path.resolve(__dirname, '../build/index.html');
const indexPhpPath = path.resolve(__dirname, '../build/index.php');

const data = fs.readFileSync(indexHtmlPath, 'utf8');

fs.writeFileSync(
  indexPhpPath,
  data.replace(
    '$$__SERVER_DATA__$$',
    `
<?php $json_string = file_get_contents('http://18.195.225.57/articles.php');
    echo json_encode(json_decode($json_string), JSON_HEX_TAG);
?>
`
  )
);

fs.unlinkSync(indexHtmlPath);
console.log('Created index.php successfully');
