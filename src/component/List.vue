<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12 footer">

          <div class="footer__soc">
            <a href="" class="footer__soc-item">
              <img class="footer__svg" :src="require('../src/img/twitter.svg')" alt="">
            </a>

            <a href="" class="footer__soc-item">
              <img class="footer__svg" :src="require('../src/img/facebook.svg')" alt="">
            </a>

            <a href="" class="footer__soc-item">
              <img class="footer__svg" :src="require('../src/img/dribble.svg')" alt="">
            </a>

            <a href="" class="footer__soc-item">
              <img class="footer__svg" :src="require('../src/img/instagram.svg')" alt="">
            </a>

          </div>

          <div class="footer__lead">2016-2017 © Design by Unvab. Code by nK</div>

        </div>
      </div>
    </div>
  </footer>

</template>


<script>
    export default {
        name: 'list'
    }
</script>
