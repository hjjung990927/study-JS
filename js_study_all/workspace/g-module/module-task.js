// 댓글 모듈 만들기(replyService)
// 작성, 목록, 수정, 삭제
const replyService = () => {
    const write = (reply) => {};
    const list = (page = 1, callback) => {
        if (callback) {
            callback;
        }
    };
    const update = (reply) => {};
    const remove = (id) => {};

    return {
        write: write,
        list: list,
        update: update,
        remove: remove,
    };
};
