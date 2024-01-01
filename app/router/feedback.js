module.exports = function FeedbackRouterMixin (app) {
  const { router, controller } = app;
  router.get('/feedback/helper', controller.feedback.feedbackHome)
}