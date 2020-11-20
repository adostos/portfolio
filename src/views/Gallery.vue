<template>
     <div class="gallery">
          <the-title :title="titles" />
          <card-gal />
     </div>
</template>

<script>
import TheTitle from '../components/TheTitle'
import CardGal from '../components/gallery/CardGal'

     export default {
          components: {
               TheTitle,
               CardGal
          },
          data() {
               return {
                    titles: {
                         view: 'Gallery',
                         description: 'Showcase of my latest works'
                    },
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

.buts {
     margin: 10px;
     text-align: center;
}

ul {
     list-style: none;
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