export default defineEventHandler(async (event) => {

    const query = await getQuery(event)
    // https://so.yuneu.com/v1/disk/latest
    try{
        let res =  await  $fetch('https://alipanx.com/v1/disk/latest',{
            method:'GET',
            query:{
                type: query.type,
                page: query.page,
                size: query.size
            }
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