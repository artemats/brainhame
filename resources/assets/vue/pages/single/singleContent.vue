<template>
  <div class="section single-post-content">
    <div class="section-inner">
      <div class="row">
        <div class="col-xl-9">
          <div v-html="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "singleContent",
    data() {
      return {
        content: '',
      }
    },
    mounted() {
      let page_id = this.currentPage;

      this.getContent(page_id);
    },
    computed: {
      currentPage() {
        return this.$store.state.viewData.current_page;
      },
    },
    methods: {
      getContent(page_id) {
        let data = {
          action: 'getContent',
          postId: page_id,
        };

        this.$store.dispatch('send', data).then(res => {
          if (res.data.success) {
            this.content = res.data.data.content;
          }
        });
      },
    },
  }
</script>

<style scoped>

</style>
