export default {
    // 测试接口
    getmoments(currentPage, onePageNum) { //最新话题、推荐达人、
        return 'https://fumuq.net/api/moments/getAllMoments?phone=17600045075&type=1&currentPage=' + currentPage + '&onePageNum=' + onePageNum + '&token=9D9CBF047A67F9B7F8FC793A07AB395132D57D7D20E8422B8C5620D6BC20AB74'
    },
}