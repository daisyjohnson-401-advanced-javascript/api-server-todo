'use strict';

const BaseModel = require('./model.js');
const schema = require('./todo.schema');


class Todos extends BaseModel { }

module.exports = new Todos(schema);