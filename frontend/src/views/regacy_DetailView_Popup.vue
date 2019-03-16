<template>

    <div :class="[visible[8] ? 'exit' : 'window-container']" >
        <div class="arrow">
            <img src="/static/images/detailViewPopUp.png">
        </div>
        <div class="headImg">
            <img src="/static/images/detailViewHeadImg.png">
        </div>

        <div class="bodyBlock">
            <img class="left-img" src="/static/images/poofSideBar2.png">
            <img class="right-img" src="/static/images/poofSideBar2.png">
            <img class="center-img" :src="before_page_data.img">

            <div class="bodyText">
                {{this.before_page_data.id}}
                <div class="subText">
                    {{mix_text}}
                </div>
            </div>
        
        <popup :visible.sync="visible[0]" >
              <img :src="images[Math.floor(Math.random() * this.images.length)]" :style="{top: Math.floor(Math.random()* 50) + 30 +'%', left: Math.floor(Math.random() * 40) + 40 +'%', position: 'fixed'}" :class="animation[Math.floor(Math.random() * 4)]">
        </popup>
        <popup :visible.sync="visible[1]">
              <img :src="images[Math.floor(Math.random() * this.images.length)]" :style="{top: Math.floor(Math.random()* 90) - 10 +'%', left: Math.floor(Math.random() * 90) - 10 +'%', position: 'fixed'}" :class="animation[Math.floor(Math.random() * 4)]" >
        </popup>
        <popup :visible.sync="visible[2]">
              <img :src="images[Math.floor(Math.random() * this.images.length)]" :style="{top: Math.floor(Math.random()* 60) - 10 +'%', left: Math.floor(Math.random() * 60) - 10 +'%', position: 'fixed'}" :class="animation[Math.floor(Math.random() * 4)]" >
        </popup>
        <popup :visible.sync="visible[3]">
              <img :src="images[Math.floor(Math.random() * this.images.length)]" :style="{top: Math.floor(Math.random()* 90) - 10 +'%', left: Math.floor(Math.random() * 90) - 10 +'%', position: 'fixed'}" :class="animation[Math.floor(Math.random() * 4)]">
        </popup>
        <popup :visible.sync="visible[4]">
              <img :src="images[Math.floor(Math.random() * this.images.length)]" :style="{top: Math.floor(Math.random()* 50) + 30 +'%', left: Math.floor(Math.random() * 60) - 10 +'%', position: 'fixed'}" :class="animation[Math.floor(Math.random() * 4)]">
        </popup>
        <popup :visible.sync="visible[5]">
              <img :src="images[Math.floor(Math.random() * this.images.length)]" :style="{top: Math.floor(Math.random()* 90) - 10 +'%', left: Math.floor(Math.random() * 90) - 10 +'%', position: 'fixed'}" :class="animation[Math.floor(Math.random() * 4)]">
        </popup>
        <popup :visible.sync="visible[6]">
              <img :src="images[Math.floor(Math.random() * this.images.length)]" :style="{top: Math.floor(Math.random()* 60) - 10 +'%', left: Math.floor(Math.random() * 40) + 40 +'%', position: 'fixed'}" :class="animation[Math.floor(Math.random() * 4)]">
        </popup>
        <popup :visible.sync="visible[7]">
              <img :src="images[Math.floor(Math.random() * this.images.length)]" :style="{top: Math.floor(Math.random()* 90) - 10 +'%', left: Math.floor(Math.random() * 90) - 10 +'%', position: 'fixed'}" :class="animation[Math.floor(Math.random() * 4)]">
        </popup>
        </div>
         <div class="parent">
          <div class="box">Lorem</div>
          </div>
          <Demo-Dog-Profile-Modal/>

         </div>
</template>

<script>
import LinkView from './components/LinkView'
import Popup from './components/Popup'
import DemoDogProfileModal from './components/DogProfileModal'
export default {
  components: {
      Popup,
      DemoDogProfileModal
  },

  data() {
    return {
      intervalID : window.setInterval(this.updateTransition, 1000),
      before_page_data: '',
      mix_text: '',
      visible: [false,false,false,false,false,false,false,false],
      before_page_data: '',
      animation : [
          'change',
          'move3',
          'move',
          'swing'
      ],
      images: [
          '/static/images/RandPopup0.gif',
          '/static/images/RandPopup1.gif',
          '/static/images/RandPopup2.gif',
          '/static/images/RandPopup3.gif',
          '/static/images/RandPopup4.gif',
          '/static/images/RandPopup5.gif',
          '/static/images/RandPopup6.gif',
          '/static/images/RandPopup7.gif',
          '/static/images/RandPopup8.gif',
          '/static/images/RandPopup9.gif',
          '/static/images/RandPopup10.gif',
          '/static/images/RandPopup11.gif',
          '/static/images/RandPopup12.gif',
          '/static/images/RandPopup13.gif',
          '/static/images/RandPopup14.gif',
      ],
      selectedImage: ''
    }
  },
  mounted() {
      this.before_page_data = this.$route.params
      var mix_arr = this.$route.params.snippet.sort(()=>{return 0.5 - Math.random()})
      console.log(mix_arr)
      mix_arr.forEach((element) => {
          this.mix_text += element + ' '
      })
      setTimeout( () => {
        this.$modal.show('dog-profile')
      }, 3000);
      setTimeout( () => {
          this.$set(this.visible, 1, !this.visible[1])
      }, 5500);
      setTimeout( () => {
          this.$set(this.visible, 2, !this.visible[2])
      }, 7500);
      setTimeout( () => {
          this.$set(this.visible, 3, !this.visible[3])
      }, 9000);
      setTimeout( () => {
          this.$set(this.visible, 4, !this.visible[4])
      }, 10500);
      setTimeout( () => {
          this.$set(this.visible, 5, !this.visible[5])
      }, 11000);
      setTimeout( () => {
          this.$set(this.visible, 6, !this.visible[6])
      }, 11300);
      setTimeout( () => {
          this.$set(this.visible, 7, !this.visible[7])
      }, 11500);
      setTimeout( () => {
          this.$set(this.visible, 8, !this.visible[8])
      }, 11500);

  },
   methods: {
      updateTransition() {
        var el = document.querySelector("div.headImg");

        if (el) {
       // el.className = "moveOut";
       // updateTransition = "moveOut";
        } else {
        el = document.querySelector("div.headImg");
        el.className = "headImg";
        }

        return el;
      }
    },
}
</script>
<style scoped lang="scss">

