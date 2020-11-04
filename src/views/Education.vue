<template>
    <div>
        <the-title :title="titles" />
        <ul>
            <li>
                <education-card v-for="(item, index) in schools" :key="index" :item="item"></education-card>
            </li>
        </ul>
    </div>
</template>

<script>
import EducationCard from '../components/EducationCard'
import TheTitle from '../components/TheTitle'

     export default {
          components: {
               EducationCard,
               TheTitle
          },
          data() {
            return {
                titles: {
                         view: 'Educations & Diplomas',
                         description: 'What I have done in my academic career'
                },
                schools: [
                    {
                        dateS: 2018,
                        dateE: 2020,
                        school: 'Technical University in Košice',
                        faculty: 'Fakulta elektrotechniky a informatiky',
                        section: 'Informatics - Telecommunications, Ing.'
                    },
                    {
                        dateS: 2015,
                        dateE: 2018,
                        school: 'Technical University in Košice',
                        faculty: 'Fakulta elektrotechniky a informatiky',
                        section: 'Telecommunications, Bc.'
                    },
                    {
                        dateS: 2011,
                        dateE: 2015,
                        school: 'Secondary vocational technical school',
                        faculty: 'Poprad, Kukučínova 483/12',
                        section: 'Graphic designer of digital media'
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