<template>
  <div class="flex h-screen w-full">
    <img
      :src="detailMovie.image.original"
      alt="movies"
      class="absolute object-cover w-full h-full opacity-70"
    />

    <div class="w-3/4 mx-auto relative h-full">
      <div class="m-8">
        <div>
          <a
            @click.prevent="$router.push({ path: `/episode/${detailMovie.season}` })"
            class="btn btn-square p-2 bg-opacity-70 hover:text-yellow-500"
            >❮</a
          >
          <span class="text-lg ml-2 font-bold text-yellow-400">Back</span>
        </div>

        <div class="mt-72 flex flex-col justify-between">
          <div>
            <h1 class="text-white text-6xl font-sans font-bold">{{ detailMovie.name }}</h1>
            <div class="flex justify-start items-center mt-2">
              <div class="flex items-center mt-2 mb-4">
                <div v-for="star in 5" :key="star">
                      <svg
                        :class="{
                          'mx-1 w-6 h-6 fill-current text-yellow-500':
                            star <= detailMovie.rating.average / 2,
                          'mx-1 w-6 h-6 fill-current text-gray-400': star > detailMovie.rating.average / 2
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
              <span class="text-white text-2xl font-sans ml-2 font-semibold mt-2 mb-4">{{ detailMovie.rating.average }}</span>
            </div>
          </div>

          <div class="mt-16 w-1/2">
            <h1 class="text-white text-2xl font-sans flex-wrap" v-html="detailMovie.summary">
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Detail',
  data(){
    return {
        detailMovie: {}
    }
  },
  methods: {
    async fetchDetailMovie(id){
        try {
            const {data} = await axios({
                url: `https://api.tvmaze.com/episodes/${id}`,
                method: 'get'
            })

            this.detailMovie = data
            console.log(data, '<<<');
        } catch (error) {
            console.log(error);
        }
    }
  },
  created(){
    this.fetchDetailMovie(this.$route.params.id)
  }
}
</script>

<style></style>
