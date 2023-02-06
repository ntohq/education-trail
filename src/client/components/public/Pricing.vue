<template>
    <section class="section">
        <div class="pricing-container">
            <div class="pricing-child box">
                <div class="icon-container">
                    <OIcon icon="coffee" size="large" />
                </div>
                <h5 class="title is-5 m-2">Free Tier</h5>
                <div>
                    <ul style="margin: auto;">
                        <li>Free access to the education trail tools with ADS</li>
                        <li>Almost all Anylitical Features</li>
                        <li>Minimal Features</li>
                    </ul>
                </div>
            </div>
            <div class="pricing-child box">
                <div class="icon-container">
                    <OIcon icon="bookshelf" size="large" />
                </div>
                <h5 class="title is-5 m-2">Novice Tier</h5>
                <div>
                    <ul style="margin: auto;">
                        <li>Everything from the free tier without ADS</li>
                        <li>Acces to our discord server</li>
                        <li>Acces to our community forms</li>
                    </ul>
                </div>
            </div>
            <div class="pricing-child box">
                <div class="icon-container">
                    <OIcon icon="professional-hexagon is-rounded" size="large" />
                </div>
                <h5 class="title is-5 m-2">Pro Tier</h5>
                <ul>
                    <li>Everything from Tier 1</li>
                    <li>Advance Analytics</li>
                    <li>Acces to email support</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        margin: 3rem 3rem;
        .pricing-container {
            display: grid;
            grid-template-rows: minmax(0, 1fr);
            grid-auto-rows: minmax(0, 1fr);
            margin: auto;
            gap: 10%;
            @media (min-width: calc(960px + (2 * 0.75rem))) {
                grid-template-columns: repeat(3, 1fr);
            }

            div.pricing-child {
                margin: auto;
                text-align: center;
                padding: 2.5rem 0 2.5rem 0;
                width: 100%;
                .icon-container {
                    border: black solid 2px;
                    padding: 10px;
                    width: fit-content;
                    margin: auto;
                    border-radius: 20%;
                }

                ul {
                    list-style: disc inside;
                    margin: auto;
                    text-align: left;
                }
            }
        }
    }
</style>