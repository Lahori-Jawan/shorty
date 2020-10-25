<template>
  <div class="flex flex-wrap mt-4 table-container">
    <div class="w-full mb-12 xl:mb-0 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-base text-gray-800">
                Links Overview
              </h3>
            </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto" v-if="links.length">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                >
                  #
                </th>
                <th
                  class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                >
                  Original Link
                </th>
                <th
                  class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center"
                >
                  Shortened Link
                </th>
                <th
                  class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center"
                >
                  Created At
                </th>
                <th
                  class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center"
                >
                  Expires At
                </th>
                <th
                  class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center"
                >
                  Clicks
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(link, i) in reverseLinks" :key="i">
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                >
                  {{ i + 1 }}
                </th>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                >
                  {{ link.url }}
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ link.short }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  {{ link.createdAt.split('.')[0] }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  <!-- <i class="fas fa-arrow-up text-green-500 mr-4"></i> -->
                  {{ link.updatedAt.split('.')[0] }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  <!-- <i class="fas fa-arrow-up text-green-500 mr-4"></i> -->
                  {{ link.clicks || 0 }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="py-6 px-3 mt-32 sm:mt-0" v-else>
          <p class="mb-6 text-xl text-purple-600">
            It seems you haven't generated any short links yet. Lets create your
            first one.
          </p>
          <new-url-button />
        </div>
      </div>
    </div>
    <!-- <div class="w-full xl:w-4/12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-base text-gray-800">
                Social traffic
              </h3>
            </div>
            <div
              class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
            >
              <button
                type="button"
                class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead class="thead-light">
              <tr>
                <th
                  class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                >
                  Referral
                </th>
                <th
                  class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                >
                  Visitors
                </th>
                <th
                  class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left min-w-140-px"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                >
                  Facebook
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  1,480
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">60%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                      >
                        <div
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                          style="width: 60%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                >
                  Facebook
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  5,480
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">70%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-green-200"
                      >
                        <div
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                          style="width: 70%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                >
                  Google
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  4,807
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">80%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-purple-200"
                      >
                        <div
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                          style="width: 80%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                >
                  Instagram
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  3,678
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">75%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-blue-200"
                      >
                        <div
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                          style="width: 75%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
                >
                  twitter
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  2,645
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                >
                  <div class="flex items-center">
                    <span class="mr-2">30%</span>
                    <div class="relative w-full">
                      <div
                        class="overflow-hidden h-2 text-xs flex rounded bg-orange-200"
                      >
                        <div
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                          style="width: 30%;"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  computed: {
    reverseLinks() {
      const links = [...this.links];
      return links.reverse();
    },
  },
};
</script>

<style scoped>
.table-container {
  max-height: 40rem;
  overflow-y: scroll;
}
</style>
