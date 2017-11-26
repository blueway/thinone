import Base from './base.js';
export default class extends Base {
   async indexAction() {
      return this.display()
   }
   async  listAction() {
      const amenus= this.model('auth')
      let datas = await amenus.select()
      return this.json(datas)
   }
   async   delAction() {
      const mod= this.model('auth')
      const role_auths = this.model('role_auth')
      return this.delrows(mod,role_auths,'auth_id')
   }
   async  updateAction() {
      const mod = this.model('auth')
      let datas = JSON.parse(this.post('json').toString())
      let handler = async (flag:boolean,one:object) => {
         if(flag){ //add 
            let ret = await mod.add(one) 
         }else{ //update
            let ret = await mod.where({id:one['id']}).update(one)
         }
      }

      for (let one of datas) {
         const addFlag = one['addFlag']
         handler(addFlag,one)
      }
      return this.json({statusCode:200,message:"成功"})
   }

}
