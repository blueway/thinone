import Base from './base.js';
export default class extends Base {
  indexAction() {
    return this.display();
  }
   menuAction() {
      let data = [
    {"name":"综合应用", "children":[
        {"id":"base-demo-form", "name":"表单示例", "target":"navtab", "url":"static/html/form/form.html"}
    ]}
]
      this.ctx.json(data);
  }
}
