<template>
  <div>

    <navmenu></navmenu>

    <div>

      <div class="squares-svg" >
        <svg class="squares" @click="showPortfolio">
          <use xlink:href="#squares"></use>
        </svg>
      </div>

      <ul class="menu-list" v-if="!showPortfolioList">

<!--        <li @click="choosePortfolio = '{{portfolio.list}}'" class="portfolio-list__item" v-for="portfolio in portfolioList"> {{ portfolio.list }}</li>-->

        <li @click="choosePortfolio = 'appAll'" class="menu-list__item"> All</li>
        <li @click="choosePortfolio = 'appBranding'" class="menu-list__item"> Branding </li>
        <li @click="choosePortfolio = 'appPrint'" class="menu-list__item"> Print</li>
        <li @click="choosePortfolio = 'appPhotography'" class="menu-list__item"> Photography </li>
        <li @click="choosePortfolio = 'appDesign'" class="menu-list__item"> Design </li>
        <li @click="choosePortfolio = 'appMockup'" class="menu-list__item"> Mockup </li>

      </ul>
    </div>

    <div class="project">

      <componnent :is="choosePortfolio"></componnent>

    </div>

  </div>
</template>

<script>

    import All from '../component/portfolio/All'
    import Branding from '../component/portfolio/Branding'
    import Design from '../component/portfolio/Design'
    import Photography from '../component/portfolio/Photography'
    import Print from '../component/portfolio/Print'
    import Mockup from '../component/portfolio/Mockup'



    export default {
        data() {
            return {
                // portfolioList: [
                //     {list: 'ALL'},
                //     {list: 'BRANDING'},
                //     {list: 'PRINT'},
                //     {list: 'PHOTOGRAPHY'},
                //     {list: 'DESIGN'},
                //     {list: 'MOCKUP'},
                // ],
                showPortfolioList: true,
                choosePortfolio: 'appAll',
            };

        },
        methods: {
            showPortfolio: function () {
                this.showPortfolioList = !this.showPortfolioList
            }
        },
        components: {
            appAll: All,
            appBranding: Branding,
            appPrint: Print,
            appPhotography: Photography,
            appDesign: Design,
            appMockup: Mockup,
/*
            Photography,
            Design,
            Mockup,*/
        }
    }

</script>

<style></style>

