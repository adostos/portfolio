<template>
     <button name="button" class="button button2" @click.prevent="improveMe">Help me improve</button>
</template>

<script>
     export default {
          data() {
               return {
                    value: 30,
               }
          },
          methods: {
               improveMe() {
                    this.$emit('improve-me', this.value)
               }
          }
     }
</script>

<style lang="scss" scoped>
@import '../main.scss';


 button, button::after {
     -webkit-transition: all 0.3s;
     -moz-transition: all 0.3s;
     -o-transition: all 0.3s;
     transition: all 0.3s;
}
button {
     background: none;
     border: 1px solid $red;
     border-radius: 5px;
     color: $red;
     display: block;
     font-size: 14px;
     font-weight: 600;
     margin: 0 auto;
     padding: 5px 10px;
     position: relative;
     text-transform: uppercase;
}
button::before,
button::after {
     background: $red_dark;
     content: '';
     position: absolute;
     z-index: -1;
}
button:hover {
     color: $white;
     border-color: $red_dark;
}
.button2::after {
     height: 100%;
     left: 0;
     top: 0;
     width: 0;
}
.button2:hover:after {
     width: 100%;
}

</style>