import request from '@/utils/request'

//  getMuisc() {
//     return request.get('/personalized?limit=10', {})
// }
const api = {
    getMuisc() {
        return request.get('/personalized?limit=10', {})
    },
    getBanner() {
        return request.get('/banner?type=2', {})
    }
}
export default api;