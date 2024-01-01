const GeneralRouterMixin = require('./router/general')
const FeedbackRouterMixin = require('./router/feedback')

module.exports = (app) => {
  GeneralRouterMixin(app)
  FeedbackRouterMixin(app)
}