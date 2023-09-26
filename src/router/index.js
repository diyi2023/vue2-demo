import Vue from 'vue'
import Router from 'vue-router'

// 导入页面
import Home from '@/views/home.vue'
import Slot from '@/views/slot.vue'
import Directive from '@/views/directive.vue'

// hack router push callback
//这种方法解决了重复导航的问题，在当前路径 跳到 当前路径
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

// 创建路由实例
export default new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/slot',
        name: 'slot',
        component: Slot
      },
      {
        path: '/directive',
        name: 'directive',
        component: Directive
      }
    ]
  })