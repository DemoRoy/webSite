'use strict';

module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
  router.resources('users', '/users', controller.user);
  router.resources('posts', '/posts', controller.post);
};
