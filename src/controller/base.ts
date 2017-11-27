import { think } from 'thinkjs';
export default class extends think.Controller {
   async  __before() {
      const userInfo = await this.session('userInfo');
      const whitelist = ['/index/login','/index/captcha','/user/doLogin']
      let pathurl = this.ctx.path
      if(think.isEmpty(userInfo) && !whitelist.includes(pathurl) && !pathurl.startsWith('/static/')){
         return this.redirect('/index/login');

      }else{

         const users= this.model('user')
         let roledatas = await users.where({username:userInfo}).find()
         let auths = roledatas.role[0].auth.filter( (x:any) =>pathurl.startsWith(x.url))
         if(think.isEmpty(auths))
            return this.json({statusCode:300,message:'没有权限操作'})
      }
   }
   async listable(model:any){
      let pms = this.post()
      let page = pms['pageSize']
      let limit = pms['pageCurrent']
      let orders = pms['orders']
      let searchs = Object.keys(pms).reduce((one:any,key:any) =>{
         if(!key.startsWith('page') && ! key.endsWith('.operator') && key != 'orders')      one[key] = ['like',pms[key]+'%']
         return one
      },{})
      return (await model.where(searchs).page(limit,page).order(orders).select())

   }

   async delrows(model:any,fkModel:any,fk:string,pk:string='id'){
      let ids = this.post(pk)
      let search = {}
      if(fkModel){
         search[fk] = ['IN',ids]
         let cret = await fkModel.where(search).delete()
      }
      search = {}
      search[pk] = ['IN',ids]
      let ret = await model.where(search).delete()
      if(ret > 0){
         return this.json({statusCode:200,message:"成功"})
      }else 
         return this.json({statusCode:300,message:"失败"})
   }
}
