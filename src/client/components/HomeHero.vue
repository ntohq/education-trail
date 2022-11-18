<template>
    <section class="hero is-large">
        <div class="hero-body has-text-white has-text-centered">
            <div>
                <h1 class="title is-1 has-text-white home-hero-title">Education Trail</h1>
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

            @media (min-width: calc(960px + (2 * 0.75rem))) {
    
                h1, p {
                    text-decoration: underline 0.15em rgba(255, 255, 255, 0);
                    transition: text-decoration-color 600ms;
                
                    &:hover {
                        text-decoration-color: rgb(150, 187, 202);
                        text-underline-offset: 0.4em;
                    }
                }
            }
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