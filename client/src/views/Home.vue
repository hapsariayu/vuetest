<template>
  <div>
    <div class="w-1/2 mx-auto mt-8">
      <nav class="border-gray-200 px-2 mb-10">
        <div class="container mx-auto flex flex-nowrap items-center justify-between">
          <div class="flex md:order-2">
            <div class="relative mr-3 md:mr-0 hidden md:block">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-adress-icon"
                class="bg-gray-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul
              class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium"
            >
              <li>
                <a
                  href="#"
                  class="text-lg md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-white md:p-0 rounded"
                  aria-current="page"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-lg text-yellow-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-b md:border-yellow-500 block pl-3 pr-4 py-2 md:hover:text-yellow-700 md:p-0"
                  >Game of Thrones</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="carousel w-full">
        <div
          v-for="(img, i) in dataMovies"
          :key="i"
          :id="`slide${i}`"
          class="carousel-item relative w-full"
        >
          <img :src="img.image.original" class="w-full h-fit rounded-xl" />
          <div class="absolute top-10 left-10">
            <h1 class="text-5xl font-bold text-white font-sans">{{ img.name }}</h1>
            <div class="flex justify-start items-center">
              <div class="flex items-center">
                <div v-for="(star) in 5" :key="star">
                  <svg
                    :class="{
                      'mx-1 w-6 h-6 fill-current text-yellow-500': star <= img.rating.average / 2,
                      'mx-1 w-6 h-6 fill-current text-gray-400': star > img.rating.average / 2
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
              <span class="text-white text-xl font-sans font-semibold ml-2">{{ img.rating.average }}</span>
            </div>
          </div>
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              :href="i == 0 ? `#slide${dataMovies.length - 1}` : `#slide${i - 1}`"
              class="btn btn-square bg-opacity-70 hover:text-yellow-500"
              >❮</a
            >
            <a
              :href="i == dataMovies.length - 1 ? `#slide0` : `#slide${i + 1}`"
              class="btn btn-square bg-opacity-70 hover:text-yellow-500"
              >❯</a
            >
          </div>
          <button
            class="absolute btn btn-warning bottom-10 right-10"
            @click.prevent="$router.push({ path: `/detail/${img.id}` })"
          >
            Watch Now
          </button>
        </div>
      </div>

      <div class="my-8">
        <h1 class="text-4xl text-white font-bold font-sans">List Seasons</h1>
      </div>

      <div class="flex gap-5 flex-wrap mt-8">
        <div
          v-for="(img, i) in dataSeasons"
          :key="i"
          class="relative flex flex-col rounded-lg bg-clip-border w-56 h-72"
        >
          <div class="h-full w-full">
            <div class="relative w-full rounded-lg h-full">
              <img
                :src="img.image.medium"
                class="absolute top-0 left-0 object-cover mb-3 h-full w-max rounded-lg opacity-60 z-10"
                alt=""
              />

              <div class="absolute left-2 top-2 z-30">
                <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                  <div class="mb-2">
                    <p class="text-lg font-extrabold text-white">Season {{ img.number }}</p>
                    <div class="flex justify-start items-center">
                      <div class="flex items-center">
                        <svg
                          class="mx-1 w-3.5 h-3.5 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                          />
                        </svg>
                        <svg
                          class="mx-1 w-3.5 h-3.5 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                          />
                        </svg>
                        <svg
                          class="mx-1 w-3.5 h-3.5 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                          />
                        </svg>
                        <svg
                          class="mx-1 w-3.5 h-3.5 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                          />
                        </svg>
                        <svg
                          class="mx-1 w-3.5 h-3.5 fill-current text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                          />
                        </svg>
                      </div>
                      <span class="text-white text-sm font-sans font-semibold">8.1</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                class="absolute btn btn-warning bottom-2 right-8 z-30"
                @click.prevent="$router.push({ path: `/episode/${img.id}` })"
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../components/Swiper.vue'
import axios from 'axios'
export default {
  components: { Swiper },
  name: 'Home',
  data() {
    return {
      images: [
        'https://images.unsplash.com/photo-1619426017013-0d6db7b74d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        'https://plus.unsplash.com/premium_photo-1661589521076-6737f247c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2156&q=80',
        'https://plus.unsplash.com/premium_photo-1661591199320-eba26de75817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2156&q=80',
        'https://images.unsplash.com/photo-1604651901044-d623d303e260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2172&q=80'
      ],
      dataMovies: [],
      dataSeasons: [],
      temp1: []
    }
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await axios({
          url: 'https://api.tvmaze.com/shows/82/episodes',
          method: 'get'
        })

        const data = response.data
        const randomIndexes = []
        const numberOfItems = 5

        while (randomIndexes.length < numberOfItems) {
          const randomIndex = Math.floor(Math.random() * data.length)
          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex)
          }
        }

        for (const index of randomIndexes) {
          this.dataMovies.push(data[index])
        }

        console.log(this.dataMovies)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchSeasons() {
      try {
        const { data } = await axios({
          url: 'https://api.tvmaze.com/shows/82/seasons',
          method: 'get'
        })
        this.dataSeasons = data
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.fetchMovies()
    this.fetchSeasons()
  }
}
</script>

<style></style>
