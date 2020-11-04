<template>
     <div>
          <the-title :title="titles" />

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
                         view: 'Contact me',
                         description: 'Please feel free if you would like to have a chat'
                    }
               }
          },
     }
</script>

<style lang="scss" scoped>
@import '../main.scss';

</style>