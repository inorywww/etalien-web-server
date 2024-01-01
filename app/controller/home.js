'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.renderView('home.html')
  }
}

module.exports = HomeController;