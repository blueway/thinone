import { think } from 'thinkjs';

export default class extends think.Model {
get relation() {
    return {
      auth: {
        field: 'id,pid,name,url,ishow',
        type: think.Model.MANY_TO_MANY,
        rModel: 'role_auth',
        rfKey: 'auth_id'
      }
    }
  }

}
