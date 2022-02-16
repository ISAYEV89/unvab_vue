<template>
  <div id="blog">

    <navmenu></navmenu>

    <div class="squares-svg squares-svg--grey">
      <svg class="squares" @click="showBlogList">
        <use xlink:href="#squares" ></use>
      </svg>
    </div>

    <ul class="menu-list menu-list--grey" v-if="blogList">
      <li @click="choosePortfolio = 'appAll'" class="menu-list__item"> All</li>
      <li @click="choosePortfolio = 'appBranding'" class="menu-list__item"> Branding</li>
      <li @click="choosePortfolio = 'appCities'" class="menu-list__item"> Cities</li>
      <li @click="choosePortfolio = 'appNature'" class="menu-list__item"> Nature</li>
      <li @click="choosePortfolio = 'appDesign'" class="menu-list__item"> Design</li>
    </ul>

    <div class="blog">

      <component :is="choosePortfolio"></component>

    </div>

  </div>

</template>

<script>

    import All from '../component/blog/All'
    import Branding from '../component/blog/Branding'
    import Design from '../component/blog/Design'
    import Cities from '../component/blog/Cities'
    import Nature from '../component/blog/Nature'


    export default {

        name: 'Blog',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                blogList: false,
                choosePortfolio: 'appAll',
            }
        },
        components: {
            appAll: All,
            appBranding: Branding,
            appNature: Nature,
            appCities: Cities,
            appDesign: Design,
        },
        methods: {
            showBlogList: function () {
                this.blogList = !this.blogList
            },
        }
    }
</script>
