export default defineEventHandler(async (event) => {
    try {
 return [
            {
                "url": "https://alipanx.com/v1/search/disk",
                "latest_url": "https://alipanx.com/v1/disk/latest",
                "doc_url":"https://alipanx.com/v1/disk/doc",
                "engine": 1,
                "engine_name": "阿里盘搜[源]",
                "adv_params": {
                    "wechat_pwd": ""
                }
            },
            {
                "url": "https://so.yuneu.com/v1/search/disk",
                "latest_url": "https://so.yuneu.com/v1/disk/latest",
                "doc_url": "https://so.yuneu.com/v1/disk/doc",
                "engine": 2,
                "engine_name": "全盘搜[源]",
                "adv_params": {
                    "wechat_pwd": "a1b2c3d4soso"
                }
            },
            {
                "url": "https://www.lzpanx.com/v1/search/disk",
                "latest_url": "https://www.lzpanx.com/v1/disk/latest",
                "doc_url": "https://www.lzpanx.com/v1/disk/doc",
                "engine": 3,
                "engine_name": "懒盘搜索[源]",
                "adv_params": {
                    "wechat_pwd": ""
                }
            },
            {
                "url": "https://qkpanso.com/v1/search/disk",
                "latest_url": "https://qkpanso.com/v1/disk/latest",
                "doc_url": "https://qkpanso.com/v1/disk/doc",
                "engine": 4,
                "engine_name": "夸克盘搜[源]",
                "adv_params": {
                    "wechat_pwd": ""
                }
            },
            {
                "url": "https://www.pansou.icu/v1/search/disk",
                "latest_url": "https://www.pansou.icu/v1/disk/latest",
                "doc_url": "https://www.pansou.icu/v1/disk/doc",
                "engine": 5,
                "engine_name": "盘搜搜[源]",
                "adv_params": {
                    "wechat_pwd": ""
                }
            },
            {
                "url": "https://51panso.cn/v1/search/disk",
                "latest_url": "https://51panso.cn/v1/disk/latest",
                "doc_url": "https://51panso.cn/v1/disk/doc",
                "engine": 6,
                "engine_name": "无忧盘搜[源]",
                "adv_params": {
                    "wechat_pwd": ""
                }
            },
            {
                "url": "https://xlpanso.com/v1/search/disk",
                "latest_url": "https://xlpanso.com/v1/disk/latest",
                "doc_url": "https://xlpanso.com/v1/disk/doc",
                "engine": 7,
                "engine_name": "迅雷盘搜[源]",
                "adv_params": {
                    "wechat_pwd": ""
                }
            },
            {
                "url": "https://hunhepan.com/open/search/disk",
                "latest_url": "https://api.hunhepan.com/v1/raw_disk/latest_with_extab",
                "engine": 8,
                "engine_name": "混合盘[源]",
                "adv_params": {
                    "wechat_pwd": ""
                }
            }
        ]

    } catch (e) {
        console.log(e)
        return {
            code: 500,
            msg: 'error',
        }
    }
})