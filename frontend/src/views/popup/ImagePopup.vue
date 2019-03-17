<template>
    <div class="popup">
        <div class="popup-header"></div>
        <div>dfdfdf</div>
    </div>
</template>

<script>
export default {
    methods: {
        startEvent() {
            this.$emit('startEvent')
        }
    },
}
</script>

<style scoped>
.popup {
    position: fixed;
    top: 40%;
    left: 38vw;
    width: 440px;
    height: 270px;
    background-color: rgba(0,0,0,0.7);
    box-shadow: 4px 4px grey;
    border-radius: 12px;
    overflow: auto;
    margin: 0;
}
.popup-header {
    background: #d4d4d4;
    width: 100%;
    height: 50px;
}
</style>
