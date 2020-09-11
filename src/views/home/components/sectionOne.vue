<template>
  <section class="sectionOne-warrper" id="home">
    <div class="container">
      <div class="row vh-md-100">
        <div class="col-md-8 mx-auto my-auto text-white text-center">
          <h1 class="text-white mt-4 mt-md-6 text-h1">
            {{ $t("sectionOne.title") }}
          </h1>
          <p
            class="h5 text-white mb-5  font-weight-bold text-p"
            v-show="textShow"
          >
            <span class="tagline-skill">
              <span class="tagline-skill_inner">
                {{ $t("sectionOne.textp1") }}
              </span>
            </span>
          </p>
          <p
            class="h5 text-white mb-5  font-weight-bold text-p"
            v-show="!textShow"
          >
            <span class="tagline-skill">
              <span class="tagline-skill_inner">
                {{ $t("sectionOne.textp2") }}
              </span>
            </span>
          </p>
          <!--<a
            href="/"
            class="d-inline-flex flex-row align-items-center page-scroll mb-3 mb-md-0 btn-new"
          >
            <span class="iconfont">&#xe613; {{ $t("sectionOne.btn1") }}</span>
          </a>
          <a
            href="/"
            class=" ml-2 d-inline-flex flex-row align-items-center btn-new"
          >
            <span class="iconfont"> &#xe65a; {{ $t("sectionOne.btn2") }}</span>
          </a>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      isActive: "gov",
      lanIsActive: "EN",
      textShow: true,
      navList: [
        { id: "gov", title: " GOV", ref: "" },
        { id: "projects", title: "PROJECTS", ref: "" },
        { id: "community", title: "COMMUNITY", ref: "" },
        { id: "Web3", title: "(Connect Web3)", ref: "" }
      ]
    };
  },
  created() {
    setInterval(() => {
      this.textShow = !this.textShow;
    }, 4000);
  }
};
</script>

<style lang="scss">
.sectionOne-warrper {
  width: 100%;
  overflow: hidden;
  background-color: #fb203b;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bbbbbb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  .container {
    z-index: 2;
    position: relative;
    .text-center {
      background-color: rgba(255, 32, 59, 0.2);
    }
    .text-h1 {
      font-size: 5rem;
      font-weight: bold;
    }
    .text-p {
      font-size: 2rem;
      height: 2rem;
      line-height: 2rem;
      display: inline-block;
      overflow: hidden;
      .tagline-skill {
        -webkit-animation: animatetotop 6s steps(3) infinite;
        animation: animatetotop 6s steps(3) infinite;

        .tagline-skill_inner {
          position: relative;
          &:after {
            content: "";
            position: absolute;
            top: -1px;
            right: 0;
            bottom: -2px;
            left: 0;
            background-color: #fb203b;
            border-left: 1px solid #fff;
            -webkit-animation: animatetoright 2s steps(20) infinite alternate;
            animation: animatetoright 2s steps(20) infinite alternate;
          }
        }
      }
    }

    @keyframes animatetoright {
      0% {
        left: 0;
        margin-right: auto;
      }
      100% {
        left: 100%;
        margin-left: 0.6em;
        margin-right: 0em;
      }
    }
    @keyframes animatetotop {
      0% {
        top: 0;
      }
      100% {
        top: 5rem;
      }
    }
    @media (min-width: 768px) {
      .vh-md-100 {
        height: 100vh;
      }
    }
    @media screen and (max-width: 768px) {
      margin-top: 100px;
      .text-h1 {
        font-size: 2.5rem;
      }
      .text-p {
        font-size: 1rem;
      }
    }
    .btn-new {
      padding: 5px 20px 5px 20px;
      width: 10rem;
      text-align: center;
      border: 1px solid #ffffff;
      border-radius: 20px;
      color: #ffffff;
      font-weight: bold;
      span {
        margin: auto;
      }
      &:hover {
        background-color: #ffffff;
        color: #000000;
      }
    }
  }
}
</style>
