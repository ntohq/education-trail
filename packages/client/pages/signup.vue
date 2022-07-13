<template>
  <div>
    <b-steps>
      <b-step-item
        style="display: block"
        class="fa-sm"
        label="Link Account"
        icon="link"
        :visible="true"
      >
        <div class="link-container">
          <b-button
            class="is-light fa-sm"
            icon-left="google"
            icon-pack="fab"
            rounded
          >
            Signup with Google
          </b-button>
          <b-button class="is-light fa-sm" icon-left="apple" icon-pack="fab" rounded>
            Signup with Apple
          </b-button>
        </div>
      </b-step-item>
      <b-step-item
        class="customization-container"
        size="is-small"
        label="Customize"
        icon="brush"
        pack="fas"
      >
        <div class="customization-form">
          <b-field label="Degree (defualt: other)">
            <b-select placeholder="Select a degree"></b-select>
          </b-field>
          <b-field label="GPA">
            <b-slider :max="4.0" :min="0.0" :step="0.1"></b-slider>
          </b-field>
          <b-field label="Credits Earned">
            <b-slider
              v-model="creditsEarned"
              :max="360"
              rounded
              @change="sliderChanged"
            ></b-slider>
          </b-field>
          <b-field label="Credits Required">
            <b-slider
              v-model="creditsRequired"
              :max="360"
              rounded
              @change="sliderChanged"
            ></b-slider>
          </b-field>
          <b-field :label="'Credits Left: ' + creditsLeft">
            <b-progress
              type="is-success"
              :rounded="true"
              :precision="0"
              :value="creditsEarned"
              :max="creditsRequired"
              show-value
              format="percent"
            ></b-progress>
          </b-field>
        </div>
      </b-step-item>
      <b-step-item size="is-small" label="Finalize" icon="check-circle">
        <div></div>
      </b-step-item>
    </b-steps>
  </div>
</template>

<script>
export default {
  layout: 'signupLayout',
  data() {
    return {
      creditsEarned: 0,
      creditsRequired: 120,
      creditsLeft: 120,
    }
  },
  head: {
    title: 'Signup - Education Path',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
  },
  methods: {
    sliderChanged() {
      if (this.creditsEarned <= this.creditsRequired) {
        this.creditsLeft = this.creditsRequired - this.creditsEarned
      } else {
        this.$buefy.toast.open({
          duration: 5000,
          message: `The credits earned can not be greater than the credits required!`,
          type: 'is-danger',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.b-steps {
  height: 100vh;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

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
  justify-content: space-around;
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
    @media (max-width: 769px) {
      max-width: 100%;
    }
  }
}
</style>
