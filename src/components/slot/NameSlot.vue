<template>
    <div>
        <div>
            <slot name="header">
                这是具名header插槽
            </slot>
        </div>
        <div>
            <slot name="footer">
                这是具名footer插槽
            </slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped></style>