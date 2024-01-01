'use strict';

const { Controller } = require('egg');

class FeedbackController extends Controller {
  async feedbackHome() {
    const { ctx } = this;
    ctx.body = await ctx.renderView('feedback/helper/index.html')
  }
}

module.exports = FeedbackController;