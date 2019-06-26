<template lang="pug">
  nav.navbar(role="navigation", aria-label="main navigation")
    .container
      .navbar-brand
        a.navbar-item(href="/")
          img(src="https://bulma.io/images/bulma-logo.png" width="112" height="28")
        a.navbar-burger(
          role="button",
          aria-label="menu",
          aria-expanded="false",
        )
          span(aria-hidden="true")

      #navbarBasicExample.navbar-menu
        .navbar-start
          router-link(to="/").navbar-item Create
          router-link(to="result").navbar-item Result

</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class Navbar extends Vue {

}
</script>