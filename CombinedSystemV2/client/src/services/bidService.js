import Api from './api'

export default {
  addbid (details) {
    return Api().post('addbid', details)
  }
}
