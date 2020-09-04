<!--
 * @Author: codercao
 * @Date: 2020-09-01 21:53:49
 * @LastEditors: codercao
 * @LastEditTime: 2020-09-03 22:45:34
 * @Description: 
 * @FilePath: \vue-win10-admine:\2020\reset-dao-web\src\views\home\index.vue
-->
<template>
  <div class="home-wrapper">
    <navBar></navBar>
    <sectionOne></sectionOne>
    <sectionTwo></sectionTwo>
    <sectionThree></sectionThree>
    <sectionFour></sectionFour>
    <sectionFive></sectionFive>
    <sectionSix></sectionSix>
    <fooTer></fooTer>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import fooTer from "@/components/fooTer.vue";
import sectionOne from "./components/sectionOne.vue";
import sectionTwo from "./components/sectionTwo.vue";
import sectionThree from "./components/sectionThree.vue";
import sectionFour from "./components/sectionFour.vue";
import sectionFive from "./components/sectionFive.vue";
import sectionSix from "./components/sectionSix.vue";

export default {
  name: "Home",
  components: {
    navBar,
    fooTer,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
    sectionSix
  }
};
</script>
