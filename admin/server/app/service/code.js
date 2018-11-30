'use strict';

const Service = require('egg').Service;

class CodeService extends Service {
	async create(code) {
		return this.ctx.model.Code.create(code);
	}
	
	async destroy(id) {
		return this.ctx.model.Code.findById(id);
	}
}

module.exports = CodeService;