$pi: 3.14159265359;
$_precision: 10;

@function pow($base, $exp) {
  $value: $base;
  @if $exp > 1 {
    @for $i from 2 through $exp {
      $value: $value * $base;
    }
  }
  @if $exp < 1{
    @for $i from 0 through -$exp {
      $value: $value / $base;
    }
  }
  @return $value;
}

@function fact($num) {
  $fact: 1;
  @if $num > 0{
    @for $i from 1 through $num {
      $fact: $fact * $i;
    }
  }
  @return $fact;
}

@function _to_unitless_rad($angle) {
  @if unit($angle) == "deg" {
    $angle: $angle / 180deg * $pi;
  }
  @if unit($angle) == "rad" {
    $angle: $angle / 1rad;
  }
  @return $angle;
}

@function sin($angle){
  $a: _to_unitless_rad($angle);
  $sin: $a;
  @for $n from 1 through $_precision {
    $sin: $sin + (pow(-1, $n) / fact(2 * $n + 1) ) * pow($a, (2 * $n + 1));
  }
  @return $sin*1000px;
}

@function cos($angle){
  $a: _to_unitless_rad($angle);
  $cos: 1;
  @for $n from 1 through $_precision {
    $cos: $cos + ( pow(-1,$n) / fact(2*$n) ) * pow($a,2*$n);
  }
  @return $cos*500px;
}


.moveOut{
  transition: transform 3s;
  position : fixed;
  $degree : random(6) + random(10) * 0.1 + random(10) * 0.01 ;
  left: cos($degree);
  top: sin($degree);
}
.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-timing-function: ease;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-timing-function: ease;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-timing-function: ease;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-timing-function: ease;
}

.swing {
  animation: swing .4s infinite linear both;
}
@keyframes swing {
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
.move {
  animation: move 1.8s infinite linear both;
}
@keyframes move {
  from, to {
    transform: translate3d(0, 50px, 0);
  }

  50% {
    transform: translate3d(0, -50px, 0);
  }
}
.rotate-move {
  animation: rotate-move 1.8s infinite linear both;
}
.rotate-center {
  animation: rotate-center 1s infinite linear both;
  transform-origin: 80% 80%;
}
.move3 {
  animation: move3 1.8s infinite linear both;
}
@keyframes move3 {
  from, to {
    transform: translate3d(20px, 20px, 0);
  }

  25% {
    transform: translate3d(-20px, 20px, 0);
  }

  50% {
    transform: translate3d(-20px, -20px, 0);
  }

  75% {
    transform: translate3d(20px, -20px, 0);
  }
}
@keyframes rotate-center {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
.change {
  animation: change 2s infinite linear;
}
@keyframes change {
  from, to  {
    transform: rotateY(0deg)
  }

  50% {
    transform: rotateY(180deg)
  }
}
@keyframes arrow {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
}

.window-container {
    position: relative;
    width: 100%;
    height: 100%;
}
.headImg{
    display: flex;
    align-items: center;
    position: relative;
    margin: 0;
}
.headImg img:nth-child(1){
    margin-top: 50px;
    width:100%;
}
.arrow {
    animation: arrow 1.2s;
}
.arrow img{
    width: 30%;
    position: fixed;
    top: 0%;
    left: 35%;
}
.bodyBlock {
    margin: 20px;
    display: inline;
    position: absolute;
    width: 97%;
 }
 .bodyBlock .left-img{
    float: left;
    width: 12%;
    padding-right: 30px;
 }
.bodyBlock .right-img{
    float: right;
    right: -20px;
    width: 12%;
}
.bodyBlock .center-img{
    position:static;
    top: 80px;
    left: auto;
    float: left;
    width: 30%;

}
.bodyText{
    font-size: 30px;
    display: grid;
}
.subText{
    font-size: 18px;
    display: inline;
}
</style>