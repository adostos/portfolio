<template>
     <div class="main animate__animated animate__fadeIn">
          <the-title :title="titles" />
          <ul>
               <progress-bar-list :value="valuee"></progress-bar-list>
          </ul>
          <teach @improve-me="valuee = $event"></teach>
     </div>
</template>

<script>
import ProgressBarList from "../components/skills/ProgressBarList.vue"
import Teach from "../components/skills/Teach.vue"
import TheTitle from "../components/TheTitle"

     export default {
          components: {
               ProgressBarList,
               Teach,
               TheTitle
          },
          data() {
               return {
                    valuee: [],
                    titles: {
                         view: 'Technical skills',
                         description: 'But my goal is to be better'
                    }
               }
          },
     }
</script>

<style lang="scss" scoped>
@import '../main.scss';

ul {
     margin: 0;
     padding-top: 10px;
     list-style: none;
}

li {
     margin-top: 30px;
}

@media screen and (max-width: 593px) {
     li {
          margin: 10px auto;
     }
}
</style>