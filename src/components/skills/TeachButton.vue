<template>
     <button name="button" class="button button2 animate__animated animate__tada" @click.prevent="improveMe">
          {{ text }}
     </button>
</template>

<script>
     export default {
          data() {
               return {
                    value: 30,
                    text: 'Help me improve'
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
@import '../../main.scss';

$btn-hover: 0.6s;

button, button::after {
     -webkit-transition: all $btn-hover;
     -moz-transition: all $btn-hover;
     -o-transition: all $btn-hover;
     transition: all $btn-hover;
}

button {
     background: none;
     border: 1px solid $red;
     border-radius: 5px;
     color: $red;
     display: block;
     font-size: 14px;
     font-weight: 600;
     margin: 15px auto;
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