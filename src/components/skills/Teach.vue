<template>
     <span>
          <hr>
          <span class="change">
               
               <transition name="fadein">
                    <p class="motivstart" v-show="par == false">Lorem Ipsum is simply dummy text of the printistandard dummy text ever since the 1500s, when an a galley of type and scrambled it to make a type specimen book.</p>
               </transition>


               <transition name="fadeout" class="fadeout">
                    <p v-show="par" class="motiv">
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                    </p>
               </transition>
          </span>
          <teach-button v-show="par == false" @improve-me="improveVal($event)"></teach-button>
     </span>
</template>

<script>
import TeachButton from './TeachButton.vue'

     export default {
          components: {
               TeachButton
          },
          data() {
               return {
                    par: false,
                    btn: 1
               }
          },
          methods: {
               improveVal(item) {
               this.$emit('improve-me', item)
               this.par = true
               }
          }
     }
</script>

<style lang="scss" scoped>
@import '../../main.scss';
* {
     overflow: hidden;
}
.change {
     display: inline;
}

.motivstart {
     width: 90%;
     max-width: 500px;
     margin: 10px auto;
}
.motiv {
     width: 90%;
     max-width: 500px;
     margin: 10px auto;
     margin-bottom: 20px;
     transition: 0.5s ease-in;
     opacity: 1;
}
hr {
     margin: 0px auto;
     width: 90%;
     max-width: 500px;
     margin-bottom: 10px;
}

.fadein-leave {
     opacity: 1;
}
.fadein-leave-active {
     transition: all 0.2000ms ease-out;
}
.fadein-leave-to {
     opacity: 0;
}

.fadeout-enter {
     opacity: 0;
}
.fadeout-enter-to {
     opacity: 1;
}
.fadeout-enter-active {
     transition: all 1.8s ease-in;
}
</style>