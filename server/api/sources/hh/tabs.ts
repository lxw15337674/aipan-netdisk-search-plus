export default defineEventHandler(async (event) => {

    try{
        let res =  await  $fetch('https://api.hunhepan.com/v1/extab/list_all',{
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