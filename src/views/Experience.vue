<template>
     <ul>
         <li>
          <experience-card v-for="(item, index) in schools" :key="index" :item="item"></experience-card>
         </li>
     </ul>
</template>

<script>
import ExperienceCard from '../components/ExperienceCard.vue'

     export default {
          components: {
               ExperienceCard
          },
          data() {
               return {
                 schools: [
                    {
                        dateS: '05/2019',
                        dateE: '10/2019',
                        school: 'POPRADSKÁ TLAČIAREŇ, VYDAVATEĽSTVO s. r. o.',
                        faculty: 'Tvorba rôznych grafických návrhov:',
                        section: 'noviny, letáky, brožúry, vizitky, bannery, výrobky, logá, atď.'
                    },
                    {
                        dateS: '09/2013',
                        dateE: '05/2014',
                        school: 'METALCOP, s.r.o.',
                        faculty: 'Tvorba rôznych grafických návrhov:',
                        section: 'grafický dizajn a návrhy alumíniových potlačí, vektorizácia'
                    },
          ]   
               }
          }
          
          
     }
</script>

<style lang="scss" scoped>
@import '../main.scss';

ul {
    padding: 0;
    list-style: none;
}
li {
    margin: 0px auto;
}
</style>