<template>
     <div class="gallery">
          <img v-for="(img, index) in images" :key="index" :src="img" alt="arg">
     </div>
</template>

<script>
     export default {
          data() {
               return {
                    images: [
                         'https://static.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg',
                         "https://static.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg",
                         "https://static.pexels.com/photos/213399/pexels-photo-213399.jpeg",
                         "https://static.pexels.com/photos/158471/ibis-bird-red-animals-158471.jpeg",
                         "https://static.pexels.com/photos/133459/pexels-photo-133459.jpeg",
                         "https://static.pexels.com/photos/50988/ape-berber-monkeys-mammal-affchen-50988.jpeg"
                    ]
               }
          },
          computed: {
               image() {
                    return this.images[0]
               }
          }
     }
</script>

<style lang="scss" scoped>
@import '../main.scss';

.gallery {
     margin-top: 70px;
}
img {
     display: inline-flex;
     justify-content: space-between;
     margin: 10px;
     width: 20em;
     border-radius: 5px;
     box-shadow: 2px 2px 5px black;
}
</style>