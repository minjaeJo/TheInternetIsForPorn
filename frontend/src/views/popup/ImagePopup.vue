<template>
    <div class="popup">
        <div class="popup-header">
            <div class="btn red"></div>
            <div class="btn yellow"></div>
            <div class="btn green"></div>
        </div>
        <div class="popup-body" :style="{background: background}">
            <img :src="img">
            <div :style="{color: color}">{{text}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['img','text'],
    data() {
        return {
            color_arr: [
                { background: '#C23B2A', color:'#EAA932' },
                { background: '#A69F82', color:'#334C54' },
                { background: '#3788BC', color:'#F5C62E' },
                { background: '#FEF6E8', color:'#E57F7C' },
                { background: '#32435F', color:'#EB9772' }
            ],
            background: '#C23B2A',
            color: '#EAA932'
        }
    },
    mounted() {
        this.randomColor()
    },
    methods: {
        startEvent() {
            this.$emit('startEvent')
        },
        randomColor() {
            var random = Math.floor(Math.random() * 5)
            this.background = this.color_arr[random].background
            this.color = this.color_arr[random].color
        }
    },
}
</script>

<style scoped>
.popup {
    position: fixed;
    top: 40%;
    left: 38vw;
    width: 400px;
    height: 500px;
    background-color: rgba(0,0,0,0.7);
    border-radius: 5px;
    overflow: auto;
    margin: 0;
    border: 1px solid #000;
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
    background: #02b7ee;
    text-align: center;
    font-size: 23px;
    font-weight: 700;
    padding-top: 5vh;
}
.popup img {
    max-width: 300px;
    max-height: 500px;

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
