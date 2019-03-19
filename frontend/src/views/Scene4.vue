<template>
    <div >
        <div :class="[beforeEndging ? 'blink' : 'blink-none']">
        </div>
        <video v-if="startVideo" autoplay muted playsinline class="video">
            <source src='/static/images/EndingVideo.mp4' type='video/mp4' />
        </video>
        <div class="frame" v-for="i in 9" :key="i">
            <div :class="'move'+i">
                <img :src="'/static/images/tenor'+i+'.gif'">
            </div>
        </div>
        <transition name="fade">
            <div v-if="show" class="center-box">
                <img src="/static/images/internetHub.png">
            </div>
        </transition>
        <div id="popup-container">
            <div :id="index+'text'" style="display:none" v-for="(text,index) in snippet" :key="index+500">
                <TextPopup :style="{top: Math.floor(Math.random()*100)+'%', left: Math.floor(Math.random() *100) +'%'}" :text="text"></TextPopup>
            </div>
        </div>
        <div :id="index+'img'" style="display:none" v-for="(text,index) in 10" :key="index+5000">
            <ImagePopup :img="'/static/images/logo.png'" :style="{top: imageTop[index] + '%', left: imageLeft[index] +'%'}" style="z-index:90000"></ImagePopup>
        </div>
    </div>
</template>
<script>
import TextPopup from './popup/TextPopup'
import ImagePopup from './popup/ImagePopup'
export default {
    components: {
        ImagePopup,
        TextPopup
    },
    data() {
        return {
            imageTop: [5,50,Math.floor(Math.random()*70),3,Math.floor(Math.random()*70),20,0,60,Math.floor(Math.random()*70)],
            imageLeft: [72,10,Math.floor(Math.random()*70),2,Math.floor(Math.random()*70),40,55,75,Math.floor(Math.random()*70)],
            show: false,
            snippet: '',
            showPopup: false,
            popup: '',
            beforeEndging: false,
            startVideo: false

        }
    },
    mounted() {
        this.snippet = this.$route.params.snippet
        setTimeout( () => {
            this.show = true;
        }, 100);
        setTimeout( () => {
            this.loopTextPopup(0)
        }, 7000);
        setTimeout( () => {
            this.loopImgPopup(0)
        }, 7000);
        setTimeout( () => {
            this.beforeEndging = true
        }, 20000);
        setTimeout( () => {
            this.beforeEndging = false
        }, 21000);
        setTimeout( () => {
            this.beforeEndging = true
        }, 21200);
        setTimeout( () => {
            this.beforeEndging = false
        }, 21300);
        setTimeout( () => {
            this.beforeEndging = true
        }, 21600);
        setTimeout( () => {
            this.beforeEndging = false
        }, 21700);
        setTimeout( () => {
            this.beforeEndging = true
        }, 21850);
        setTimeout( () => {
            this.startVideo = true
        }, 21950);
        setTimeout( () => {
           this.$router.push({ name: 'Scene1'})
        }, 38000);

    },
    methods: {
        randomTop: function () {
            return Math.floor(Math.random() * 10000)/100 + vw
        },
        randomleft: function () {
            return Math.floor(Math.random() * 10000)/100 + vw
        },
        loopTextPopup(i) {
            setTimeout(()=> {
                $('#'+i+'text').css("display","initial")
                console.log('#'+i)
                if ( this.snippet.length> ++i ) {
                    this.loopTextPopup(i);
                }
            }, 30)
        },
        loopImgPopup(i) {
            setTimeout(()=> {
                $('#'+i+'img').css("display","initial")
                if ( 10> ++i ) {
                    this.loopImgPopup(i);
                }
            }, 1000)
        }
    }
}
</script>

<style scoped>
.video {
    z-index:9000000;
    position: fixed;
    width: 100%;
    height: auto;;
}
.blink{
    width: 100%;
    background: #000;
    height: 100%;
    position: fixed;
    z-index:900000;
}
.blink-none{   
    width: 0%;
    height: 0%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.center-box {
    color: yellow;
    position: fixed;
    top: 40%;
    left: 25%;
    width: 50%;
    font-size: 50px;
}
.center-box img{
    position: relative;
    margin-left: 70px;
    margin-right: auto;

    vertical-align: center;
    width: 85%;
}
.frame{
    position: fixed;
    width:100%;
    height:100%;
}
.frame:nth-child(2){
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