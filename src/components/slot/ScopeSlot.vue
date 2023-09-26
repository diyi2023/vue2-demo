<template>
    <div>
        <slot :games="games" :gClick="gClick"></slot>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                games:['游戏1','游戏2','游戏3']
        }
    },
    methods: { 
        gClick(item) {
            console.log(item)
        }
    }
    }
</script>

<style lang="less" scoped>

</style>