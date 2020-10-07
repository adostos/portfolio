<template>
    <div class="hello">
        <h1 class="animate__animated animate__fadeIn">
            Hi, my name is <span>{{ myname }}</span>.<br />
            I'm the Developer you need!
            <br />
            <router-link class="btn btn-2" to="/about"><p>Hire Me >></p></router-link>
        </h1>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data: function() {
        return {
          myname: `Ing. Adrian Stosil`
        }
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../main.scss';

.hello {
  padding: 0 10px;
}
span {
  color: $green;
  white-space: nowrap;
}

.btn {
  color:  $red;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
  line-height: 45px;
  padding: 50px;
  //position: relative;
  text-decoration: none;
  text-transform: uppercase;
  //width: 100%; 
  transition: all .5s ease-in-out;
  
  &:hover { text-decoration: none; }
  
}
.btn-2 {
    letter-spacing: 1px;
}
.btn-2:hover,
.btn-2:active {
  letter-spacing: 5px;
}
.btn-2:after,
.btn-2:before {
  backface-visibility: hidden;
  border: 1px solid rgba($red, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}
.btn-2:hover:after,
.btn-2:hover:before {
  backface-visibility: hidden;
  border-color: $red;
  transition: width 450ms ease-in-out;
  width: 150px;
}
.btn-2:hover:before {
  bottom: auto;
  //top: 0;
  width: 150px;
}
p { 
    margin: -5px;
}
</style>
