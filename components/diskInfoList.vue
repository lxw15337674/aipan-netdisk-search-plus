<script setup lang="ts">
defineProps({
  sources: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['openLink'])

const handleOpenSourceLink = (link: string) => {
  emit('openLink', link)
}

const formatDiskType = (type: string) => {
  switch (type) {
    case 'ALY':
      return '阿里云盘'
    case 'BDY':
      return '百度网盘'
    case 'QUARK':
      return '夸克网盘'
    case 'XUNLEI':
      return '迅雷网盘'
    default:
      return '未知类型'
  }
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

</script>

<template>
  <div
      class="bg-white shadow p-[14px] rounded-[6px] cursor-pointer
              hover:bg-[#f5f5f5] hover:shadow-lg transition duration-300 ease-in-out"
      v-for="(item,i) in sources?.list" :key="i"
      @click="handleOpenSourceLink(item.link)"
  >
    <div class="flex flex-row gap-2 items-center">
      <img class="w-[20px]" v-if="item.disk_type === 'ALY'" src="@/assets/netdisk/aliyun.png" alt="aliyun">
      <img class="w-[20px]" v-if="item.disk_type === 'QUARK'" src="@/assets/netdisk/quark.png" alt="quark">
      <img class="w-[20px]" v-if="item.disk_type === 'BDY'" src="@/assets/netdisk/baidu.png" alt="baidu">
      <img class="w-[20px]" v-if="item.disk_type === 'XUNLEI'" src="@/assets/netdisk/xunlei.png" alt="xunlei">
      <p class="text-[14px] font-inter font-[600]" v-html="item.disk_name"></p>
    </div>
    <div class="py-[12px]">
      <p class="text-[12px] text-slate-400 truncate-3-lines" v-html="item.files"></p>
    </div>
    <div class="text-[12px] text-slate-600 flex flex-row items-center  justify-between">
      <div class="flex flex-row items-center gap-2">
              <span v-if="item.disk_type" class="bg-blue-500 text-white px-[6px] py-[2px] rounded">
              {{ formatDiskType(item.disk_type) }}
            </span>
        <span v-if="item.disk_pass" class=" bg-purple-500 text-white px-[6px] py-[2px] rounded">
              {{ item.disk_pass }}
            </span>
      </div>
      <div>
              <span v-if="item.update_time" class="text-slate-600 px-[6px] py-[2px] rounded">
              {{ formatDate(item.update_time) }}
            </span>
      </div>
    </div>
  </div>
</template>
<style>
em {
  color: blue;
  margin: 0 2px;
}
</style>
<style scoped>
.truncate-3-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>