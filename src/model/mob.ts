import { think } from 'thinkjs';

export default class extends think.Model {

  getList() {
    return this.field('name').select();
  }

}
