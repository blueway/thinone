import Base from './base.js';
function buildTree(inp:any[],hasauths:any[]):any[]{
   let map = {},roots = []
   let t = []
   if(inp.length == 0) return inp
   for(let i in inp){
      let x = {}
      let y = inp[i]
      x['id']= y['id'] 
      x['pid']= y['pid'] 
      x['name']= y['name'] 
      if(hasauths.includes(y.id))x['checked']= true
      x['open']= true
      map[x['id']] = i
      t.push(x) 
   }
   for(let node of t){
      if(node.pid > 0) {
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
   indexAction() {
      return this.display()
   }
   async   listAction() {
      const mod = this.model('role')
      let ret = await this.listable(mod) 
      return this.json(ret)
   }
   async   delAction() {
      const mod= this.model('role')
      const role_auths = this.model('role_auth')
      return this.delrows(mod,role_auths,'role_id')
   }

   async  updateAction() {
      const mod = this.model('role')
      const role_auths = this.model('role_auth')
      let datas = JSON.parse(this.post('json').toString())
      let handler = async (flag:boolean,one:object) => {
         if(flag){ //add 
            let ret = await mod.add(one) 
            ret = await role_auths.add({role_id:ret,auth_id:one['auth']}) 
         }else{ //update
            let ret = await mod.where({id:one['id']}).update(one)
            ret = await  role_auths.where({role_id:one['id']}).update({auth_id:one['auth']})
         }
      }

      for (let one of datas) {
         const addFlag = one['addFlag']
         handler(addFlag,one)
      }
      return this.json({statusCode:200,message:"成功"})
   }
   async  authListAction() {
      const mod = this.model('auth')
      const auths = this.model('role_auth')
      const roleid = this.get('roleid')
      let  hasauths = await auths.where({role_id:roleid}).getField('auth_id')
      let datas = await mod.where({pid:['>=',0]}).select()
      this.assign({
         treeList:JSON.stringify(buildTree(datas,hasauths as any[]))
         ,roleid:roleid
      })
      return this.display()
   }
   async doAuthAction() {
      const ids = this.post('ids').toString()
      const roleid = this.post('roleid')
      const auths = this.model('role_auth')
      let ret:any
      if(ids){
         ret = await auths.where({role_id:roleid}).delete()
         let datas = ids.split(',').map((x:any) => {
            return {role_id:roleid,auth_id:x}
         })
         ret = await auths.addMany(datas)
      }
      return this.json({statusCode:ret?200:300,message:ret?"成功":"失败"})
   }
}
