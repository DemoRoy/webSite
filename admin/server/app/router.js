'use strict';

module.exports = app => {
	const { router, controller } = app;
	router.post('signin', '/signin', controller.signin.index);
  // router.resources('users', '/users', controller.user);
};
