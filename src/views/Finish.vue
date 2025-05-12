<template>
  <div class="finish">
    <img src="@/assets/illustration-thank-you.svg" alt="" role="presentation">
    <!-- Thank you state start -->
    <p><mark>You selected 4 out of 5</mark></p>
    <section aria-labelledby="thank-title">
      <h2 id="thank-title">Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating.
        lf you ever need more support, don't hesitate to get in touch!.
      </p>
    </section>
    <!-- Thank you state end -->
  </div>
</template>

<script>
export default {
  name: 'FinishIndex'
}
</script>

<style lang="less" scoped>
@import '@/styles/finish.less';
</style>
