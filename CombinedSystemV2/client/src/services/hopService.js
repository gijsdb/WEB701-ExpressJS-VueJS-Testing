import Api from './api'

export default {
  addhop (details) {
    return Api().post('addhop', details)
  }
}
