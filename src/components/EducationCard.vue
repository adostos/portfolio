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
@import '../assets/css/card.scss';
</style>