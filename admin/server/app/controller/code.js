'use strict';

const Controller = require('egg').Controller;

class CodeController extends Controller {
  async create() {
    const ctx = this.ctx;
    const { code } = ctx.request.body;
    const result = await ctx.service.code.create({ code: ctx.helper.toMD5(code) });
    ctx.status = 201;
    ctx.body = result;
  }
  
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const code = await ctx.service.code.destroy(id);
    if(!code) {
      ctx.status = 404;
      return;
    }

    await code.destroy();
    ctx.status = 200;
  }
}

module.exports = CodeController;
