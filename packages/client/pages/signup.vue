<template>
    <div>
        <b-steps>
            <b-step-item style="display:block;" label="Link Account" icon="link" visible>
                <div class="link-container">
                    <b-button class="is-light" size="is-medium" icon-left="google" icon-pack="fab" rounded>
                        Signup with Google
                    </b-button>
                    <b-button class="is-light" size="is-medium" icon-left="apple" icon-pack="fab" rounded>
                        Signup with Apple
                    </b-button>
                </div>
            </b-step-item>
            <b-step-item class="customization-container" label="Customize" icon="paint-brush" icon-size="is-small">
                <div class="customization-form">
                    <b-field label="Degree (defualt: other)">
                        <b-select placeholder="Select a degree"></b-select>
                    </b-field>
                    <b-field label="GPA">
                        <b-input type="number" pattern="^[1-9]\d*(\.\d+)?$" max="4.0" min="0.0" step=".1" placeholder="4.0"></b-input>
                    </b-field>
                    <b-field label="Credits Earned">
                        <b-slider :max="360" rounded></b-slider>
                    </b-field>
                    <b-field label="Credits Required">
                        <b-slider :max="360" rounded></b-slider>
                    </b-field>
                </div>
            </b-step-item>
            <b-step-item label="Finalize" icon="circle-check">
                <div>

                </div>
            </b-step-item>
        </b-steps>
    </div>
</template>

<script>
export default {
    layout: "signupLayout"
}
</script>

<style lang="scss" scoped>
.b-steps {
    height: 100vh;
    padding-top: 10%;
    display: flex;
    flex-direction: column;

    ::v-deep nav {
        flex: 1;
    }

    ::v-deep section {
        flex: 2;
        padding: 10%;
    }

}

// See https://vue-loader.vuejs.org/guide/scoped-css.html#child-component-root-elements

.link-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 10%;

    ::v-deep .b-button {
        margin: auto;
        border: solid black 2px !important;
    }
}

.customization-container {
    ::v-deep .customization-form {
        max-width: 75%;
        margin: auto;
    }

    ::v-deep .field {
        max-width: 50%;
    }
}
</style>