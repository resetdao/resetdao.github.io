<template>
  <div class="navbar-warpper">
    <nav
      class="navbar navbar-expand-md navbar-dark navbar-transparent fixed-top sticky-navigation"
      id="calay-navbar"
    >
      <a class="navbar-brand" href="index.html">
        <img src="@/assets/logo.png" />
      </a>
      <button
        @click="clickBtn"
        class="navbar-toggler navbar-toggler-right text-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="iconfont">&#xe600;</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="item in navList" :key="item.id">
            <a
              @click="changNav(item.id)"
              class="nav-link page-scroll"
              target="_blank"
              :class="{ active: item.id == isActive }"
              :href="item.ref"
              >{{ item.title }}</a
            >
          </li>
          <li class="nav-item lan-item">
            <a
              class="nav-link lan"
              :class="{ active: lanIsActive == 'EN' }"
              @click="changLen(2)"
              >EN</a
            >
            <a
              class="nav-link lan"
              :class="{ active: lanIsActive == 'CN' }"
              @click="changLen(1)"
              >CN</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  name: "navbar",
  data() {
    return {
      isActive: "home",
      isclick: false,
      lanIsActive: "EN"
    };
  },
  computed: {
    getlang: {
      get() {
        return this.$store.state.language;
      }
    },
    navList: {
      get() {
        return this.$t("navBar.list");
      }
    }
  },
  watch: {
    getlang(val) {
      console.log(val);
      if (val == "zh") {
        this.lanIsActive = "CN";
      } else {
        this.lanIsActive = "EN";
      }
    }
  },
  methods: {
    clickBtn() {
      if (this.isclick) {
        this.isclick = false;
        document.getElementById("navbarCollapse").style.display = "none";
      } else {
        this.isclick = true;
        document.getElementById("navbarCollapse").style.display = "block";
      }
    },
    changNav(id) {
      this.isActive = id;
      this.isclick = true;
      this.clickBtn();
    },
    changLen(val) {
      if (val === 1) {
        this.lanIsActive = "CN";
        this.$i18n.locale = "zh";
        this.$store.dispatch("setLanguage", "zh");
      } else {
        this.lanIsActive = "EN";
        this.$i18n.locale = "en";
        this.$store.dispatch("setLanguage", "en");
      }
      if (document.documentElement.clientWidth < 768) {
        this.isclick = true;
        this.clickBtn();
      }
    }
  },
  created() {
    const chooseLanguage = Cookies.get("language");
    if (chooseLanguage == "zh") {
      this.lanIsActive = "CN";
      this.$store.dispatch("setLanguage", "zh");
    } else {
      this.lanIsActive = "EN";
      this.$store.dispatch("setLanguage", "en");
    }
    let that = this;
    window.onscroll = function() {
      if (document.documentElement.scrollTop > 100) {
        document.getElementById("calay-navbar").style.background =
          "rgb(521, 32, 59, 1)";
      } else {
        document.getElementById("calay-navbar").style.background =
          "rgb(521, 32, 59, 0.8)";
      }
      let display = document.getElementById("navbarCollapse").style.display;
      if (document.documentElement.clientWidth < 768 && display == "block") {
        that.isclick = true;
        that.clickBtn();
      }
    };
  }
};
</script>
<style lang="scss">
.navbar-warpper {
  .navbar {
    height: 100px;
    transition: all 1s ease;
    background: rgb(521, 32, 59, 0.4);
    @media screen and (max-width: 768px) {
      .collapse {
        background-color: rgb(521, 32, 59, 0.8);
      }
      .lan-item {
        padding-left: 0px;
      }
    }
    .navbar-nav {
      li {
        padding: 8px;
        .nav-link {
          color: white;
          padding: 8px 22px 8px 22px;
          border-radius: 22px;
          font-size: 14px;

          &.active {
            background-color: #e31d33;
          }
          &:hover {
            background-color: #e31d33;
          }
        }
        &.lan-item {
          padding-left: 90px;
          @media screen and (max-width: 768px) {
            padding-left: 0px;
            margin: auto;
          }
          .lan {
            color: white;
            float: left;
            font-size: 14px;
            padding: 8px;
            border-radius: 0;
            margin-right: 5px;
            &.active {
              background-color: #e31d33;
            }
          }
        }
      }
    }
  }
}
</style>
