<template>
     <span>
          <hr>
          <span class="change">
               
               <transition name="fadein">
                    <p class="motivstart" v-show="par == false">
                         None of the wise fell from heaven and everyone has to learn everything from scratch.
                         Give a person a chance, time and space to improve and he will improve!
                    </p>
               </transition>


               <transition name="fadeout" class="fadeout">
                    <p v-show="par" class="motiv">
                         Great! You gave me a chance and the results came.<br>
                         You helped me and now I can help you.
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