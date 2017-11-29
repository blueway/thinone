import Base from './base.js';
import ccap = require('ccap')
function buildTree(inp:any[],cate:string):any[]{
   let map = {},roots = []
   let t = []
   if(inp.length == 0) return inp
   let pid = 0
   for(let i in inp){
      let x= inp[i]
      if(x.url.endsWith('?cate='+cate)) {
         pid = x.id
         x.children = []
      }
      map[x.id] = i
      x['target'] = 'navtab'
      x['id'] = 't'+x.id
      t.push(x) 
   }
   if(pid == 0)return []

   for(let node of t){
      if(node.pid == pid) {
         let s = t[map[node.pid]]
         s.children.push(node)
      }else if(node.id == 't'+pid){
         roots.push(node)
      }
   }
   return roots
}
export default class extends Base {
   async indexAction() {
      const username = await this.session('userInfo');
      this.assign({username: username})
      return this.display()
   }
   async  sysmenuAction() {
      const cate = this.get('cate')
      const username = await this.session('userInfo');
      const users = this.model('user')
      let roledatas = await users.where({username:username}).find()
      let menus = roledatas.role[0].auth.filter( (x:any) => x.pid > 0 && x.ishow == 1)
      menus = buildTree(menus,cate)
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
