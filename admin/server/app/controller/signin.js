const Controller = require('Egg').Controller;

class SigninController extends Controller {
	async index() {
		const ctx = this.ctx;
		try {
			ctx.validate({
				nickName: { type: 'string' },
				password: { type: 'string' },
			});
			ctx.body = await ctx.service.signin.find(ctx.request.body);
		} catch(e) {
			ctx.logger.warn(e.errors);
			ctx.body = { success: false, message: '参数有误' };
		};
	}
}

module.exports = SigninController;
