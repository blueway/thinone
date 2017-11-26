import Base from './base.js';
import crypto = require('crypto')
declare let think: any

function getMd5(inp:string):string{
   let md5 = crypto.createHash('md5')
   let result = md5.update(inp).digest('hex')
   return result.toUpperCase()
}
export default class extends Base {
   indexAction() {
      return this.display()
   }
   async   listAction() {
      const users = this.model('user')
      let ret = await this.listable(users) 
      ret = ret.map((x:any) => {
         x['role'] = x['role'][0].id
         return x
      })
      return this.json(ret)
   }
   async   delAction() {
      const users = this.model('user')
      const user_roles = this.model('user_role')
      return this.delrows(users,user_roles,'user_id')
   }

   async  updateAction() {
      const users = this.model('user')
      const user_roles = this.model('user_role')
      let datas = JSON.parse(this.post('json').toString())
      let handler = async (flag:boolean,one:object) => {
         if(flag){ //add 
            one['password']= getMd5('test123')
            let ret = await users.add(one) 
            ret = await user_roles.add({user_id:ret,role_id:one['role']}) 
         }else{ //update
            let ret = await users.where({id:one['id']}).update(one)
            ret = await user_roles.where({user_id:one['id']}).update({role_id:one['role']})
         }
      }

      for (let one of datas) {
         const addFlag = one['addFlag']
         handler(addFlag,one)
      }
      return this.json({statusCode:200,message:"成功"})
   }
   async   changepwdAction(){
      const users = this.model('user')
      const username = await this.session('userInfo');
      let data = await users.where({username:username}).find();
      this.assign({user:data})
      return this.display()
   }
   async doChPwdAction(){
      const users = this.model('user')
      let id= this.post('user.id')
      let password = this.post('password').toString()
      let data = await users.where({id:id}).update({password:getMd5(password)})
      if(!think.isEmpty(data)){
         return this.json({statusCode:200,message:"成功"})
      }
      return this.json({statusCode:300,message:"失败"})
   }
   async doLogoutAction(){
      this.session('userInfo',null)
      this.redirect('/index/login')
   }
   async doLoginAction(){
      const users = this.model('user')
      let username = this.post('username')
      let captcha = this.post('captcha').toString()
      let password = this.post('passwordhash').toString()

      let captchaText = await this.session('captchaText') || ''
      if (captchaText.toLowerCase() != captcha.toLowerCase()) {
         this .assign({msg:"验证码错误"})
         return this.display('index_login')
      }
      let data = await users.where({username:username,password:getMd5(password)}).find();

      if(think.isEmpty(data)){
         this .assign({msg:"用户名或密码错误"})
         this.display('index_login')
      }else{
         this.session('userInfo',data.username)
         this.redirect('/')
      }

   }
}
