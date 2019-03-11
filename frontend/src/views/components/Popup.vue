<template>
  <div class="popup" v-if="visible" @click.self="this.$emit('update:visible', false)">
    <div class="popup-dialog">
        <!-- <header class="popup-header">
            <span>{{title}}</span>
            <button @click="$emit('update:visible', !visible)">Close</button>
        </header> -->
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
        },
        title: {
            type: String,
            require: false,
        },
    },
    methods: {

    },
}
</script>

<style scoped>
.popup {
    background-color: rgba(0,0,0,0.7);
    overflow: auto;
    margin: 0;
}
.popup-dialog {
    width: auto;
    background: #fff;
}
.popup-header {
    font-size: 28px;
    font-weight: bold;
    line-height: 1.29;
    padding: 16px 16px 0 25px;
    position: relative;
}
.popup-body {
    padding: 25px;
    min-height: 150px;
    max-height: 412px;
    overflow-y: scroll;
}
</style>
