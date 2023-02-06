<template>
  <div class="countdown-countainer">
    <div class="days">
      <h5></h5>
    </div>
    <div class="hours">
      <h5></h5>
    </div>
    <div class="minuets">
      <h5></h5>
    </div>
    <div class="seconds">
      <h5></h5>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  data() {
    return {
        releaseDate: '02/11/2023 09:28:00 GMT-0600'
    }
  }
}
</script>

<style lang="scss" scoped></style>
