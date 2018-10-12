<template>
  <div class="modern">
    <NavBar />
    <Header />
    <Members :members=members />
    <Works :books=books />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Header from '~/components/Header.vue'
import Works from '~/components/Works.vue'
import Members from '~/components/Members.vue'
import Footer from '~/components/Footer.vue'

import books from '~/static/books.json'
import members from '~/static/members.json'

export default {
  data: function(){ return{ books, members } },
  components: { NavBar, Header, Works, Members, Footer }
}
</script>

<style>

</style>
