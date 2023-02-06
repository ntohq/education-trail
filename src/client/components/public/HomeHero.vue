<template>
    <section class="hero is-large">
        <div class="hero-body has-text-white has-text-centered">
            <div>
                <h1 class="title is-1 has-text-white home-hero-title">Education Trail</h1>
                <hr>
                <p>The path to keep track of your education grades</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero {
    background: url('@/assets/img/theherostrail.jpg')center center; background-size:cover; 
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: calc(960px + (2 * 0.75rem))) {
        background-attachment: inherit;
    }

    .hero-body {
        display: flex;

        div {
            margin: auto;
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