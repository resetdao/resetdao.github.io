<!--
 * @Author: codercao
 * @Date: 2020-09-01 21:53:49
 * @LastEditors: codercao
 * @LastEditTime: 2020-09-03 22:46:20
 * @Description: 
 * @FilePath: \vue-win10-admine:\2020\reset-dao-web\src\views\home\components\rogtoken.vue
-->
<template>
  <section class="rogtoken-warrper" id="community">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto text-center">
          <h2 class="text-primary text-title">{{ $t("rogtoken.title") }}</h2>
          <p class="text-muted lead">{{ $t("rogtoken.text") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "rogtoken"
};
</script>

<style lang="scss">
.rogtoken-warrper {
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
}
</style>
