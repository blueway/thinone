import Base from './base.js';
export default class extends Base {
   async indexAction() {
        return this.display('mob/index')
   }

   async listAction() {
      const page = this.post('page')
      const mobs = this.model('mob')
      const data = await mobs.select()

      let datas = [{
         title: '没料在这舞台上这样穿，真是有勇气', 
         icon:'https://p1.pstatp.com/list/190x124/47110004df4d007a3154',
         content: '没料在这舞台上这样穿，真是有勇气',
         footer: '评论', 
      },
      {
         title: '微信12月1号收费，你会改用支付宝吗？', 
         icon:'https://p3.pstatp.com/list/190x124/474f000841c6ef7ec10e',
         content: '微信12月1号收费，你会改用支付宝吗？',
         footer: '评论', 
      }
      ]
      return this.json(page == 1 ? []:datas)
   }
}
