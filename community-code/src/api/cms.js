import axios from 'axios'
export default {
  getSiteInfo(site) {
    return axios.get('/api/newmodelIndexSourceForNB', {
      params: {
        siteName: site
      }
    })
  }
}
