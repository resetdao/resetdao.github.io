<template>
  <section class="sectionFour-warrper">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h2 class="text-primary text-title">{{ $t("sectionFour.title") }}</h2>
        </div>
      </div>
      <div class="row d-md-flex mt-4 text-center">
        <div class="col-md-4 mt-2" v-for="item in list" :key="item.id">
          <div class="card card-warrper">
            <div class="card-body">
              <h2 class="card-title">{{ item.title }}</h2>
              <p class="card-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "sectionFour",
  computed: {
    list: {
      get() {
        return this.$t("sectionFour.list");
      }
    }
  }
};
</script>
<style lang="scss">
.sectionFour-warrper {
  padding: 5rem 0 2rem 0;
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
  .card-warrper {
    background: none !important;
    border: none;
    text-align: left;
    .card-title {
      font-size: 1.5rem;
      color: #000;
    }
    img {
      display: block;
      background-color: #e31d33;
      height: 148px;
      width: 100%;
    }
    .card-text {
      font-size: 1rem;
      color: #555;
      padding: 1rem 0 0 0;
    }
    .card-more {
      a {
        color: #444;
        font-size: 1rem;
        line-height: 1.3rem;
        border-bottom: 1px solid #444;
        margin-right: 2rem;
        &:hover {
          color: #000;
          border-bottom: 1px solid #000;
        }
      }
    }
  }
}
</style>
