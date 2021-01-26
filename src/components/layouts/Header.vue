<template>
  <b-navbar
      class="background-ocean shadow-box"
      toggleable="lg"
      type="dark"
      fixed="top"
  >
    <div class="container">
      <b-navbar-toggle target="nav_collapse" />
      <b-navbar-brand tag="route-link" :to="'/'">Hi-Cord</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item>
            <router-link tag="li" activeClass="active" :to="'/books'"
            >Feed</router-link
            >
          </b-nav-item>
          <b-nav-item>
            <router-link tag="li" activeClass="active" :to="'/divisions'"
            >Add New</router-link
            >
          </b-nav-item>
          <b-nav-item>
            <router-link tag="li" activeClass="active" :to="'/users'"
            >Authors</router-link
            >
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <div class="form-inline">
              <b-form-input
                  size="md"
                  class="mr-sm-2"
                  type="text"
                  placeholder="Search"
              ></b-form-input>
              <button size="md" class="btn-gray" type="button">Search</button>
            </div>
          </b-nav-form>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item @click="changeLanguage('en')"
            >English</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="header-navigation-link" right>
            <template slot="button-content">
              <em>Options</em>
            </template>
            <b-dropdown-item v-show="this.isLogin">
              <router-link tag="li" activeClass="active" :to="'/profile'"
              >Profile</router-link
              >
            </b-dropdown-item>
            <b-dropdown-item v-show="!this.isLogin">
              <router-link tag="li" activeClass="active" :to="'/login'"
              >Log-In</router-link
              >
            </b-dropdown-item>
            <b-dropdown-item v-show="!this.isLogin">
              <router-link tag="li" activeClass="active" :to="'/signin'"
              >Sign-In</router-link
              >
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>

</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component
export default class Header extends Vue {
  isLogin = false;
  afterCreated() {
    this.getCurrentUser()
  }

  changeLanguage(locale: string) {
    this.$i18n.locale = locale
  }

  getCurrentUser() {
    return true
  }
}
</script>

<style scoped>

</style>