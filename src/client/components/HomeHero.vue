<template>
    <section class="hero is-large">
        <div class="hero-body has-text-white has-text-centered">
            <h1 class="title is-1 has-text-white home-hero-title" animate-shake-x animate-duration-5000>Education Trail</h1>
            <p>The path to keep track of your education grades</p>
        </div>
    </section>
</template>

<style lang="scss">
.hero, .hero-home-bg-img {
    background: url('@/assets/img/theherostrail.jpg')center center; background-size:cover; 
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


@media (min-width: calc(960px + (2 * 0.75rem))) {
    .home-hero-title {
        &:after {
        content: '';
        height: 1.5px;
        width: 0;
        background-color: #bd8f21;
        position: absolute;
        left: calc(50%);
        bottom: 10%;
        -webkit-transition: width 300ms linear;
        transition: width 300ms linear;
        }
        &:hover:after {
        width: calc(90% - 30%);
        left: 20%;
        }
    }
}

/* Turn off parallax scrolling for all tablets and phones. Increase/decrease the pixels if needed */
@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
}
</style>