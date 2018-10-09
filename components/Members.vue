<template>
<section class="MOD_PROMOBOX1" id="members">
  <div class="container marketing">
  <div class="row">
    <div v-for="member in members" :key="member.name" class="col-lg-4">
      <img class="rounded-circle" :src="member.thumbnail" alt="Generic placeholder image" width="140" height="140">
      <h3>{{ member.name }}</h3>
      <p>{{ member.description | list2sentense }}</p>
      <p><a class="btn btn-secondary" :href="member.link" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-lg-4">
      <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
      <h3>YOU!</h3>
      <p>サークル高尾技研は仲間を募集しています．あなたの同人デビューをする体制を作り，お待ちしています．</p>
      <p><a class="btn btn-secondary" href="https://twitter.com/takanakahiko" role="button">相談はこちら &raquo;</a></p>
    </div>
  </div>
  </div>
</section>
</template>

<script>

export default {
    props: ["members"],
    filters: {
        list2sentense(v){ return v.join("<br/>") }
    }
};
</script>

<style lang="scss">


</style>
