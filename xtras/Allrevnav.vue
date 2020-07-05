<template>
  <nav class="flex items-center justify-between flex-wrap bg-purple-400 p-6">
    <container class="flex items-center justify-between flex-wrap mx-auto">
      <v-card class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>

        <a
          href="index.html"
          class="font-semibold text-xl tracking-tight"
        >
          Space Exploration
        </a>
      </v-card>

      <v-card
        class="flex-1 items-center ml-6"
      >
        <a
          class="newfont"
          href="index.html"
        >
          Home
        </a>
        <a
          class="newfont"
          href="reviews.html?products=1"
        >
          List ProductIds
        </a>
        <a
          class="newfont"
          href="allreviews.html"
        >
          List Reviews
        </a>
      </v-card>
      <a
        class="newfont2"
        href="reviews.html"
      >
        Write Reviews
      </a>
    </container>
  </nav>
</template>

<script lang="ts">
const newfont = 'text-white font-black  mr-8'
const newfont2 = 'hover:bg-purple-700 hover:cursor-pointer rounded shadow-md text-white mr-2 font-bold py-2 px-5 bg-purple-600'

export default {
  name: 'Allrevnav',
  data: () => ({
    newfont,
    newfont2
  })
}
</script>
<style src="../assets/styles/tailwind.css" />
