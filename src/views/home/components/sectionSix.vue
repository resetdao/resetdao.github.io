<template>
  <section class="sectionSix-warrper">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h2 class="text-primary text-title">{{ $t("sectionSix.title") }}</h2>
        </div>
      </div>
      <div class="row d-md-flex mt-4 text-center">
        <div class="col-md-3 mt-2 list" v-for="item in list" :key="item.id">
          <img :src="item.img" class="list-img" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "sectionSix",
  data() {
    return {
      list: []
    };
  },
  methods: {
    getList() {
      const imgs = require.context("@/assets/partners", true, /\.png$/);
      imgs.keys().forEach((key, index) => {
        let item = {
          id: index,
          img: require("@/assets/partners" + key.substr(1))
        };
        this.list.push(item);
      });
      console.log(this.list);
    }
  },
  created() {
    this.getList();
  }
};
</script>
<style lang="scss">
.sectionSix-warrper {
  padding: 5rem 0 5rem 0;
  .text-title {
    font-size: 2rem;
    font-weight: bold;
    color: #fb203b !important;
    padding-bottom: 2rem;
  }
  .text-muted {
    text-align: left;
    padding-bottom: 1rem;
  }
  .list {
    @media screen and (max-width: 768px) {
      width: 50%;
    }
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
