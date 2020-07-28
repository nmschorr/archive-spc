<template>
  <v-footer
    id="dashboard-core-footer"
    height="65px"
    :style="`background-image: linear-gradient(306deg, #BDBDBD, #D7D7D7 )`"
    app
  >
    <v-container>
      <v-row
        align="center"
      >
        <v-col
          v-for="(link, i) in links"
          :key="i"
          class="text-center heading"
          cols="auto"
        >
          <a
            :href="link.href"
            rel="noopener"
            target="_blank"
            v-text="link.text"
          />
        </v-col>

        <v-spacer />

        <v-col
          cols="12"
          md="auto"
        >
          <div class="body-1 font-weight-600 pt-2 pt-md-0 text-center">
            &copy; 2020, made with
            <v-icon
              size="18"
              color="red"
            >
              mdi-heart
            </v-icon>
            by <a href="https://nuls.io">NULS</a> for a better blockchain.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'CoreFooter',

    data: () => ({
      links: [
        {
          href: '#',
          text: 'NULS',
        },
        {
          href: '#',
          text: 'About Us',
        },
        {
          href: '#',
          text: 'Blog',
        },
        {
          href: '#',
          text: 'Licenses',
        },
      ],
    }),
  }
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: 18px
      text-decoration: none
      text-transform: uppercase

.v-footer
  padding: 2px 0 2px 4px
  border-top: 0px solid #e7e7e7
  position: relative
  a
    padding: 5px 6px 5px 6px
    font-size: 18px !important

  .body-1
    font-size: 18px !important
    padding-right: 18px
    letter-spacing: 0px !important
    a
      color: #9c27b0 !important
      padding: 0
      text-transform: inherit !important
      font-size: 18px !important

  .v-icon
    margin-top: -3px

  &.v-footer--absolute
    position: absolute !important

.theme--light.v-footer
  background-color: transparent
  .body-1
    color: #3c4858
  .v-icon
    color: #3c4858
</style>


