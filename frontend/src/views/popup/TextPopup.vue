<template>
    <div class="popup">
        <div class="popup-header">
            <div class="btn red"></div>
            <div class="btn yellow"></div>
            <div class="btn green"></div>
        </div>
        <div class="popup-body" :style="{color: color, background: background}">{{text}}</div>
    </div>
</template>

<script>
export default {
    props:['text'],
    data() {
        return {
            color_arr: [
                { background: '#C23B2A', color:'#EAA932' },
                { background: '#A69F82', color:'#334C54' },
                { background: '#3788BC', color:'#F5C62E' },
                { background: '#FEF6E8', color:'#E57F7C' },
                { background: '#32435F', color:'#EB9772' },
                { background: '#EAA932', color:'#C23B2A' },
                { background: '#334C54', color:'#A69F82' },
                { background: '#F5C62E', color:'#3788BC' },
                { background: '#E57F7C', color:'#FEF6E8' },
                { background: '#EB9772', color:'#32435F' }
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
            var random = Math.floor(Math.random() * 10)
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
    width: 250px;
    height: 150px;
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
