<template>
    <div>  
        <h4>默认插槽</h4>
        <DefaultSlot/>
        <DefaultSlot>
            <div>如果父组件有内容,不显示默认插槽的内容</div>
        </DefaultSlot>
        <hr>
        <h4>具名插槽</h4>
        <NameSlot>
            <template v-slot:header>
                <h6>父组件header展示结构3个列表</h6>
                <ul>
                    <li>列表1</li>
                    <li>列表2</li>
                    <li>列表3</li>
                </ul>
            </template>
            <template v-slot:footer>
                <h6>父组件footer展示结构底部信息</h6>
                <p>底部信息</p>
            </template>
        </NameSlot>
        <hr>
        <h4>作用域插槽</h4>
        <ScopeSlot>
            <template  slot-scope="slotProps" >
                <h6>子组件可以传值给父组件</h6>
                <ul>
                    <li v-for="(g,i) in slotProps.games" :key="i" @click="slotProps.gClick(g)">
                        <span>{{ g }}</span>
                    </li>
                </ul>
            </template>
        </ScopeSlot>
    </div>
   
  
</template>

<script>
import DefaultSlot from '@/components/slot/DefaultSlot'
import NameSlot from '@/components/slot/NameSlot'
import ScopeSlot from '@/components/slot/ScopeSlot'
    export default {
        components: {  
            DefaultSlot,
            NameSlot,
            ScopeSlot
        },
    }
</script>

<style lang="less" scoped>
    
</style>