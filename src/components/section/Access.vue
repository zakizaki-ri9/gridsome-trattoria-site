<template lang="pug">
  section#access(name='Access')
    b-container
      h1 Access
      b-row
        b-col(
          lg="6"
        )
          p
            | お問い合わせ・ご予約は、TELにて承ります。
            br
            | 念のため、場所をご確認の上、お越しください！
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
                href='https://goo.gl/maps/DPHwzSMTuchX6bZC6'
                target='_blank'
              )
                h5
                  font-awesome-icon(:icon="['fa', 'map-marker']")
                  |  山梨県笛吹市石和町井戸197 
            b-list-group-item
              a(
                href='https://www.facebook.com/Trattoria-Porto-2008761036085611s'
                target='_blank'
              )
                h5
                  font-awesome-icon(:icon="['fab', 'facebook-square']")
                  |  Facebookのアカウント
            b-list-group-item
              a(
                href='https://www.instagram.com/trattoriaporto'
                target='_blank'
              )
                h5
                  font-awesome-icon(:icon="['fab', 'instagram']")
                  |  Instagramのアカウント
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
