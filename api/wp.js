import axios from 'axios'

class WpApi {
  constructor (site) {
    this.api = `${site}/wp-json`
    this.namespaces = { menus: 'wp-api-menus/v2', wp: 'wp/v2' }
  }

  posts (type, params) {
    return axios.get(`${this.api}/${this.namespaces.wp}/${type}`, {
      params: params
    })
      .then(json => {
        let obj = {}
        obj[type] = json.data
        return obj
      })
      .catch(e => {
        return { error: e }
      })
  }

  menus (type) {
    return axios.get(`${this.api}/${this.namespaces.menus}/${type}`)
      .then(json => {
        return json.data
      })
      .catch(e => {
        return { error: e }
      })
  }

  page (slug, params) {
    return axios.get(`${this.api}/${this.namespaces.wp}/pages?slug=${slug}`, {
      params: params
    })
      .then(json => {
        return json.data
      })
      .catch(e => {
        return { error: e }
      })
  }
}

const wp = new WpApi('https://api.hooke.design')

export default wp
