<template>

    <div class="card">

        <span class="time animate__animated animate__flipInY">
            <p>
                <strong>
                    {{ item.dateE }} <br />
                </strong>
                {{ item.dateS }}
            </p>
        </span>

        <span class="school animate__animated animate__flipInX">
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
	display: flex;
    justify-content: center;
	background: transparent;
    border: none;
    
}
.time {
    background-color: $blue;
    width: 120px;
    height: 120px;
    color: $white;
    border-radius: 60px;
    box-shadow: 2px 2px 5px $green;
    z-index: -1;

}
.school {
    background-color: $blue;
    color: $white;
    padding: 0 35px;
    box-shadow: 2px 2px 5px $green;
}
p {
    margin-top: 40px;
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
}
h3 {
    margin: 0 0 4px 0;
    font-size: 1em;
}

@media screen and (max-width: 593px) {
    .card {
        display: flex;
        flex-direction: column;
        margin-top:20px ;
    }
    .school {
        padding: 20px;
    }
    h2 {
        margin-top: 0;
    }
}
</style>