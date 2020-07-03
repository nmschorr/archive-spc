<template>

 <nav class="flex items-center justify-between flex-wrap bg-purple-400 p-6">
     <v-app-bar
      app
      color="primary"
      dark
   />
        <div class="flex items-center justify-between flex-wrap mx-auto container">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <a href="index.html" class="font-semibold text-xl tracking-tight">Space Exploration</a>
          </div>
          <div class="flex-1 items-center ml-6">
            <a class="text-white font-black  mr-8" href="index.html">Home<a>
                <a class="text-white font-black  mr-8" href="reviews.html?products=1">List ProductIds</a>
                <a class="text-white font-black  mr-8" href="allreviews.html">List Reviews</a>
          </div>
          <a class="hover:bg-purple-700 hover:cursor-pointer rounded shadow-md text-white mr-2 font-bold py-2 px-5 bg-purple-600"
            href="reviews.html">
            Write Reviews</a>
        </div>

      </nav>
</template>

<script>
export default {
  name: "Navsam"
}
</script>