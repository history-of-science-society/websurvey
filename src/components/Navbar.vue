<template>
  <b-navbar class="is-primary" :fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <g-image class="image" src="~/assets/logo.png" width="500" alt="HSS logo" />
      </b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-item :active="true" href="/">Home</b-navbar-item>
      <b-navbar-dropdown label="Results">
        <b-navbar-item href="#general">General</b-navbar-item>
        <b-navbar-item href="#accessibility">Accessibility</b-navbar-item>
        <b-navbar-item href="#ux">User Experience</b-navbar-item>
        <b-navbar-item href="#related">Related Websites</b-navbar-item>
        <b-navbar-item href="#demographics">Demographics</b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            href="https://interland3.donorperfect.net/weblink/WebLink.aspx?name=E343847&id=18"
            class="button is-danger is-inverted is-small"
          >
            <b-icon icon="heart" size="is-small" />
            <span>
              <strong>Donate</strong>
            </span>
          </a>
          <a href="https://hssonline.formstack.com/forms/website_redesign" class="button is-small">
            <b-icon icon="clipboard-text" size="is-small" />
            <span>
              <strong>Take the Survey</strong>
            </span>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.image {
  width: auto;
}
</style>
