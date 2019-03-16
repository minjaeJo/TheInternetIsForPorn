<template>
  <modal 
    name="dog-profile"
    classes="cute-dog-profile-photo"
    transition="scale"
    :top="Math.floor(Math.random()* 50) + 30 +'%'"
    :left="Math.floor(Math.random() * 40) + 40 +'%'"
    :height="400"
    :width="400"
    @before-close="beforeClose">

  >
    <img src="/static/images/RandPopup0.gif" />
  </modal>
</template>
<script>
export default {
  name: 'InputFocusModal',
  data() {
    return {
      cantClose : true
    }
  },
    methods: {
      beforeClose (event) {
        if (this.cantClose) {
          this.cantClose = true
          event.stop()
        };
      }
      
  },
  mounted() {
    setTimeout( () => {
          this.cantClose = false
    }, 10000);
  }
}
</script>
<style lang="scss">
$Random-top : random(1400)*0.01;
$Random-right : random(2000)*0.01+50;
.cute-dog-profile-photo {
  top: $Random-top + vw !important;
  left: $Random-right + vw !important;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.65);
  img {
    position: absolute;
    left : -2px;
    margin: 0;
    width: 102%;
    height: 100%;
  }
}
.ct-top-right {
  cursor: pointer;
  font-weight: 600;
  color: white;
  text-shadow: 0 0px 20px black;
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s;
}
.scale-enter,
.scale-leave-active {
  opacity: 0;
  transform: scale(0.3) translateY(24px);
  transform: translate(-5000px, 3000px);

}
</style>