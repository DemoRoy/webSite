'use strict';

const Controller = require('egg').Controller;

class SignController extends Controller {
	async in() {
		const ctx = this.ctx;
		const signInRule = {
			userName: { type: "string" },
			password: { type: "string" },
		};
    try {
      ctx.validate(signInRule);
      ctx.body = { success: true };
    } catch (err) {
      ctx.logger.warn(err.errors);
      ctx.body = { success: false };
      return;
    }
	}
}

module.exports = SignController;