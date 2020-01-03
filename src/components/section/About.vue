<template lang="pug">
  section#about(name='about')
    b-container
      h1 About
      b-row
        b-col(
          lg="6"
        )
          p
            b
              i 「TRATTORIA PORTO」
            | と言います。
            br
            | 当店は、山梨でカジュアルに北イタリアの郷土料理・お酒、
            br
            | それらにマッチするお店の雰囲気を堪能していただくことを
            br
            | コンセプトにしております！
            br
            | メニューは
            a(href='/gallery#menu' target='_blank') こちら
            | になります。
            br
            br
            ul
              li ランチ 11:30〜15:00（LO: 14:30）
              li バール 18:00～23:00（LO: 22:00）
              li 定休日 月曜日・第2火曜日
          b-alert(
            variant="warning"
            show
          )
            h5 当店のマナー
            | 当店はイタリア郷土料理とお酒・雰囲気を
            br
            | ゆっくりと楽しみたいというお客様のご要望もあり、
            br
            b ・ランチ営業は未就学
            br
            b ・ディナー・バー営業は中学生未満
            br
            | のお子様にはご遠慮いただいております。
            br
            | ご迷惑をおかけしますが、ご理解のほどお願い申し上げます。
            i.fas.fa-praying-hands

</template>

<script></script>

<style lang="scss" scoped></style>
