<template>
  <section class="sectionFive-warrper bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto text-center">
          <h2 class="text-primary text-title">{{ $t("sectionFive.title") }}</h2>
          <p class="text-muted lead" v-for="item in list" :key="item.id">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "sectionFive",
  computed: {
    list: {
      get() {
        return this.$t("sectionFive.list");
      }
    }
  }
};
</script>

<style lang="scss">
.sectionFive-warrper {
  padding: 5rem 0 5rem 0;
  .text-title {
    font-size: 2rem;
    font-weight: bold;
    color: #fb203b !important;
    padding-bottom: 2rem;
  }
  .text-muted {
    padding-bottom: 1rem;
    color: #000000 !important;
  }
}
</style>
