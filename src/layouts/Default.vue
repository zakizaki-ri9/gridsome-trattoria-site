<template lang="pug">
  div
    header.header
      strong
        g-link(to='/') {{ $static.metaData.siteName }}
      nav.nav
        g-link.nav__link(to='/') Home
        g-link.nav__link(to='/about') About
    slot
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
</style>
