const fs = require('fs');
const bodyParser = require('body-parser')
const express = require('express');
const api = require('./api');
const app = express();
const cors = require('cors');

// 跨域
app.use(cors());
app.use(bodyParser.json());
//当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);
app.listen(3000);
