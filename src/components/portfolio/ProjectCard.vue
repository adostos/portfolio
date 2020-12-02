<template>
    <div class="portfolio animate__animated animate__fadeIn">
        <article>
            <aside>
                <a :href="project.source" target="blank">
                    <img :src="project.img" alt="">
                </a>
            </aside>
            <span>
                <h1>
                    {{ project.name }}
                </h1>
                <p v-html="project.description"></p>
                
                <a :href="project.source" target="blank">
                    <button class="btn">
                        See Live
                    </button>
                </a>

            </span>
        </article>
    </div>
</template>

<script>
    export default {
        props: [
            'project'
        ],
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '../../main.scss';

.portfolio {
    margin: 0 auto;
    width: 50em;
    max-width: 90%;
}

article {
    display: flex;
    border-bottom: 1px solid $blue;
}

span {
    text-align: left;
    margin:0 0 20px 0;
}

img {
    width: 370px;
    margin: 25px;
}

h1 {
    margin-bottom: 0;
}

p {
    line-height: 1.7em;
    margin: 12px 0;
}

.btn {
    background-color: transparent;
    border: 2px solid $red;
    font-weight: bold;
    color: $red;
    outline: none;
    padding: 5px 10px;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        background-color: $red;
        color: $white;
    }
}

@media screen and (max-width: 593px) {
    article {
        display: flex;
        flex-wrap: wrap;
    }
    img {
        width: 90%;
        margin-left: 0;
        margin-right: 0;
    }
}
</style>