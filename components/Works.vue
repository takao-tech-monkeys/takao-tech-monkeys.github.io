<template>
<section id="works">
    <div class="container marketing">
        <template v-for="(book, index) in books">
            <hr class="featurette-divider" :key="book.name">
            <div class="row featurette" :key="book.name">
                <div :class="['col-md-7', index%2==0 ? 'order-md-2' : '']">
                    <h2 class="featurette-heading">{{ book.name }}</h2>
                    <p class="lead">
                        <span v-for="text in book.description" :key="text">{{ text }}</span>
                    </p>
                    <p>
                        <a v-for="link in book.links" :key="link.url" :class="['btn', 'btn-' + link.button_type ]" :href="link.url" role="button">{{ link.display }}</a>
                    </p>
                </div>
                <div :class="['col-md-5',index%2==0 ? 'order-md-1' : '']">
                    <img class="featurette-image img-fluid mx-auto" :src="book.thumbnail" alt="Generic placeholder image">
                </div>
            </div>
        </template>
        <hr class="featurette-divider">
  </div>
</section>
</template>

<script>

export default {
    props: ["books"]
};
</script>

<style lang="scss">
.btn{
    margin-right: 1em;
}

</style>
