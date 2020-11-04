<template>

    <div class="card">

        <span class="time animate__animated animate__bounceIn">
            <p>
                <strong>
                    {{ item.dateE }} <br>
                </strong>
                {{ item.dateS }}
            </p>
        </span>

        <span class="school animate__animated animate__fadeIn">
            <h2>
                {{ item.where }}
            </h2>
            <h3>
                {{ item.what }}
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
@import '../assets/css/card.scss';
</style>