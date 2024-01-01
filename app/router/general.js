module.exports = function GeneralRouterMixin (app) {
  const { router, controller } = app;
  router.get('/', controller.home.index)
}