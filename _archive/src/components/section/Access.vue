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
                  i.fa.fa-phone
                  |  055-234-5256
            b-list-group-item
              a(
                href='https://goo.gl/maps/6c9dqBZ1DZjCpo188'
                target='_blank'
              )
                h5
                  i.fa.fa-map-marker
                  |  GoogleMap - 山梨県笛吹市石和町井戸197 
            b-list-group-item
              a(
                href='https://www.facebook.com/Trattoria-Porto-2008761036085611s'
                target='_blank'
              )
                h5
                  i.fab.fa-facebook-square
                  |  Facebookのアカウント
            b-list-group-item
              a(
                href='https://www.instagram.com/trattoriaporto'
                target='_blank'
              )
                h5
                  i.fab.fa-instagram
                  |  Instagramのアカウント
            b-list-group-item
              a(
                href='https://tabelog.com/yamanashi/A1901/A190103/19011040/'
                target='_blank'
              )
                h5
                  i.fas.fa-utensils
                  |  食べログ
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
