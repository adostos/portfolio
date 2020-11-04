<template>
    <div class="home">

        <img class="animate__animated animate__flipInY" alt="Vue logo" src="../assets/logo.png" />

        <HelloWorld /> 

    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld
    }
};
</script>

<style lang="scss" scoped>
@import '../main.scss';

img {
    margin-top: 10em;
}

@media screen and (max-width: 593px) {
    img {
        margin-top: 1.5em;
    }
}
</style>
