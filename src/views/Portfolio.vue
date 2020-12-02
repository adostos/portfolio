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
                        id: 6,
                        name: 'API MARVEL App',
                        img: require("../assets/img/projects/project_marvel.jpg"),
                        source: 'https://adostos.github.io/app-marvelapi/#/',
                        description: `
                            With this application you can <strong>search</strong> your <strong>favorite</strong> heroes from the world of <strong>MARVEL</strong>, such as HULK, THOR or CAPTAIN AMERICA.
                            You can <strong>add</strong> your favorite hero to the <strong>list</strong> of favorite heroes (then you can find them on the <strong>FAVORITES</strong> subpage)
                            and a detailed description is displayed on the <strong>HERO</strong> subpage.
                        `
                    },
                    {
                        id: 5,
                        name: 'API iTunes App',
                        img: require("../assets/img/projects/project_itunes.jpg"),
                        source: 'https://adostos.github.io/itunesapp/#/',
                        description: `
                            Application for searching your <strong>favorite songs</strong> using the <strong>iTunes Search API</strong>.
                            With The Search API you can search for a <strong>variety of content</strong>
                            within the iTunes Store and Apple Books Store but this aplication is focused on <strong>songs</strong>.
                        `
                    },
                    {
                        id: 4,
                        name: 'Snake Game',
                        img: require("../assets/img/projects/project_snake.jpg"),
                        source: 'https://adostos.github.io/snake-game/',
                        description: `
                            This is the popular snake game created using <strong>Javascript</strong>.
                            The game offers <strong>two basic modes</strong> (on/off walls) and <strong>three speed levels</strong>.<br>
                            Control is <strong>very simple</strong> (arrows) and to reset the game using the <strong>backspace</strong> or other key.
                            The game stores your <strong>record</strong>.
                            I wish you a pleasant party 🙂
                        `
                        
                    },
                    {
                        id: 3,
                        name: 'API Actual Weather',
                        img: require("../assets/img/projects/project_weather.jpg"),
                        source: 'https://adostos.github.io/actual-weather/',
                        description: `
                            App for <strong>actual weather</strong> for thousands of locations around the world created with <strong>Vue.js</strong>.
                            Enter your <strong>city</strong> or <strong>country</strong> where you live, and immediately find out what the weather is like there.
                            The application <strong>changes</strong> the background according to the <strong>current temperature</strong>.
                        `
                        
                    },
                    {
                        id: 2,
                        name: 'Contact List',
                        img: require("../assets/img/projects/project_list.jpg"),
                        source: 'https://adostos.github.io/list_app_m/',
                        description: `
                            This is a very simple application created in my favorite framework: <strong>Vue.js</strong>. 
                            Here I learned the basics of Vue. The application contains inputs for <strong>adding</strong> new contacts, as well as buttons for <strong>resetting</strong>, 
                            <strong>deleting</strong> and <strong>cleaning</strong> the entire sheet.
                        `
                    },
                    {
                        id: 1,
                        name: 'Robofriends',
                        img: require("../assets/img/projects/project_robots.jpg"),
                        source: 'https://adostos.github.io/app_robots/',
                        description: `
                            Everyone had to start somehow, and this was my <strong>first</strong> application created in the <strong>React</strong> framework.
                            This is an easy search for saved contacts. Contacts are stored <strong>locally</strong>,
                            but also contain settings with external data, via the <strong>axios</strong> interface.
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