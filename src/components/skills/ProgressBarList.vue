<template>
     <li>
          <span v-for="(item, index) in skills" :key="index">
               
               <p>
                    {{ item.name }}
               </p>
               
               <progress-bar :value="item.skill + value"></progress-bar>
          </span>
     </li>
</template>

<script>
import ProgressBar from "./ProgressBar.vue"

     export default {
          components: {
               ProgressBar
          },
          props: [
               'value'
          ],
          data() {
               return {
                     skills: [
                         { "name": "Javascript", "skill": 50 },
                         { "name": "Python", "skill": 40 },
                         { "name": "HTML, CSS (Sass)", "skill": 65 },
                         //{ "name": "CSS (Sass)", "skill": 65 },
                         { "name": "Vue.js", "skill": 50 },
                         //{ "name": "Angular", "skill": 40 },
                         //{ "name": "Laravel", "skill": 10 },
                         //{ "name": "MySQL", "skill": 30 },
                         { "name": "GitHub", "skill": 45 },
                         { "name": "Adobe (Photoshop, Illustrator, InDesign)", "skill": 65 },
                         //{ "name": "Adobe Illustrator", "skill": 65 },
                         //{ "name": "Adobe InDesign", "skill": 65 }
                    ]  
               }
          },
     }
</script>

<style lang="scss" scoped>
@import '../../main.scss';

p {
     margin: 0;
     font-size: 1.2em;
     font-weight: bold;
}
</style>