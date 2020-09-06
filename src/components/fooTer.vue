<template>
  <footer class="fooTer-warpper bg-dark text-white">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h3 class="text-white">{{ $t("fooTer.title") }}</h3>
          <div class="divider divider-sm bg-white mt-3"></div>
          <p class="mt-4 lead">
            {{ $t("fooTer.text") }}
          </p>
          <ul class="list-inline social social-sm social-rounded mt-4">
            <li class="list-inline-item">
              <a href="https://github.com/resetdao" target="_blank"
                ><i class="iconfont">&#xe677;</i></a
              >
            </li>
            <li class="list-inline-item">
              <a href="https://twitter.com/resetdao" target="_blank"
                ><i class="iconfont">&#xe60a;</i></a
              >
            </li>
            <li class="list-inline-item">
              <a href="https://discord.com/invite/xW9rAR" target="_blank"
                ><i class="iconfont">&#xe675;</i></a
              >
            </li>
            <li class="list-inline-item" @click="isActive = !isActive">
              <a><i class="iconfont">&#xe62e;</i></a>
            </li>
          </ul>
          <img class="img-box" v-show="isActive" src="@/assets/weichat.png" />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 text-muted text-center"></div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "fooTer",
  data() {
    return {
      isActive: false
    };
  },
  methods: {}
};
</script>
<style lang="scss">
.fooTer-warpper {
  padding: 5rem 0 5rem 0;
  .img-box {
    width: 165px;
    height: 165px;
  }
}
</style>
