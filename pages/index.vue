<template>
  <div class="modern">
    <Members :members=members />
    <Works :books=books />
  </div>
</template>

<script>
import Works from '~/components/Works.vue'
import Members from '~/components/Members.vue'

import books from '~/static/books.json'
import members from '~/static/members.json'

export default {
  data: function(){ return{ books, members } },
  components: { Works, Members }
}
</script>

<style>

</style>
