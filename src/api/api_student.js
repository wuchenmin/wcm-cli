import * as API from './index.js'


export default {
    getList: params => {
        return API.POST('/api/kaifaquvisualization/untouch/list', params)
    },
}