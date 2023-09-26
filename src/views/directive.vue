<template>
    <div>
        <h4>自定义指令</h4>
        <input type="text" v-fbind:value = "n">
        <button @click="addN">点我n+1</button>
    </div>
</template> 

<script>
    export default {
        data() {
            return {
                n:1
        }
    },
    methods: {
        addN: function() {
            this.n++
        }
     },
     directives: {
        fbind:{
            bind(element,binding){
                console.log(24,element,binding)
                element.value = binding.value
            },
            inserted(element,binding){
                element.focus()
                element.style.backgroundColor = 'green'
            },
            update(element,binding){
                element.value = binding.value
                element.style.backgroundColor = 'blue'
            }
        }
    }
    }
</script>

<style lang="less" scoped>

</style>