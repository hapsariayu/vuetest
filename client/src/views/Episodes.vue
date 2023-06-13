<template>
  <div class="w-3/4 mx-auto">
    <div class="m-8 flex flex-col gap-8">
      <div>
        <a
          @click.prevent="$router.push({ path: '/' })"
          class="btn btn-square p-2 bg-opacity-70 hover:text-yellow-500"
          >❮</a
        >
        <span class="text-lg ml-2 font-bold text-yellow-400">Back</span>
      </div>
      <h2 class="text-2xl text-white font-bold">
        Season {{ dataMovies[0]?.season }} - List Episodes
      </h2>

      <!-- Card -->
      <div class="flex gap-8 flex-wrap">
        <div
          v-for="(img, i) in dataMovies"
          :key="i"
          class="relative flex flex-col rounded-4xl w-56 h-96"
        >
          <div class="h-full w-full rounded-4xl ">
            <div class="relative w-full rounded-lg h-3/4 overflow-hidden">
              <img
                :src="img?.image?.medium"
                class="object-cover mb-3 h-full w-max rounded-lg"
                alt=""
              />
                <div class="absolute top-0 right-0 w-12 flex items-center justify-center bg-yellow-500 rounded-bl-lg text-black text-sm p-1">
                  <span>{{ img.rating.average }}</span>
                </div>
            </div>
            <div class="mb-3 flex items-center justify-between px-1 md:items-start">
              <div class="mb-2">
                <a
                  @click.prevent="$router.push({ path: `/detail/${img.id}` })"
                  class="text-lg font-bold text-white hover:cursor-pointer"
                  >{{ img.name }}</a
                >
                <div class="flex justify-start items-center">
                  <div class="flex items-center">
                    <div v-for="star in 5" :key="star">
                      <svg
                        :class="{
                          'w-3.5 h-3.5 fill-current text-yellow-500':
                            star <= img.rating.average / 2,
                          'w-3.5 h-3.5 fill-current text-gray-400': star > img.rating.average / 2
                        }"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                      </svg>
                    </div>
                    
                  </div>
                  <span class="text-white text-sm font-sans font-semibold ml-2">{{
                    img.rating.average
                  }}</span>
                </div>
                <p class="mt-1 text-sm text-white md:mt-2">
                  Episode
                  {{
                    img.number == null ? 'Special' : img.number < 10 ? `0` + img.number : img.number
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Episodes',
  data() {
    return {
      dataMovies: []
    }
  },
  methods: {
    async fetchMovies(id) {
      try {
        const { data } = await axios({
          url: `https://api.tvmaze.com/seasons/${id}/episodes`
        })
        this.dataMovies = data
        console.log(data, '<<<')
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.fetchMovies(this.$route.params.seasons)
  }
}
</script>

<style></style>
