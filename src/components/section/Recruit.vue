<template lang="pug">
  section#recruit(name='recruit')
    b-container
      h1 Recruit
      b-row
        b-col(
          lg="6"
        )
          p
            | オープニングスタッフを募集しています。
            br
            | お問い合わせは、次のTELかInstagramのDMにてお待ちしております。
            br
          b-list-group
            b-list-group-item
              a(
                href='tel:0552345256'
                target='_blank'
              )
                h5
                  font-awesome-icon(:icon="['fa', 'phone']")
                  |  055-234-5256
            b-list-group-item
              a(
                href='https://www.instagram.com/trattoriaporto'
                target='_blank'
              )
                h5
                  font-awesome-icon(:icon="['fab', 'instagram']")
                  |  Instagramのアカウント
            b-list-group-item
              a(
                href='https://goo.gl/maps/DPHwzSMTuchX6bZC6'
                target='_blank'
              )
                h5
                  font-awesome-icon(:icon="['fa', 'map-marker']")
                  |  山梨県笛吹市石和町井戸197 
</template>

<script></script>

<style lang="scss" scoped>
table {
  color: white;
}
h5 {
  color: #007bff;
  &:hover {
    color: #0051ff;
    cursor: pointer;
  }
}
</style>
