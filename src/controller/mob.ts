import Base from './base.js';
export default class extends Base {
   indexAction() {
      this.assign({
         title: '宋仲基为太太宋慧乔庆祝36岁生日', 
         content: '宋慧乔与宋仲基度完新婚蜜月之后，日前回到了韩国，宋仲基婚后第一个工作，是到香港参加MAMA颁奖礼，担任主持人，换言之，11月的下半旬，双宋夫妇将继续休息，过他们的甜蜜新婚生活。',
         footer: '评论', 
      }); 
      return this.display('mob/index');
   }
}
