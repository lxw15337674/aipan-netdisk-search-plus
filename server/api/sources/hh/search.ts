export default defineEventHandler(async (event) => {

    try{
        let body = await readBody(event)

        let apiEndpoints = [
            { url: 'https://alipanx.com/v1/search/disk', engine: 2 },
            { url: 'https://xlpanso.com/v1/search/disk', engine: 3 },
            { url: 'https://hunhepan.com/open/search/disk', engine: 1 },
            { url: 'https://www.lzpanx.com/v1/search/disk', engine: 4 },
            { url: 'https://qkpanso.com/v1/search/disk', engine: 5 },
            { url: 'https://www.pansou.icu/v1/search/disk', engine: 6 }
        ];
        let engineValue = body.engine
        let index = apiEndpoints.findIndex((item) => item.engine === engineValue)

        let res =  await  $fetch( apiEndpoints[index].url ,{
            method:'POST',
            body
        })

        return res


    }catch (e) {
        console.log(e)
        return {
            code: 500,
            msg:'error',
        }
    }
})