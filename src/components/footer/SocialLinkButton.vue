<template lang="pug">
  ul
    li
      a(
        href='https://twitter.com/intent/tweet?url=https://trattoria-e-bar-porto-yamanashi.netlify.com/&text=山梨県にある北イタリア料理店（レストラン＆バー）です！'
        target='_blank'
      )
        font-awesome-icon(:icon="['fab', 'twitter']")
    li
      a(
        href='https://www.facebook.com/sharer/sharer.php?u=https://trattoria-e-bar-porto-yamanashi.netlify.com/'
        target='_blank'
      )
        font-awesome-icon(:icon="['fab', 'facebook']")
</template>

<script></script>

<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  margin: 0;
  li {
    margin-left: 10px;
    margin-right: 10px;
    a {
      font-size: 28px;
    }
  }
}
</style>
