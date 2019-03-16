<template>
    <div>
        <div class="frame">
            <div class="move1">
                <img src="/static/images/tenor1.gif">
            </div>
        </div>
         <div class="frame">
            <div class="move2">
                <img src="/static/images/tenor2.gif">
            </div>
        </div>
         <div class="frame">
            <div class="move3">
                <img src="/static/images/tenor3.gif">
            </div>
        </div>
         <div class="frame">
            <div class="move4">
                <img src="/static/images/tenor4.gif">
            </div>
        </div>
         <div class="frame">
            <div class="move5">
                <img src="/static/images/tenor5.gif">
            </div>
        </div>
         <div class="frame">
            <div class="move6">
                <img src="/static/images/tenor6.gif">
            </div>
        </div>
         <div class="frame">
            <div class="move7">
                <img src="/static/images/tenor7.gif">
            </div>
        </div>
         <div class="frame">
            <div class="move8">
                <img src="/static/images/tenor8.gif">
            </div>
        </div>
         <div class="frame">
            <div class="move9">
                <img src="/static/images/tenor9.gif">
            </div>
        </div>
        <div class="center-box">Like it? Like it!</div>
        <YesOrNOModal :visible="yes_or_no">
            <div>씻빨</div>
        </YesOrNOModal>
    </div>
</template>

<script>
import YesOrNOModal from './popup/YesOrNoModal'
export default {
    components: {
        YesOrNOModal
    },
    mounted() {

    },
    data() {
        return {
            yes_or_no: true
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.center-box {
    color: yellow;
    z-index: 10000;
    position: absolute;
    top: 48%;
    left: 38%;
    font-size: 50px;
}
.frame{
    position:absolute;
    width:100%;
    height:100%;
}
.frame:nth-child(1){
    background: #000;
}
.move1 {
    background: transparent;
    width:100%;
    height:100%;    
    animation: move3 9s infinite linear both;
}
.move1 img{
    position: fixed;
    left: 0%;
    top: 0%;
    width: 25%;
    height: 25%;

}
.move2 {
    background: transparent;   
    width:100%;
    height:100%;    
    animation: move3 9s infinite linear both;
    animation-delay: -1s;

}
.move2 img{
    position: fixed;
    left: 0%;
    top: 0%;
    width: 25%;
    height: 25%;

}
.move3 {
    background: transparent;
    width:100%;
    height:100%;    
    animation: move3 9s infinite linear both;
    animation-delay: -2s;
}
.move3 img{
    position: fixed;
    left: 0%;
    top: 0%;
    width: 25%;
    height: 25%;

}
.move4 {
    background: transparent;
    width:100%;
    height:100%;    
    animation: move3 9s infinite linear both;
    animation-delay: -3s;
}
.move4 img{
    position: fixed;
    left: 0%;
    top: 0%;
    width: 25%;
    height: 25%;

}
.move5 {
    background: transparent;
    width:100%;
    height:100%;    
    animation: move3 9s infinite linear both;
    animation-delay: -4s;
}
.move5 img{
    position: fixed;
    left: 0%;
    top: 0%;
    width: 25%;
    height: 25%;

}
.move6 {
    background: transparent;
    width:100%;
    height:100%;    
    animation: move3 9s infinite linear both;
    animation-delay: -5s;
}
.move6 img{
    position: fixed;
    left: 0%;
    top: 0%;
    width: 25%;
    height: 25%;

}
.move7 {
    background: transparent;
    width:100%;
    height:100%;    
    animation: move3 9s infinite linear both;
    animation-delay: -6s;
}
.move7 img{
    position: fixed;
    left: 0%;
    top: 0%;
    width: 25%;
    height: 25%;

}
.move8 {
    background: transparent;
    width:100%;
    height:100%;    
    animation: move3 9s infinite linear both;
    animation-delay: -7s;
}
.move8 img{
    position: fixed;
    left: 0%;
    top: 0%;
    width: 25%;
    height: 25%;

}
.move9 {
    background: transparent;
    width:100%;
    height:100%;    
    animation: move3 9s infinite linear both;
    animation-delay: -8s;
}
.move9 img{
    position: fixed;
    left: 0%;
    top: 0%;
    width: 25%;
    height: 25%;

}


@keyframes move3 {
    from, to {
        transform: translate3d(0%, 0%, 0);
    }

    10% {
        transform: translate3d(25%, 0% , 0);
    }

    20% {
        transform: translate3d(50%, 0%, 0);
    }

    30% {
        transform: translate3d(75%, 0%, 0);
    }
    40% {
        transform: translate3d(75%, 40%, 0);
    }
    50%{
        transform: translate3d(75%, 75%, 0);
    }
    60% {
        transform: translate3d(50%, 75%, 0);
    }
    70% {
        transform: translate3d(25%, 75%, 0);
    }
    80% {
        transform: translate3d(0%, 75%, 0);
    }
    90% {
        transform: translate3d(0%, 40%, 0);
    }


}
</style>