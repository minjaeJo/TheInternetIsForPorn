<template>
    <div class="popup">
        <div class="text">{{text}}</div>
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
    width: 250px;
    height: 150px;
    border-radius: 5px;
    overflow: auto;
    margin: 0;
    background-image: url(/static/images/prompt.png);
    background-size: 85%;
}
.text {
    position: absolute;
    top: 30px;
    left: 15px;
    color: #fff;
    font-size: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 170px;
}
</style>
