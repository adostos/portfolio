<template>
    <div class="about">
        <h1 class="title">About me</h1>
        <img src="../assets/profile.jpg" alt="">
        <p class="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
        </p>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style lang="scss" scoped>
@import '../main.scss';

.about {
    margin: 10px auto;
    width: 95%;
    max-width: 800px;
    //padding-top: 20px;
    background-image: linear-gradient(135deg, #02aab0, #00cdac);
    -webkit-clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
    //clip-path: polygon(0 7%, 100% -7%, 100% 100%, 0 100%);
    clip-path: polygon(0 1%, 100% 0, 100% 63%, 0% 100%);
}
.text {
    color: $red;
}
img {
    width: 250px;
    margin: 0;
    clip-path: circle(40%);
}
</style>