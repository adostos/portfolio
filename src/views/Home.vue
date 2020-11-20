<template>
    <div class="home">
        <img
            class="animate__animated animate__flipInY"
            alt="Vue logo"
            src="../assets/logo.png"
        />
        <HelloWorld /> 
    </div>
</template>

<script>
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
    margin-top: 8em;
}

@media screen and (max-width: 593px) {
    .home {
        margin-top: 5em;
    }

    img {
        margin-top: 1.5em;
    }
}
</style>
