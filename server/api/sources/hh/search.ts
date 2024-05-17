import apiEndpoints from "~/assets/data/api-endpoints";

export default defineEventHandler(async (event) => {

    try {
        let body = await readBody(event)

        let apiEndpoints = await $fetch('/api/sources/api-endpoints')

        let engineValue = body.engine
        let index = apiEndpoints.findIndex((item) => item.engine === engineValue)

        let res = await $fetch(apiEndpoints[index].url, {
            method: 'POST',
            body: {
                ...body,
                adv_params: apiEndpoints[index].adv_params
            }
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