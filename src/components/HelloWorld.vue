<template>
    <div class="hello animate__animated animate__fadeIn">
        <article>
            <p>Hi. My name is <span>{{ myname }}</span>.</p><br />
            <p>I'm the Developer you need!</p><br />
            <p>I LOVE what I do, so I work hard to do it well.</p>
        </article>
        <router-link to="/about">
            <button class="btn btn-2">Hire Me >></button>
        </router-link>
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
    margin-top: 3em;
    padding: 0 10px;
}

span {
    color: $green;
    white-space: nowrap;
    font-weight: bold;
}

button, .btn {
    background-color: transparent;
    border: none;
    outline: none;
}

.btn {
    color:  $red;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
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
    font-size: 30px;
    //font-weight: bold;
}

@media screen and (max-width: 593px) {
    p {
        font-size: 1em;
    }
}
</style>
