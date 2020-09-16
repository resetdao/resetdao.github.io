<!--
 * @Author: codercao
 * @Date: 2020-09-01 21:53:49
 * @LastEditors: codercao
 * @LastEditTime: 2020-09-16 20:53:38
 * @Description: 
 * @FilePath: \vue-win10-admine:\2020\resetdao.github.io\src\views\home\components\sectionThree.vue
-->
<template>
  <section class="sectionThree-warrper bg-light" id="projects">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h2 class="text-primary text-title">
            {{ $t("sectionThree.title") }}
          </h2>
          <p class="text-muted lead">{{ $t("sectionThree.text") }}</p>
        </div>
      </div>
      <div class="row d-md-flex mt-4 text-center">
        <div class="col-md-3 mt-2" v-for="item in list" :key="item.id">
          <div class="card card-warrper">
            <div class="card-body">
              <h2 class="card-title">{{ item.title }}</h2>
              <img :src="item.img" />
              <p class="card-text">{{ item.text }}</p>
              <!-- <div class="card-more">
                <a>{{ $t("sectionThree.btn1") }}</a
                ><a>{{ $t("sectionThree.btn2") }}</a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "sectionTwo",
  data() {
    return {
      sectionTwo: {
        title: "Mission & Values"
      }
    };
  },
  computed: {
    list: {
      get() {
        return this.$t("sectionThree.list");
      }
    }
  }
};
</script>
<style lang="scss">
.sectionThree-warrper {
  padding: 5rem 0 5rem 0;
  .text-title {
    font-size: 2rem;
    font-weight: bold;
    color: #fb203b !important;
    padding-bottom: 1rem;
  }
  .text-muted {
    font-size: 1rem;
    text-align: center;
    padding-bottom: 2rem;
  }
  .card-warrper {
    background: none !important;
    border: none;
    text-align: center;
    .card-title {
      font-size: 1.5rem;
      color: #000;
    }
    img {
      // display: block;
      // background-color: #e31d33;
      // height: 148px;
      // width: 100%;
      // background-image: url("../../../assets/nash_jpg.jpg");
      background-size: cover;
      background-position: center;
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
