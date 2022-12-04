<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

import ItemsCard from './../ItemsCard.vue'
const items = ref([])

async function getItemsData (){
  try {
    const response = await axios.get('http://zullkit-backend.buildwithangga.id/api/products')
    items.value = response.data.data.data
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getItemsData()
})

</script>
<template>
<div class="container px-4 mx-auto my-16 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <ItemsCard
        v-for="item in items"
          :id = item.id
          :key = item.id
          :title= item.name
          :description= item.subtitle
          :image= item.thumbnails
        />
      </div>
    </div>
</template> 