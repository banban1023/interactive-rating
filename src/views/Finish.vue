<template>
  <div class="finish">
    <header>
      <img src="@/assets/illustration-thank-you.svg" alt="Thank you illustration" role="presentation">
    </header>
    <!-- Thank you state start -->
    <p><mark>You selected {{score}} out of 5</mark></p>
    <section aria-labelledby="thank-title thankyou-desc">
      <h2 id="thank-title">Thank you!</h2>
      <p id="thankyou-desc">
        We appreciate you taking the time to give a rating.
        lf you ever need more support, don't hesitate to get in touch!.
      </p>
    </section>
    <!-- Thank you state end -->
  </div>
</template>

<script>
export default {
  name: 'FinishIndex',
  computed: {
    score () {
      return this.$route.query.score
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/finish.less';
</style>
