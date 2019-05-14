export default {
    namespace: 'cards',
    state: {
        cardsList: [{
            id: 1,
            name: '张三',
            desc: '学习委员',
            url: 'https://www.baidu.com'
        }, {
            id: 2,
            name: '李四',
            desc: '课代表',
            url: 'https://www.google.com'
        },
        ]
    },
    reducers: {
        queryList(state, { }) {
            return {
                ...state
            };
        }
    },
}