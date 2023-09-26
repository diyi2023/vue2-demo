export default {
    install (Vue, options) {
      // 注册全局方法
      Vue.prototype.myGlobalMethod = function () {
        // 全局方法的逻辑
        console.log('myGlobalMethod')
      }
  
      // 注册全局指令
      Vue.directive('my-directives', {
        // 指令的逻辑
        bind(el, binding, vnode) {
            // 在绑定时执行一次性的初始化设置
            el.style.backgroundColor = 'green';
          },
          inserted(el, binding, vnode) {
            // 元素插入到父元素时调用
          },
          update(el, binding, vnode, oldVnode) {
            // 组件更新时调用
          },
          componentUpdated(el, binding, vnode, oldVnode) {
            // 组件及其所有子组件完成更新时调用
          },
          unbind(el, binding, vnode) {
            // 解绑时执行清理操作
            el.style.backgroundColor = '';
          },
      })
  
      // 注册全局混入
      Vue.mixin({
        // 混入的逻辑
        data() {
            return {
                mixinMessage: 'Hello from mixin Message'
            }
          },
          methods: {
            mixinSayHello() {
              console.log(this.mixinMessage);
            }
          }
      })
  
      // 注册全局组件
      Vue.component('my-component', {
        // 组件的选项
      })
    }
  }