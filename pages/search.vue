<script setup>
import SearchHeader from "~/components/search/SearchHeader.vue";
import DiskInfoList from "~/components/diskInfoList.vue";
import aliImg from '@/assets/netdisk/aliyun.png'
import quarkImg from '@/assets/netdisk/quark.png'
import xunleiImg from '@/assets/netdisk/xunlei.png'
import bdyImg from '@/assets/netdisk/baidu.png'

definePageMeta({
  layout: 'custom',
})

const router = useRouter()

const handleOpenSourceLink = (url) => {
  window.open(url, '_blank')
}

const tabsOptions = [
  {
    label: '所有',
    value: ''
  },
  {
    label: '阿里',
    value: 'ALY',
    img: aliImg
  },
  {
    label: '百度',
    value: 'BDY',
    img: bdyImg
  },
  {
    label: '夸克',
    value: 'QUARK',
    img: quarkImg
  },
  {
    label: '迅雷',
    value: 'XUNLEI',
    img: xunleiImg
  }
]

const route = useRoute()
const keyword = ref(decodeURIComponent(route.query.keyword))
const currentTabValue = ref('')
const page = ref(1)
const exact = ref(false)

const sources = ref([])
const handleSearchByHunhe = async () => {
  let res = await $fetch('/api/sources/hh/search', {
    method: 'POST',
    body: {
      'engine': currentEngine.value,
      "q": keyword.value,
      "page": page.value,
      "size": 10,
      "time": "",
      "type": currentTabValue.value,
      "exact": exact.value
    }
  })
  if (res.code === 200) {
    sources.value = res.data
  }
}

const search = (e) => {
  keyword.value = e
  handleSearchByHunhe()
}

const handleChangeTab = (e) => {
  currentTabValue.value = e
  handleSearchByHunhe()
}

const handleCurrentPageChange = (e) => {
  page.value = e
  window.scroll(0, 0)
  handleSearchByHunhe()
}

const handleChangeExact = (e) => {
  exact.value = !e
  handleSearchByHunhe()
}
const handleEngineChange = (e) => {
  currentEngine.value = e
  handleSearchByHunhe()
}
const latestSourcesData = ref([])
const getLatestSourcesData = async (page, size) => {
  const loading = ElLoading.service({
    text: '加载中...',
    background: 'transparent',
    target: '#latest-sources',
  })
  let res = await $fetch('/api/sources/hh/latest-sources', {
    method: 'get',
    query: {
      page: page,
      size: size
    }
  })
  if (res.code === 200) {
    latestSourcesData.value = res.data
    loading.close()
  }
}
const handleGoToLatestSources = () => {
  router.push({path: '/latest-sources'})
}
const currentEngine = ref(1)
const searchOptions = [
  {
    label: '默认引擎',
    value: 1
  },
  {
    label: '搜索引擎一',
    value: 2
  },
  {
    label: '搜索引擎二',
    value: 3
  },
  {
    label: '搜索引擎三',
    value: 4
  },
  {
    label: '搜索引擎四',
    value: 5
  },
  {
    label: '搜索引擎五',
    value: 6
  }
]

onMounted(() => {
  handleSearchByHunhe()
  getLatestSourcesData(1, 10)
})
</script>

<template>
  <div>
    <search-header :keyword="keyword" @search="search"></search-header>

    <div class="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8">
      <div class="grid grid-cols-1 gap-3 sm:mt-3 sm:pb-[60px] min-h-[500px] p-[20px] md:p-0">
        <div class="py-3">
          <ul class="flex flex-row gap-3 flex-wrap">
            <li v-for="(item,i) in tabsOptions" :key="i">
              <el-check-tag :checked="item.value === currentTabValue" @click="handleChangeTab(item.value)"
                            type="success">
                <div class="flex flex-row items-center">
                  <span class="text-[10px] md:text-[14px]">{{ item.label }}</span>
                </div>
              </el-check-tag>
            </li>
            <li>
              <el-check-tag :checked="exact" @click="handleChangeExact(exact)"
                            type="success">
                <span class="text-[10px] md:text-[14px]">精确搜索</span>
              </el-check-tag>
            </li>
            <li>
              <el-select
                  v-model="currentEngine"
                  placeholder="Select"
                  style="width: 140px"
                  @change="handleEngineChange"
              >
                <el-option v-for="item in searchOptions" :key="item.value" :label="item.label" :value="item.value">

                </el-option>
              </el-select>
            </li>
          </ul>
        </div>

        <disk-info-list :sources="sources" @open-link="handleOpenSourceLink"></disk-info-list>

        <div class="py-[40px] flex justify-center">
          <client-only>
            <el-pagination
                layout="prev, pager, next"
                @current-change="handleCurrentPageChange"
                :total="sources?.total"
            ></el-pagination>
          </client-only>

        </div>
      </div>
      <div class="p-[20px] sm:py-[20px]">
        <div class="bg-white shadow p-[14px] rounded-[6px]">
          <div class="flex flex-row justify-between items-center">
            <span class="text-[14px] font-bold">最近更新</span>
            <div>
              <el-button link icon="refresh" @click="getLatestSourcesData(1, 10)"></el-button>
              <el-button link icon="more" @click="handleGoToLatestSources()"></el-button>
            </div>

          </div>
          <div class="grid grid-cols-1 gap-3 mt-3 min-h-[500px]" id="latest-sources">
            <div
                class="bg-white shadow p-[14px] rounded-[6px] cursor-pointer
                hover:bg-[#f5f5f5] hover:shadow-lg transition duration-300 ease-in-out"
                v-for="(item,i) in latestSourcesData?.list" :key="i"
                @click="handleOpenSourceLink(item.link)"
            >
              <div class="flex flex-row gap-2 items-center">
                <img class="w-[20px]" v-if="item.disk_type === 'ALY'" src="@/assets/netdisk/aliyun.png" alt="aliyun">
                <img class="w-[20px]" v-if="item.disk_type === 'QUARK'" src="@/assets/netdisk/quark.png" alt="quark">
                <img class="w-[20px]" v-if="item.disk_type === 'BDY'" src="@/assets/netdisk/baidu.png" alt="baidu">
                <img class="w-[20px]" v-if="item.disk_type === 'XUNLEI'" src="@/assets/netdisk/xunlei.png" alt="xunlei">
                <span class="text-[14px] font-inter">{{ item.disk_name }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>