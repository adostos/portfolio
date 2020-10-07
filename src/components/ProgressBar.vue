<template>
     <div class="progress"> 
          <div class="progress-bar" :style="{width: value + '%'}">
               {{ value }}%
          </div>
     </div>
</template>

<script>
     export default {
          props: [
               'value'
          ],
          data() {
               return {
                    //value: 30
               }
          }
     }
</script>

<style lang="scss" scoped>
@import '../main.scss';

.progress {
     margin: 5px auto;
     width: 90%;
     max-width: 450px;
     border-radius: 1em;
     height: 17px;
     margin-bottom: 35px;
     box-shadow: 1px 2px 3px rgb(102, 102, 102);

     .progress-bar {
          background-image: linear-gradient($green, $green_light);
          height: 17px;
          border-radius: 1em;
          font-size: 0.9em;
          font-weight: bold;
          color: $white;
          transition: all 0.5s ease-in-out;
          width: 500px;
          animation-duration: 2s;
          animation-name: slidein;
     }

     @keyframes slidein {
          from {
          width: 0;
          }

          to {
          width: value;
          }
     }
}
</style>