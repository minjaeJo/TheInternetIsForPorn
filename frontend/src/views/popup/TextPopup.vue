<template>
    <div class="popup">
        <div class="popup-header">
            <div class="btn red"></div>
            <div class="btn yellow"></div>
            <div class="btn green"></div>
        </div>
        <div class="popup-body">{{text}}</div>
    </div>
</template>

<script>
export default {
    props:['text'],
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
    width: 250px;
    height: 150px;
    background-color: rgba(0,0,0,0.7);
    border-radius: 5px;
    overflow: auto;
    margin: 0;
}
.popup-header {
    background: #d4d4d4;
    width: 100%;
    height: 28px;
    padding-top: 8px;
}
.popup-body {
    width: 100%;
    height: calc(100% - 28px);
    background: #fefec4;
    text-align: center;
    font-size: 23px;
    font-weight: 700;
    padding-top: 5vh;
}
.btn {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    position: relative;
}
.red {
    background: #ee695e;
    margin-left: 10px;
}
.red:hover::before {
    content: '✕';
    font-size: 12px;
    position: absolute;
    top: 4px;
    left: 5px;
}
.yellow {
    background: #f6bf50;
    margin-left: 5px;
}
.yellow:hover::before {
    content: '-';
    position: absolute;
    top: 2px;
    left: 7px;
}
.green {
    background: #61c655;
    margin-left: 5px;
}
.green:hover::before {
    content: '﹢';
    position: absolute;
    top: -1px;
    left: 2px;
}
</style>
