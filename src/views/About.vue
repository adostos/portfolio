<template>
    <div class="about animate__animated animate__fadeIn">
        
        <the-title :title="titles" />

        <article class="aboutme" v-cloak>

            <!-- <img src="../assets/profile.jpg" alt=""> -->

            <p class="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
                voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                <br><br>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
                voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
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
.introduction {
    margin-top: 0;
    font-weight: normal;
}
.aboutme {
    display: inline-flex;
    justify-content: center;
    height: auto;
    margin-top: 20px;
}
.text {
    color: $blue;
    letter-spacing: 1px;
    text-align: left;
}

img {
    width: 250px;
    margin: -20px 30px;
    clip-path: circle(40%);
}

@media screen and (max-width: 593px) {
    .about {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    .aboutme {
        display: inline;
    }
    .text {
        margin: 0 30px 20px;
        text-align: center;
    }
}
</style>