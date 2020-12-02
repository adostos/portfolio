<template>
     <div>
          <the-title :title="titles" />
          <ul>
               <li>
                    <experience-card
                         v-for="(item, index) in jobs"
                         :key="index"
                         :item="item"
                    />
               </li>
          </ul>
          
          <article id="card" class="card">

               <span class="time animate__animated animate__bounceIn">
                    <p>
                         <strong>👉️</strong><br>
                    </p>
               </span>

               <span class="school animate__animated animate__fadeIn">
                    <h2>Enter your company name:</h2>

                    <form action="#" @keydown.enter.prevent="addCompany">
                         <input
                              class="input-txt"
                              type="text"
                              placeholder="Company"
                              v-model="company"
                              ref="input"
                         />
                    </form>
                    
                    <em>Everyone can be better if they get a chance and space</em>
               </span>

          </article>

     </div>
</template>

<script>
import ExperienceCard from '../components/ExperienceCard.vue'
import TheTitle from '../components/TheTitle'

     export default {
          components: {
               ExperienceCard,
               TheTitle
          },
          data() {
               return {
                    titles: {
                         view: 'Work experience',
                         description: 'My previous work experience'
                    },
                    company: '',
                    jobs: [
                         {
                              dateS: '05/2019',
                              dateE: '10/2019',
                              where: 'POPRADSKÁ TLAČIAREŇ, VYDAVATEĽSTVO',
                              what: 'Creation of various graphic designs:',
                              section: 'newspapers, leaflets, brochures, business cards, banners, etc.'
                         },
                         {
                              dateS: '09/2013',
                              dateE: '05/2014',
                              where: 'METALCOP',
                              what: 'Creation of various graphic designs:',
                              section: 'graphic design and designs of aluminum prints, vectorization'
                         },
                    ]   
               }
          },
          methods: {
               addCompany() {
                    this.jobs.push({
                         dateS: 'Today',
                         dateE: '∞',
                         where: this.company,
                         what: 'FRONTEND DEVELOPER',
                         section: 'designing, coding and modifying Web applications or others'
                    })
                    let cardCompany = document.getElementById('card')
                    cardCompany.classList.add("deactive")
               }
          },
          mounted() {
               this.$refs.input.focus()
          }    
     }
</script>

<style lang="scss" scoped>
@import '../main.scss';
@import '../assets/css/card.scss';

ul {
    padding: 0;
    list-style: none;
}

li {
    margin: 0px auto;
}

strong {
     font-size: 1.5em;
}

.input-txt {
     font-size: 16px;
     color: $red;
     background: none;
     outline: none;
     border: none;
     border-bottom: 2px solid $blue;
     width: 70%;
     text-align: left;
     margin: 5px 0;
     font-weight: bold;
     animation-duration: 2s;
     animation-name: rollright;
}
@keyframes rollright {
     from {
          width: 10px;
          transition: width;
     }                 
     to {
          width: 70%;
     }
} 

h2 {
     margin-top: 10px;
}

.deactive {
     display: none;
}
</style>