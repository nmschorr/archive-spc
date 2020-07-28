/* eslint-disable vue/name-property-casing */
<template>
  <div class="lg:flex">
    <div class="leading-none sm:leading-relaxed text-center block mt-24 w-full lg:w-2/3 xl:w-1/2">
      <div class="text-6xl font-extrabold">
        <span class="leading-tight text-white rounded p-2 shadow-md bg-teal-400">
          Genuine
        </span> 
        Reviews
      </div>
      <div class="text-orange-400 z-50 relative sm:-mt-10 sm:-mb-10 text-6xl font-extrabold">
        in
      </div>
      <div class="text-6xl font-extrabold">
        the 
        <span class="text-white rounded p-2 shadow-md bg-black">blockchain</span>
      </div>

      <div class="text-gray-700 text-3xl leading-tight font-medium">
        <br>
        Space Exploration provides users with genuine reviews validated by the blockchain
      </div>
    </div>

    <div class="block xl:w-1/2 lg:w-1/3 md:mt-auto md:mb-auto sm:mt-6">
      <div class="text-center relative text-6xl font-extrabold">
        Try Space Exploration
      </div> 
      <a href="reviews.html">
      </a>

          <v-card
            color="transparent"
            height="90px"
            width="100%"
            flat
            class="d-flex justify-center"
          >
            <v-card
              color="teal accent-4"
              flat
              outlined="false"
              height="30px"
              width="60%"
              class="d-flex justify-center"
              :style="`background-image: linear-gradient(60deg, cyan, teal accent-4)`"
            >
            </v-card>
          </v-card>

          </div>
    </div>
</template>
<script>
  export default {
    name: "Spcgraphic"
      }

</script>
<style src="../assets/styles/twsummary.css" />
