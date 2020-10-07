<template>

    <div class="card">

        <span class="time">
            <p>
                <strong>
                    {{ item.dateS }} <br>
                </strong>
                {{ item.dateE }}
            </p>
        </span>

        <span class="school animate__animated animate__fadeIn">
            <h2>
                {{ item.school }}
            </h2>
            <h3>
                {{ item.faculty }}
            </h3>
            {{ item.section }}
        </span>

    </div>

</template>

<script>
    export default {
        props: [
            'item'
        ],
    }
</script>

<style lang="scss" scoped>
@import '../main.scss';

.card {
    margin: 5em 2em auto;
	padding: 0;
	display: inline-flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
	background: transparent;
}
.time {
    vertical-align: middle;
    //background-color: $blue;
    border: 0px solid;
    //border-color: $blue;
    width: 60px;
    height: 60px;
    color: $blue;
    border-radius: 60px;
    //box-shadow: 2px 2px 5px $green;
    animation-duration: 2s;
    animation-name: roll;
    z-index: 1;
}

@keyframes roll {
  from {
    margin-left: 80%;
    transform: rotateY(0deg)
  }

  to {
    margin-left: 0%;
    transform: rotateY(360deg)
  }
}

.school {
    //background-color: $blue;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: $blue ;
    color: $blue;
    padding: 0 35px;
    //box-shadow: 2px 2px 3px $red_dark;
    padding-bottom: 15px;
}
p {
    //margin-top: 40px;
    margin-top: 0;
    padding: 0;
}
strong {
    font-size: 22px;
    color: $green;
}
h2 {
    margin-bottom: 12px;
    color: $green;
    font-size: 1.17em;
    color: $red;
}
h3 {
    margin: 0 0 4px 0;
    font-size: 1em;
}

@media screen and (max-width: 593px) {
    .school {
        //font-size: 12px;
        h2 {
            margin-top: 15px;
        }
    }
    .card {
        margin-top: 0;
    }
}
</style>