<template>
    <div class="about animate__animated animate__fadeIn">
        
        <the-title :title="titles" />

        <article class="aboutme" v-cloak>

            <img src="../assets/profile.jpg" alt=""> <br>

            <p class="text">
                Hi, my name is Aďo and I am from the High Tatras (Poprad, Slovakia).
                I studied at the <strong>Secondary Technical School</strong> in Poprad
                (study program: <strong>Graphic Designer of Digital Media</strong>) and this study program consisted of <strong>two</strong> basic parts: <br>
                1. website creation (HTML + CSS) <br>
                2. graphic design (Adobe Photoshop, Illustrator, InDesign and others).
            </p>
            <p class="text">
                <strong>Graphics</strong> and <strong>drawing</strong> are also among my hobbies and you can see some examples on the <router-link class="link" to="/gallery">gallery</router-link> subpage.
                My other hobbies include playing guitar, football, tennis, volleyball and badminton.
            </p>
            <p class="text">
                During the study at <strong>The Technical University of Košice</strong>, I focused mainly on <strong>5G networks</strong> and during the time I acquired my own first experiences with programming (in Python).
                I became interested in programming and started learning to program in <strong>JavaScript</strong>, which led to the <strong>frontend</strong> again.
                I have always been interested in graphics and in previous work I have gained a lot of experience with graphic design.
            </p>
            <p class="text">
                At present, I am still trying to improve in this area and I am willing to continue my education and progress.
                I tried to work in React, later I worked in Angular, but in the end I chose Vue.js.
                Next I would like to learn how to program in <strong>PHP</strong> and in <strong>Laravel</strong>.
            </p>
            <p class="text">
                At present, we are still trying to improve in this area and I am willing to continue my education and progress.
                I very much appreciate the friendly approach of the company to the employee and providing him with space for his improvement
                (for example in the form of courses) during which the employee will gain a lot of new experience.
            </p>

        </article>    
    </div>
</template>

<script>
import TheTitle from '../components/TheTitle'

    export default {
        components: {
            TheTitle
        },
        data() {
            return {
                titles: {
                         view: `About me`,
                         description: 'A small introduction about my self'
                    }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../main.scss';

.about {
    margin: 40px auto;
    width: 95%;
    max-width: 800px;
}

.aboutme {
    height: auto;
    margin-top: 20px;

}
.text {
    margin: 10px auto;
    color: $blue;
    letter-spacing: 0.2px;
    text-align: justify;
    line-height: 25px;
    font-size: 17px;
    width: 750px;
}

.link {
    color: $blue;
    text-decoration: none;
    font-weight: bold;
    color: $green;
}

img {
    width: 250px;
    margin: -20px 30px;
    clip-path: circle(40%);
    float: right;
}

@media screen and (max-width: 593px) {
    img {
        float: none;
    }
    
    p {
        max-width: 98%;
        font-weight: 1em;
    }
}
</style>