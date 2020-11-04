<template>
     <div>
          <the-title :title="titles" />
          
          <div v-for="item in projects" :key="item.id">
               <project-card :project="item" />
          </div>

     </div>
</template>

<script>
import TheTitle from '../components/TheTitle'
import ProjectCard from '../components/portfolio/ProjectCard'

     export default {
          components: {
               TheTitle,
               ProjectCard
          },
          data() {
               return {
                    titles: {
                         view: 'Projects',
                         description: 'Showcase of my latest works'
                    },
                    projects: [
                    {
                        id: 1,
                        name: 'Snake Game',
                        img: require("../assets/img/projects/project_snake.jpg"),
                        source: '../../assets/projects/snake/index.html',
                        description: `A popular snake game created using <strong>Javascript</strong>.
                            The game offers <strong>two basic modes</strong> (on/off walls) and <strong>three speed levels</strong>.
                            Control is <strong>very simple</strong> (arrows) and to reset the game using the <strong>backspace</strong> or other key.
                            The game stores your <strong>best record</strong>.
                            I wish you a pleasant party 🙂`
                        
                    },
                    {
                        id: 2,
                        name: 'Robofriends',
                        img: require("../assets/img/projects/project_robots.jpg"),
                        source: 'https://adostos.github.io/app_robots/',
                        description: `
                            Everyone had to start somehow, and this was my <strong>first</strong> application created in the <strong>React</strong> framework.
                            This is an easy search for saved contacts. Contacts are stored <strong>locally</strong>,
                            but also contain settings with external data, via the <strong>axios</strong> interface.
                        `
                    },
                    {
                        id: 3,
                        name: 'Contact List',
                        img: require("../assets/img/projects/project_list.jpg"),
                        source: '../../assets/projects/list/index.html',
                        description: `
                            This is a very simple application created in my favorite framework: <strong>Vue.js</strong>. 
                            Here I learned the basics of Vue. The application contains fields for <strong>adding</strong> new contacts, as well as buttons for <strong>resetting</strong>, 
                            <strong>deleting</strong> and <strong>cleaning</strong> the entire sheet.
                        `
                    },
                    {
                        id: 4,
                        name: 'API iTunes App',
                        img: require("../assets/img/projects/project_robots.jpg"),
                        description: `
                            Application for searching for <strong>favorite songs</strong> using the <strong>iTunes Search API</strong>.
                            With The Search API you can search for a <strong>variety of content</strong>
                            within the iTunes Store and Apple Books Store but this aplication is focused on <strong>songs</strong>.
                        `
                    },
                ]
               }
          }
     }
</script>

<style lang="scss" scoped>
@import '../main.scss';

</style>