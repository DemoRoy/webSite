const Service = require('Egg').Service;

const MD5 = require('md5');

class SigninService extends Service {
	async find(params) {
		const whereObj = {
			nick_name: params.nickName,
			password: MD5(params.password),
		};
		const user = await this.ctx.model.User.findAll({
			where: whereObj
		});

		if(!user) {
			this.ctx.throw(404, 'user not found');
		} else if(user.length === 0) {
			return { currentAuthority: "admin", status: "error", type: "account" };
		};

		return { currentAuthority: "admin", status: "ok", type: "account" };
	}
}

module.exports = SigninService;
