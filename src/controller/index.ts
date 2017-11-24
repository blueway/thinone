import Base from './base.js';
import ccap = require('ccap')
export default class extends Base {
   async indexAction() {
      const username = await this.session('userInfo');
      this.assign({username: username})
      return this.display();
   }
   menuAction() {
      let data = [
         {"name":"综合应用", "children":[
            {"id":"base-demo-form", "name":"表单示例", "target":"navtab", "url":"static/html/form/form.html"}
         ]},
         {"name":"系统管理", "children":[
            {"id":"userindex", "name":"用户管理", "target":"navtab", "url":"user/index"}
         ]
         }
      ]
      this.ctx.json(data);
   }


   loginAction(){
      return this.display();
   }

   async captchaAction(){
      let ary = ccap().get()
      let txt = ary[0]
      let buf = ary[1]
      await this.session('captchaText', txt)
      return this.ctx.res.end(buf)
   }
}
