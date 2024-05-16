export default defineEventHandler(async (event) => {

    // 定义多个 API 的请求配置
    const apiEndpoints = [
        { url: 'https://alipanx.com/v1/search/disk', method: 'POST' },
        { url: 'https://xlpanso.com/v1/search/disk', method: 'POST' },
        { url: 'https://hunhepan.com/open/search/disk', method: 'POST' },
        { url: 'https://www.lzpanx.com/v1/search/disk', method: 'POST' },
        { url: 'https://qkpanso.com/v1/search/disk', method: 'POST' },
        { url: 'https://www.pansou.icu/v1/search/disk', method: 'POST' }
    ];

    try {
        const body = await readBody(event);

        // 使用 Promise.all() 并行发起多个请求
        const requests = apiEndpoints.map(async (endpoint) => {
            const res = await $fetch(endpoint.url, {
                method: 'POST',
                body
            });
            return res;
        });

        // 等待所有请求完成
        const results = await Promise.all(requests);

        // 返回所有请求的结果数组
        return results;

    } catch (e) {
        console.log(e);
        return {
            code: 500,
            msg: 'error',
        };
    }
});
