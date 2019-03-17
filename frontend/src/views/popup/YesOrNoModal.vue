<template>
    <div class="popup">
        <div class="popup-dialog">
            <div class="popup-header">
                Did you get <br>
                what you want
            </div>
            <div class="popup-body">
                <div class="btn no" @click="startEvent">No</div>
                <div class="btn yes" @click="startEvent">Yes</div>
            </div>
        </div>
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

<style scoped lang="scss">
$popup: 'popup';
.#{$popup} {
    overflow: hidden;

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
    &-dialog {
        width: auto;
        background: #dba3d9;
    }
    &-header {
        font-size: 55px;
        font-weight: bold;
        line-height: 1.29;
        padding: 16px 16px 0 25px;
        position: relative;
        text-align: center;
        color: #c6090b;
        height: 60%;
        text-border: 1px #000;
        text-shadow: 2px 2px 2px black;
    }
    &-body {
        height: 40%;
        padding: 25px;
        min-height: 150px;
        max-height: 412px;
        text-align: center;
    }
}
.btn {
    display: inline-block;
    width: 150px;
    height: 40px;
    border-radius: 7px;
    box-shadow: 5px 5px #888888;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    padding-top: 8px;
    cursor: pointer;
}
.yes {
    background: #37ff11;
    margin-left: 35px;
}
.yes:hover {
    background: #2bc20d;
}
.no {
    background: #fa0100;
}
.no:hover {
    background: #d30000;
}
</style>
