<template>
    <div>
        <h1>组件标题</h1>
        <slot name="header">
            <p>我是具名插槽header</p>
        </slot>
   
        <!-- <slot>这是默认插槽</slot>  -->
        <hr>
        <slot name="footer">
            <p>我是具名插槽footer</p>
        </slot>
       <hr>
       
          <h2>作用域插槽</h2>
          <slot  :message="message" :handleClick="handleClick"></slot>
      
    
    </div>
</template>

<script>
    export default {
        name: "MySlot",
        data() {
            return {
                message:'来自子组件的数据'
            }
        },
        methods: {
            handleClick() {
                console.log('调用了子组件的handleClick方法')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>