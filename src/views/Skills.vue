<template>
     <div class="main animate__animated animate__fadeIn">
          <ul>
               <progress-bar-list :value="valuee"></progress-bar-list>
          </ul>
          <teach @improve-me="valuee = $event"></teach>
     </div>
</template>

<script>

import ProgressBarList from "../components/ProgressBarList.vue"
import Teach from "../components/Teach.vue"

     export default {
          components: {
               ProgressBarList,
               Teach,
          },
          data() {
               return {
                    valuee: []
               }
          },
     }
</script>

<style lang="scss" scoped>
@import '../main.scss';

ul {
     margin: 0;
     padding: 0;
     list-style: none;
}
li {
     margin-top: 50px;
}
@media screen and (max-width: 593px) {
     li {
          margin: 10px auto;
     }
}
</style>