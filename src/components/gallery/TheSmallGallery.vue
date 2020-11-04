<template>
    <div class="small-gallery">

        <article v-for="item in images" :key="item.id">

            <img
                :src="item.image"
                @click.prevent="imgId(item.id)"
                :class="{ strong: valueNumber == item.id}"
                alt="image"
            />

        </article>

    </div>
</template>

<script>
    export default {
        props: [
            'images',
            'valueNumber'
        ],
        methods: {
            imgId(value) {
                this.$emit('img-id', value)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../main.scss';

.small-gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

article {
    width: auto;
    margin-top: 20px;
    padding-left: 10px;
}

img {
    width: 6.5em;
    opacity: 0.7;
    transition: all .2s ease-in-out;

    &:hover {
        opacity: 1;
    }
}

.strong {
    transition: all .1s ease-in-out;
    outline: 3px solid $blue;
    opacity: 1;
}

@media screen and (max-width: 593px) {
    .article {
        margin-top: 0;
    }
}

/* @media screen and (max-width: 1037px) {

}
 */
</style>