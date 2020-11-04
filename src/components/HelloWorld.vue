<template>
    <div class="hello">
        <h1 class="animate__animated animate__fadeIn animate__slow">

            <p class="first">Hi.</p>
            <p class="second">My name is <span class="first">{{ myname }}</span>.</p>
            <p class="third">I'm the Developer you need!</p>
            <p class="fourth">I LOVE what I do, so I work hard to do it well.</p>
            
            <br />

            <router-link class="btn btn-2" to="/about">
              <p class="fifth">
                Hire Me >>
              </p>
            </router-link>

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
    text-decoration: none;
    text-transform: uppercase;
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
    width: 150px;
}
p { 
    margin: -5px;
    //margin-bottom: 10px;
}

@keyframes fadeInUp {
    from { 
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

p {
  opacity: 0; 
  animation: fadeInUp 1s ease-in-out 0s forwards;

    &.first {
        animation-delay: 1s;
        margin-bottom: 10px;
    }
    &.second {
        animation-delay: 3s;
        margin-bottom: 10px;
    }
    &.third {
        animation-delay: 6s;
        margin-bottom: 10px;
    }
    &.fourth {
        animation-delay: 9s;
        margin-bottom: 10px;
    }
    &.fifth {
        animation-delay: 13s;
        font-weight: normal;
    }
 }
</style>
