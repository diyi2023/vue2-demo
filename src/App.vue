<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <MySlot>
      <template v-slot:header>
        父组件引入的具名插槽header
      </template>
      <p>这是默认插槽的内容</p>
      <template v-slot:footer>
        父组件引入的具名插槽footer
      </template>
    
      <template slot-scope="slotProps"> 
        <p>{{ slotProps.message }}</p>
        <button @click="slotProps.handleClick">点击</button>
      </template>
    </MySlot> -->
    <!-- <hr>
    <div>
      <button @click="mixinSayHello">调用mixins混入的方法</button>
    </div>
    <hr> -->
    <!-- <div> -->
    <!-- 添加自定义指令 -->
    <!-- <p>添加自定义指令</p>
      <input type="text"  v-my-directives>
    </div> -->
    <!-- <div> -->
    <!-- 混入的全局方法 -->
    <!-- <p>混入的全局方法</p>
      <button @click="myGlobalMethod">混入的全局方法</button>
    </div>
    <hr>
    <div> -->
    <!-- 打开弹出框 -->
    <!-- <button @click="openPopup">Open Popup</button>
    </div> -->
    <header>
      <nav>
        <ul>
          <li @click="goHome">首页</li>
          <li @click="goSlot">插槽</li>
          <li @click="goDirective">自定义指令</li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      版权内容
    </footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MySlot from '@/components/MySlot'
// import {MyMixins} from '@/mixins'
// console.log(27, MyMixins)
// console.log(42,this)

//单例模式下的弹出框
// import PopupManager from '@/utils/popupManager';
// import PopupComponent from '@/components/PopupComponent';

export default {
  name: 'App',
  // mixins: [MyMixins],
  // components: {
  //   MySlot,
  // },
  // methods:{
  //   openPopup() {
  //     PopupManager.openPopup(PopupComponent, { message: 'Hello, Popup!' });
  //   },
  // }
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goSlot() {
      this.$router.push('/slot')
    },
    goDirective() {
      this.$router.push('/directive')
    }
  }
}
</script>

<style lang="less">
@import 'normalize.css';

ul,
li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #f0f0f0;
  padding: 20px;

  ul {
    display: flex;
    flex-direction: row;

    li {
      flex: 1;
    }
  }

}



main {
  flex-grow: 1;
  overflow-y: auto;
  /* 当内容超过屏幕高度时，显示滚动条 */
  padding: 20px;
}

footer {
  background-color: #f0f0f0;
  padding: 20px;
}
h4{
        color:cornflowerblue
    }
    h6{
        color:cadetblue
    }
</style>
