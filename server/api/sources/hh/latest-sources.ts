export default defineEventHandler(async (event) => {

    const query = await getQuery(event)

    try{
        let res =  await  $fetch('https://api.hunhepan.com/v1/raw_disk/latest_with_extab',{
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