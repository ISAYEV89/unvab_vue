<template>
  <div>

    <nav class="nav-fixed" :class="{'scroll-menu': scrollPosition > 100, '': scrollPosition < 100}">
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

    <header>

      <div class="header-bg">
        <div class="header-bg__image"></div>
      </div>

      <h2 class="text-uppercase h4-title h4-title--mb">new branding agency</h2>
      <h1 class="h1-title h1-title--mb">We are about to change the way
        <span class="d-block"> you publish on the web</span>
      </h1>
      <div>
        <a href="#" class="fd-link fd-link--mb">
          <button class="fd-btn">Free Download</button>
        </a>
      </div>
      <div class="d-flex justify-content-center">
        <a href="#down-about" class="scroll-down">
          <svg class="down">
            <use xlink:href="#down"></use>
          </svg>
        </a>
      </div>

    </header>

    <div class="container">

      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="about" id="down-about">

            <h2 class="h2-title h2-title--mb">About Our Agency</h2>
            <p class="p-lead p-lead--mb"> We are a new design studio based in USA. We have over 20 years of combined
              experience, and know a thing
              or
              two about designing websites and mobile apps. Clever use of technology and lean processes enable us to
              work
              faster and smarter.</p>

            <img :src="require('../../src/img/signature.png')" alt="">

          </div>
        </div>
      </div>

    </div>

    <div class="box">
      <div class="container">
        <div class="row">

          <div class="col-md-3">
            <div class="box-item">
              <div class="box-item__icon">
                <img class="box-item__svg" :src="require('../../src/img/briefcase-solid.svg')" alt="">
              </div>
              <div class="box-item__content">
                <span class="d-block">548</span>
                <span class="d-block">PROJECTS COMPLETED</span>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="box-item">
              <div class="box-item__icon">
                <img class="box-item__svg" :src="require('../../src/img/briefcase-solid.svg')" alt="">
              </div>
              <div class="box-item__content">
                <span class="d-block">548</span>
                <span class="d-block">PROJECTS COMPLETED</span>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="box-item">
              <div class="box-item__icon">
                <img class="box-item__svg" :src="require('../../src/img/briefcase-solid.svg')" alt="">
              </div>
              <div class="box-item__content">
                <span class="d-block">548</span>
                <span class="d-block">PROJECTS COMPLETED</span>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="box-item">
              <div class="box-item__icon">
                <img class="box-item__svg" :src="require('../../src/img/briefcase-solid.svg')" alt="">
              </div>
              <div class="box-item__content">
                <span class="d-block">548</span>
                <span class="d-block">PROJECTS COMPLETED</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

    <div class="project">
      <div class="container">
        <div class="row">
          <div class="col-12"><h2 class="h2-title h2-title--mb"> Best Projects </h2></div>
          <div class="col-lg-8 offset-lg-2">
            <p class="p-lead p-lead--mb-xs">
              Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum
              gravida volutpat ipsum non ultrices.</p>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <a href="" class="project-item__link project-item">
              <img class="project-item__img" :src="require('../../src/img/portfolio-4-sm.jpg')" alt="">

              <div class="project-item__hover">

                <span class="project-item__span-top"> Vinyl Record</span>
                <span class="project-item__span-bottom"> MOCkUP </span>

              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <a href="" class="project-item__link project-item">
              <img class="project-item__img" :src="require('../../src/img/portfolio-5-sm.jpg')" alt="">

              <div class="project-item__hover">

                <span class="project-item__span-top"> Vinyl Record</span>
                <span class="project-item__span-bottom"> MOCkUP </span>

              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <a href="" class="project-item__link project-item">
              <img class="project-item__img" :src="require('../../src/img/portfolio-7-sm.jpg')" alt="">

              <div class="project-item__hover">

                <span class="project-item__span-top"> Vinyl Record</span>
                <span class="project-item__span-bottom"> MOCkUP </span>

              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <a href="" class="project-item__link project-item">
              <img class="project-item__img" :src="require('../../src/img/portfolio-9-sm.jpg')" alt="">

              <div class="project-item__hover">

                <span class="project-item__span-top"> Vinyl Record</span>
                <span class="project-item__span-bottom"> MOCkUP </span>

              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <a href="" class="project-item__link project-item">
              <img class="project-item__img" :src="require('../../src/img/portfolio-7-sm.jpg')" alt="">

              <div class="project-item__hover">

                <span class="project-item__span-top"> Vinyl Record</span>
                <span class="project-item__span-bottom"> MOCkUP </span>

              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <a href="" class="project-item__link project-item">
              <img class="project-item__img" :src="require('../../src/img/portfolio-4-sm.jpg')" alt="">

              <div class="project-item__hover">

                <span class="project-item__span-top"> Vinyl Record</span>
                <span class="project-item__span-bottom"> MOCkUP </span>

              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <a href="" class="project-item__link project-item">
              <img class="project-item__img" :src="require('../../src/img/portfolio-5-sm.jpg')" alt="">

              <div class="project-item__hover">

                <span class="project-item__span-top"> Vinyl Record</span>
                <span class="project-item__span-bottom"> MOCkUP </span>

              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <a href="" class="project-item__link project-item">
              <img class="project-item__img" :src="require('../../src/img/portfolio-7-sm.jpg')" alt="">

              <div class="project-item__hover">

                <span class="project-item__span-top"> Vinyl Record</span>
                <span class="project-item__span-bottom"> MOCkUP </span>

              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <a href="" class="project-item__link project-item">
              <img class="project-item__img" :src="require('../../src/img/portfolio-9-sm.jpg')" alt="">

              <div class="project-item__hover">

                <span class="project-item__span-top"> Vinyl Record</span>
                <span class="project-item__span-bottom"> MOCkUP </span>

              </div>
            </a>
          </div>

        </div>
      </div>
    </div>

    <div class="review">

      <carousel :loop="true" :nav="false" :items="1">

        <div class="review__item col-8 offset-2">
          <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first
            project and am looking forward to start the next one asap.</p>
          <span>Michael Hopkins</span>
        </div>
        <div class="review__item col-8 offset-2">
          <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first
            project and am looking forward to start the next one asap.</p>
          <span>Michael Hopkins</span>
        </div>
        <div class="review__item col-8 offset-2">
          <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first
            project and am looking forward to start the next one asap.</p>
          <span>Michael Hopkins</span>
        </div>

      </carousel>
    </div>

    <div class="partner">
      <div class="container">

        <carousel :dots="false" :loop="true" :nav="false" :items="5">

          <img src="../../src/img/partner-logo-1-dark.png" alt="">
          <img src="../../src/img/partner-logo-2-dark.png" alt="">
          <img src="../../src/img/partner-logo-3-dark.png" alt="">
          <img src="../../src/img/partner-logo-4-dark.png" alt="">
          <img src="../../src/img/partner-logo-5-dark.png" alt="">
          <img src="../../src/img/partner-logo-6-dark.png" alt="">
          <img src="../../src/img/partner-logo-7-dark.png" alt="">
          <img src="../../src/img/partner-logo-8-dark.png" alt="">

        </carousel>

      </div>
    </div>

    <div class="blog">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="col-lg-8 offset-lg-2">
              <h2 class="blog__title">Latest Blog</h2>

              <p class="blog__lead">Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque
                faucibus. Vestibulum
                gravida
                volutpat ipsum non ultrices.</p>
            </div>
          </div>

          <div class="col-12">
            <carousel :loop="true" :nav="false" :items="3" :margin="15">

              <div class="blog-item">

                <a href="" class="blog-item__img">
                  <img :src="require('../../src/img/post-1-mid.jpg')" alt="">
                  <span class="blog-item__category">Nature</span>
                </a>
                <div class="blog-item__content">
                  <a href="" class="blog-item__content-link">Why you should Always First</a>
                  <span class="blog-item__content-date">August 14, 2016</span>
                  <p class="blog-item__content-lead">Be forth, god for rule face abundantly all our two winged made. Is
                    whose morning female.</p>
                </div>
              </div>

              <div class="blog-item">

                <a href="" class="blog-item__img">
                  <img :src="require('../../src/img/post-4-mid.jpg')" alt="">
                  <span class="blog-item__category">Design</span>
                </a>
                <div class="blog-item__content">
                  <a href="" class="blog-item__content-link">Ten things about Photography</a>
                  <span class="blog-item__content-date">August 14, 2016</span>
                  <p class="blog-item__content-lead">Be forth, god for rule face abundantly all our two winged made. Is
                    whose morning female. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum dolorum
                    mollitia quaerat tempore voluptatum?</p>
                </div>
              </div>

              <div class="blog-item">

                <a href="" class="blog-item__img">
                  <img :src="require('../../src/img/post-3-mid.jpg')" alt="">
                  <span class="blog-item__category">BRANDINg</span>
                </a>
                <div class="blog-item__content">
                  <a href="" class="blog-item__content-link">Ten things about Photography</a>
                  <span class="blog-item__content-date">August 14, 2016</span>
                  <p class="blog-item__content-lead">Be forth, god for rule face abundantly all our two winged made. Is
                    whose morning female.</p>
                </div>
              </div>

              <div class="blog-item">

                <a href="" class="blog-item__img">
                  <img :src="require('../../src/img/post-4-mid.jpg')" alt="">
                  <span class="blog-item__category">Nature</span>
                </a>
                <div class="blog-item__content">
                  <a href="" class="blog-item__content-link">Ten things about Photography</a>
                  <span class="blog-item__content-date">August 14, 2016</span>
                  <p class="blog-item__content-lead">Be forth, god for rule face abundantly all our two winged made. Is
                    whose morning female.</p>
                </div>
              </div>

              <div class="blog-item">

                <a href="" class="blog-item__img">
                  <img :src="require('../../src/img/post-3-mid.jpg')" alt="">
                  <span class="blog-item__category">Nature</span>
                </a>
                <div class="blog-item__content">
                  <a href="" class="blog-item__content-link">Ten things about Photography</a>
                  <span class="blog-item__content-date">August 14, 2016</span>
                  <p class="blog-item__content-lead">Be forth, god for rule face abundantly all our two winged made. Is
                    whose morning female.</p>
                </div>
              </div>

            </carousel>
          </div>
        </div>
      </div>
    </div>

    <my-contact></my-contact>


  </div>
</template>

<script>

    import carousel from 'vue-owl-carousel';

    export default {
        data() {
            return {
                scrollPosition: null,
            }
        },
        components: {
            carousel
        },
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        }
    }

</script>
