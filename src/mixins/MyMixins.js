// 创建一个可以混入到多个组件中的混入对象
export default {
    data() {
      return {
        message: 'Hello from mixin'
      }
    },
    methods: {
      sayHello() {
        console.log(this.message);
      }
    }
  };
