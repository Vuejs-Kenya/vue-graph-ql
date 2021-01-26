<template>
  <div class="footer">
    <div class="container padding-30">
      <div class="row row-center">
        <div class="col-sm-6 col-xs-12 footer-div">
          <h4>Contact</h4>
          <div class="footer-list-div text-center">
            <p>

            </p>
          </div>
          <div class="col-sm-6 col-xs-12 footer-div">
            <h4>Products</h4>
            <div class="footer-list-div">
              <p>
                <router-link :to="'/users'" class="navigation-link"
                >Users</router-link
                >
              </p>
              <p>
                <router-link :to="'/divisions'" class="navigation-link"
                >Divisions</router-link
                >
              </p>
              <p>
                <router-link :to="'/books'" class="navigation-link"
                >Books</router-link
                >
              </p>
              <p>
                <a href="ayimdomnic.dev/blog" target="_blank">
                  <span>Contact</span>
                </a>
              </p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from "vue-class-component";

@Component
export default class Footer extends Vue {

}
</script>

<style scoped>

</style>