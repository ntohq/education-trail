<template>
<div id="foot" class="section">
  <!-- Site footer -->
    <footer class="site-footer">
          <b-div class="col-md-8 col-sm-6 col-xs-12">
             <b-p class="copyright-text">
            </b-p>
          </b-div>
          <b-div class="col-md-4 col-sm-6 col-xs-12">
            <b-ul class="social-icons">
              <b-li><font-awesome-icon icon="fa-brands fa-instagram" /></b-li>
              <b-li><font-awesome-icon class="has-text-info ff-ff" :icon="['fab', 'instagram']" /></b-li>
              <b-li></b-li>   
            </b-ul>
          </b-div>
          <div id="app">
  <footer class="has-text-centered">
    <hr>
    <hr class='is-hidden-touch'>
    <div class="container">
      <div class="columns is-desktop has-text-left-touch">
        <b-collapse class="column" :open="isHidden" aria-id="contentIdForA11y3">
          <div slot="trigger" slot-scope="props" class="card-header is-hidden-desktop is-shadowless" role="button" aria-controls="fc1">
            <p class="card-header-title">
              Product 
            </p>
            <a class="card-header-icon">
              <b-icon
                  :icon="props.open ? 'menu-down' : 'menu-up'">
              </b-icon>
            </a>
          </div>
          <h1 class='is-hidden-touch'><strong>Product</strong></h1>
          <div class="card-content">
            <ul class="content">
              <li><a target="_blank" href="https://codepen.io/jettaz">Create Websites</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">Secure Cloud Hosting</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">Engage Your Audience</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">Website Support</a></li>
            </ul>
          </div>
        </b-collapse>

        <b-collapse class="column" :open="isHidden" aria-id="contentIdForA11y3">
          <div slot="trigger" slot-scope="props" class="card-header is-hidden-desktop is-shadowless" role="button" aria-controls="fc2">
            <p class="card-header-title">
              Company
            </p>
            <a class="card-header-icon is-hidden-desktop">
              <b-icon
                  :icon="props.open ? 'menu-down' : 'menu-up'">
              </b-icon>
            </a>
          </div>
          <h1 class='is-hidden-touch'><strong>Company</strong></h1>
          <div class="card-content">
            <ul class="content">
              <li><a target="_blank" href="https://codepen.io/jettaz">About</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">Careers</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">Support</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">Pricing</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">FAQ</a></li>
            </ul>
          </div>
        </b-collapse>
        <b-collapse class="column" :open="isHidden" aria-id="contentIdForA11y3">
          <div slot="trigger" slot-scope="props" class="card-header is-hidden-desktop is-shadowless" role="button" aria-controls="fc3">
            <p class="card-header-title">
              Resources
            </p>
            <a class="card-header-icon is-hidden-desktop">
              <b-icon
                  :icon="props.open ? 'menu-down' : 'menu-up'">
              </b-icon>
            </a>
          </div>
        </b-collapse>
        <b-collapse class="column" :open="isHidden" aria-id="contentIdForA11y3">
          <div slot="trigger" slot-scope="props" class="card-header is-hidden-desktop is-shadowless" role="button" aria-controls="fc4">
            <p class="card-header-title">
              Get Help
            </p>
            <a class="card-header-icon is-hidden-desktop">
              <b-icon
                  :icon="props.open ? 'menu-down' : 'menu-up'">
              </b-icon>
            </a>
          </div>
          <h1 class='is-hidden-touch'><strong>Get Help</strong></h1>
          <div class="card-content">
            <ul class="content">
              <li><a target="_blank" href="https://codepen.io/jettaz" >Help Center</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">Contact Us</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">Privacy Policy</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">Terms</a></li>
              <li><a target="_blank" href="https://codepen.io/jettaz">Login</a></li>
              <li><a target="_blank" href="#top">Top of the Page</a></li>
            </ul>
          </div>
        </b-collapse>
      </div>
    </div>
    <hr class='is-hidden-touch'>
    <br class='is-hidden-desktop'>
    <div class="title is-6">
       <b-p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <b-a href="#">NTOHQ</b-a>.
            </b-p>
    </div>
  </footer>
</div>
</footer>
<style lang="scss" scoped>
   footer{
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: inherit;
    display: block;
    background-color: #fff;
    padding: 3rem 1.5rem 6rem;
    color: #2d2d2a;
   }

   @media all and (max-width: 1023px) {
  .card-content {
    padding-top: 0;
    padding-bottom: 0;
  }
  .column {
    box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.02);
  }
}
   </style>
    </div>
</template>

<script>
export default {
    auth: false,
};



</script>