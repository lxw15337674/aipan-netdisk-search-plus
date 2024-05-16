export default defineEventHandler(async (event) => {

    const query = await getQuery(event)

    try{
        let res =  await  $fetch('https://api.hunhepan.com/v1/extab/raw_disks/'+query.id,{
            method:'GET',
            query:{
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