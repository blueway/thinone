import Base from './base.js';
import { think } from 'thinkjs';
import jwt = require('jsonwebtoken')
const secret = '3fe24fe99b07796deb9f0276ef3f25df'
interface messresult{
   code:number,
   msg:string,
   data:string
}
export default class extends Base {

   async  __before() {
      let token = this.get('token')
      let ret = {}
      let decoded = jwt.verify(token, secret,(err,result) => {
         if (err) {
           ret = {
               code: 300,
               msg: err.message,
               expiredAt: result ? result.exp :0  
            }
         }
      })
      if(!think.isEmpty(ret) && this.ctx.path != '/api/token')return this.json(ret)
   }

   async indexAction() {
      return this.json({code:200,msg:'ok',data:[]})
   }
   async tokenAction() {
      const data = this.post('secret')
      let token = jwt.sign({
         data: data 
      }, secret,{ expiresIn: '1h' })
      return this.json({code:200,msg:'ok',data:token})
   }
}
