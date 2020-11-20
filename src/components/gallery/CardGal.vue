<template>
    <div class="slider animate__animated animate__fadeIn">

        <article class="images">
            <img
                id="main"
                @click.prevent="zoomImg"
                :src="this.images[this.value].image"
                alt="image2"
            />
        </article>
            
        <span class="buttons">
            <button id="left" @click.prevent="leftShift">Left</button> |
            <button id="right" @click.prevent="rightShift">Right</button>
        </span>

        <the-small-gallery :images="images" :valueNumber="value + 1" @img-id="value = $event - 1" />
    </div>
</template>

<script>
import TheSmallGallery from './TheSmallGallery'

    export default {
        components: {
            TheSmallGallery
        },
        data() {
            return {
                value: 1,
                zoom: true,
                images: [
                    { id: 1, image: require('../../assets/img/bear.jpg'), name: 'obr1' },
                    { id: 2, image: require('../../assets/img/bird.jpg'), name: 'obr2' },
                    { id: 3, image: require('../../assets/img/eagle.jpg'), name: 'obr3' },
                    { id: 4, image: require('../../assets/img/eye.jpg'), name: 'obr5' },
                    { id: 5, image: require('../../assets/img/giraffe.jpg'), name: 'obr6' },                    
                    { id: 6, image: require('../../assets/img/horse.jpg'), name: 'obr6' },                    
                    { id: 7, image: require('../../assets/img/cheetah.jpg'), name: 'obr6' },                    
                    { id: 8, image: require('../../assets/img/zebra.jpg'), name: 'obr6' },                    
                    { id: 9, image: require('../../assets/img/eagle2.jpg'), name: 'obr4' },
                    { id: 10, image: require('../../assets/img/wolf.jpg'), name: 'obr6' },                    
                    { id: 11, image: require('../../assets/img/lion.jpg'), name: 'obr6' },                    
                ],
            }
        },
        methods: {
            zoomImg() {
                const mainImage = document.getElementById('main')
                if (this.zoom) {
                    mainImage.setAttribute('class', 'zoomIn')
                } else {
                    mainImage.setAttribute('class', 'zoomOut')
                }
                this.zoom = !this.zoom
            },
            rightShift() {
                const mainImage = document.getElementById('main')
                
                // set main (center) image
                if (this.value < this.images.length - 1) {
                    this.value++
                    mainImage.setAttribute('src', this.images[this.value].image)
                }
            },
            leftShift() {
                const mainImage = document.getElementById('main')
                
                if (this.value > 0) {
                    this.value--
                    mainImage.setAttribute('src', this.images[this.value].image)
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
@import '../../main.scss';

.images {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    transition: all .2s ease-in-out;
}

button {
    margin: 20px 5px;
    background-color: transparent;
    border: 2px solid $red;
    font-weight: bold;
    color: $red;
    outline: none;
    padding: 5px 10px;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    
    &:hover {
        background-color: $red;
        color: $white;
    }
}

#main {
    //width: 90%;
    max-width: 37em;
    max-height: 30em;
    transition: all 0.5s ease-in-out;
    border-radius: 10px;
    border: 7px solid $blue;
    cursor: pointer;
    z-index: 1;
}

#first, #second {
    width: 15%;
    margin: 10px;
    filter: blur(1.5px);
    opacity: 0.5;
    border-radius: 10px;
    border: 3px solid $blue;
}

.zoomIn {
    transition: all .5s ease-in-out;
    transform: scale(2);
    max-width: 90%;
}
.zoomOut {
    transition: all .5s ease-in-out;
    transform: scale(1);
}

@media screen and (max-width: 593px) {
    .images {
        margin-top: 1.5em;
    }
    
    .zoomIn, .zoomOut {
        transition: none;
        transform: none;
    }

    #main {
        max-width: 90%;
    }
}

@media screen and (max-width: 1037px) {
    #first, #second {
        display: none;
    }
}

</style>