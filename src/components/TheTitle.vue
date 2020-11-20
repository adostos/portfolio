<template>
    <div class="animate__animated animate__fadeIn">

        <h1>{{ title.view }}</h1>

        <p class="introduction">
            {{ title.description }}
        </p>
        <hr>
    </div>
</template>

<script>
    export default {
        props: [
            'title'
        ]
    }
</script>

<style lang="scss" scoped>
@import '../main.scss';

* {
    margin: 0 auto;
}

h1 {
    margin-top: 40px;
    //text-shadow: 1px 1px 1px $green;
}

.introduction {
    margin-bottom: 5px;
    opacity: 0;
    color: $blue;
}

hr {
    width: 90%;
    max-width: 800px;
}

@media screen and (max-width: 593px) {
    h1 {
        margin-top: 0.5em;
    }
}
</style>