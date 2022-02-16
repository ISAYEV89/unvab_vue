<template>
  <div id="app">

    <Mysvg></Mysvg>



    <router-view></router-view>

    <myfooter></myfooter>

  </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {

            }

        },

    }

</script>


<style lang="scss">

  @import "scss/common";
  @import "scss/header";
  @import "scss/font";
  @import "scss/about";
  @import "scss/box";
  @import "scss/test";
  @import "scss/project";
  @import "scss/contact";
  @import "scss/carousel";
  @import "scss/footer";
  @import "scss/nav-menu";
  @import "scss/tab";
  @import "scss/blog";

</style>
