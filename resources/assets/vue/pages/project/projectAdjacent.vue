<template>
  <section class="single-project-adjacent" v-if="adjacentPost">
    <a :href="adjacentPost.link" class="just-link section hover-block">
      <div class="section-inner justify-left">
        <div class="row justify-content-end">
          <div class="col-xl-10 adjacent-inner">
            <div class="block-title section-title">{{ title }}</div>
            <div class="adjacent-title">{{ adjacentPost.title }}</div>

            <div class="divider"></div>
          </div>
        </div>
      </div>
    </a>
  </section>
</template>

<script>
  export default {
    name: "projectAdjacent",
    data() {
      return {
        title: '',
      };
    },
    computed: {
      adjacent_posts() {
        return this.$store.state.viewData.adjacent_posts;
      },
      adjacentPost() {
        if (this.adjacent_posts.next) {
          this.title = 'Next project';

          return this.adjacent_posts.next;
        } else if (this.adjacent_posts.prev) {
          this.title = 'Prev project';

          return this.adjacent_posts.prev;
        }

        return false;
      },
    },
    methods: {
    },
  }
</script>

<style scoped>

</style>
