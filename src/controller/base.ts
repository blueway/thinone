import { think } from 'thinkjs';
export default class extends think.Controller {
   async  __before() {
      const userInfo = await this.session('userInfo');
      const whitelist = ['/index/login','/index/captcha','/user/doLogin']
      let pathurl = this.ctx.path
      if(think.isEmpty(userInfo) && !whitelist.includes(pathurl) && !pathurl.startsWith('/static/')){
         return this.redirect('/index/login');
      }
   }
}
