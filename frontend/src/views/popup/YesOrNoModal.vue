<template>
  <div class="popup" v-if="visible" @click.self="this.$emit('update:visible', false)">
    <div class="popup-dialog">

        <div class="popup-body">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            require: true,
            default: false
        }
    },
    methods: {

    },
}
</script>

<style scoped lang="scss">
$popup: 'popup';
.#{$popup} {
    background-color: rgba(0,0,0,0.7);
    overflow: auto;
    margin: 0;
    &-dialog {
        width: auto;
        background: #fff;
    }
    &-header {
        font-size: 28px;
        font-weight: bold;
        line-height: 1.29;
        padding: 16px 16px 0 25px;
        position: relative;
    }
    &-body {
        padding: 25px;
        min-height: 150px;
        max-height: 412px;
        overflow-y: scroll;
    }
}
</style>
