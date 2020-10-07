<template>
     <div class="contact-form">
          <h2 class="contact">Contact me</h2>

          <h2 class="name">Ing. Adrian Stosil</h2><hr style="width: 250px"><br/>

          <h4>Tatranska Lomnica 125</h4>
          <h4>Vysoke Tatry, Slovakia</h4><br />
          <h4>+421 908 400 734</h4><br />
          <h4><a href="gmail: ado19960@gmail.com">ado19960@gmail.com</a></h4>






     </div>
</template>

<script>
     export default {
          data() {
               return {

               }
          },
          methods: {
               get() {
                    alert('asdf')
               }
          }
     }
</script>

<style lang="scss" scoped>
@import '../main.scss';

* {
     margin: 0px auto;
}
.contact {
     color: $white;
     background-color: $blue;
     border-radius: 20px 20px 0 0;
     margin-bottom: 20px;
}
.contact-form {
     margin-top: 50px;
     border-radius: 22px 22px 0 0;
     width: 70%;
     max-width: 500px;

     border: 2px solid $blue;
}
.name {
     color: $green;
     margin-top: 30px;
}
</style>