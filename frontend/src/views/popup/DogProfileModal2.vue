<template>
  <div>
    <modal 
      name="loading-Popup"
      classes="cute-dog-profile-photo"
      transition="scale"
      :height="500"
      :width="500"      
      @before-close="beforeClose">

    >
      <div 
        slot="top-right"
        class="ct-top-right"
      >
        HIDE THE DOGGY
      </div>
        <img src="/static/images/loading.gif" />
    </modal>
  </div>
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
          event.stop()
        }else{

        };
      }
  }
}
</script>
<style lang="scss">
  .cute-dog-profile-photo {
    position: fixed;
    top: 40%;
    left: 40%;
    border: 1px solid rgba(255, 255, 255, 0.65);
    border-radius: 100%;

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
    padding-top: 20px;
    padding-right: 30px;
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
  }
</style>
