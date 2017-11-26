import Base from './base.js';
import ccap = require('ccap')
function buildTree(inp:any[]):any[]{
      let map = {},roots = []
      let t = []
      if(inp.length == 0) return inp
      for(let i in inp){
         let x= inp[i]
         map[x.id] = i
         x['target'] = 'navtab'
         x['id'] = 't'+x.id
         //x.children = []
         t.push(x) 
      }
      for(let node of t){
         if(node.pid > 1) {
            let s = t[map[node.pid]]
            if(!s.children)s.children = []
               s.children.push(node)
         }else{
            roots.push(node)
         }
      }
      return roots
}
export default class extends Base {
   async indexAction() {
      const username = await this.session('userInfo');
      this.assign({username: username})
      return this.display();
   }
  async  menuAction() {
      let data = [
         {"name":"综合应用", "children":[
            {"id":"base-demo-form", "name":"表单示例", "target":"navtab", "url":"static/html/form/form.html"}
         ]},
         {"name":"系统管理", "children":[
            {"id":"userindex", "name":"用户管理", "target":"navtab", "url":"user/index"},
            {"id":"roleindex", "name":"角色管理", "target":"navtab", "url":"role/index"},
            {"id":"authindex", "name":"权限菜单", "target":"navtab", "url":"auth/index"}
         ]
         }
      ]
      const mod= this.model('auth')
      let menus = await mod.where({pid:['>',0]}).select()
      menus = buildTree(menus)
      console.log(menus)
      this.ctx.json(menus)
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
