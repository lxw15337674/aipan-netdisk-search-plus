export default defineEventHandler(async (event) => {

    try {
        let body = await readBody(event)

        let apiEndpoints = [

            {
                url: 'https://alipanx.com/v1/search/disk', engine: 1, adv_params: {
                    wechat_pwd: ""
                }
            },
            {
                url: 'https://so.yuneu.com/v1/search/disk', engine: 2, adv_params: {
                    wechat_pwd: "a1b2c3d4soso"
                }
            },
            {
                url: 'https://www.lzpanx.com/v1/search/disk', engine: 3, adv_params: {
                    wechat_pwd: ""
                }
            },
            {
                url: 'https://qkpanso.com/v1/search/disk', engine: 4, adv_params: {
                    wechat_pwd: ""
                }
            },
            {
                url: 'https://www.pansou.icu/v1/search/disk', engine: 5, adv_params: {
                    wechat_pwd: ""
                }
            },
            {
                url: 'https://51panso.cn/v1/search/disk', engine: 6, adv_params: {
                    wechat_pwd: ""
                }
            },

            {
                url: 'https://xlpanso.com/v1/search/disk', engine: 7, adv_params: {
                    wechat_pwd: ""
                }
            },
            {
                url: 'https://hunhepan.com/open/search/disk', engine: 8, adv_params: {
                    wechat_pwd: ""
                }
            },
        ];
        let engineValue = body.engine
        let index = apiEndpoints.findIndex((item) => item.engine === engineValue)

        let res = await $fetch(apiEndpoints[index].url, {
            method: 'POST',
            body: {
                ...body,
                adv_params: apiEndpoints[index].adv_params
            }
        })
        console.log({
            ...body,
            adv_params: apiEndpoints[index].adv_params
        })

        return res


    } catch (e) {
        console.log(e)
        return {
            code: 500,
            msg: 'error',
        }
    }
})