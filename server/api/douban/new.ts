export default defineEventHandler(async (event) => {

    try{
        let res =  await  $fetch('https://news-api.aicompasspro.com/douban_new',{
            method:'GET'
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