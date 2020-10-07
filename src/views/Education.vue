<template>
     <ul>
         <li>
          <education-card v-for="(item, index) in schools" :key="index" :item="item"></education-card>
         </li>
     </ul>
</template>

<script>
import EducationCard from '../components/EducationCard'

     export default {
          components: {
               EducationCard
          },
          data() {
            return {
                schools: [
                    {
                        dateS: 2018,
                        dateE: 2020,
                        school: 'Technická univerzita v Košiciach',
                        faculty: 'Fakulta elektrotechniky a informatiky',
                        section: 'Informatika - Telekomunikacie, Ing.'
                    },
                    {
                        dateS: 2015,
                        dateE: 2018,
                        school: 'Technická univerzita v Košiciach',
                        faculty: 'Fakulta elektrotechniky a informatiky',
                        section: 'Telekomunikacie, Bc.'
                    },
                    {
                        dateS: 2011,
                        dateE: 2015,
                        school: 'Stredná odborná škola technická',
                        faculty: 'Poprad, Kukučínova 483/12',
                        section: 'Grafik digitálnych médií'
                    }
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