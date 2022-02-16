<template>

    <nav class="scroll-menu " >
      <div class="container">
        <div class="row">
          <div class="col-2">

            <a href="">
              <svg class="logo">
                <use xlink:href="#logo"></use>
              </svg>
            </a>

          </div>
          <div class="col-10">
            <ul class="menu-header">

             <router-link to="/" tag="li" class="menu-header__item">about</router-link>
<!--                <li class="menu-header__item"> <a class="menu-header__link" href="">about </a></li>-->

              <router-link to="#down-contact" tag="li" class="menu-header__item">contact</router-link>
<!--                <li class="menu-header__item"><a class="menu-header__link" href="#down-contact">contact</a></li>-->

              <router-link to="/portfolio" tag="li" class="menu-header__item">portfolio</router-link>
<!--                <li class="menu-header__item"><a class="menu-header__link" href="">portfolio</a></li>-->

              <router-link to="/blog" tag="li" class="menu-header__item">blog</router-link>
<!--                <li class="menu-header__item"><a class="menu-header__link" href="">blog </a></li>-->

                <li class="menu-header__item"><a class="menu-header__link" href="">wordpress theme</a></li>

            </ul>
          </div>
        </div>
      </div>
    </nav>

</template>

<script>

    export default {

        data() {
            return {
                scrollPosition: null
            }
        },
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        },
    }
</script>
