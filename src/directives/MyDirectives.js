export default {
      bind(el, binding, vnode) {
        // 在绑定时执行一次性的初始化设置
        el.style.backgroundColor = 'yellow';
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
};