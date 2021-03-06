import { think } from 'thinkjs';

export default class extends think.Model {
get relation() {
    return {
      role: {
        field: 'id',
        type: think.Model.MANY_TO_MANY,
        rModel: 'user_role',
        rfKey: 'role_id'
      }
    }
  }

}
