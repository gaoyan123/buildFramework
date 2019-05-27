import request from '@/util/request'

class index extends request{
    // login方法是拓展在index()中的原型上的
    register (data) {
        return this.post('/api/user/register',{}, data);
    }
    // login方法是拓展在index()中的原型上的
    login (data) {
        return this.post('/api/user/login',{}, data);
    }
}
// 暴露出一个对象
export default new index();