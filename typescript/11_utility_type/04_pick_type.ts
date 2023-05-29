// Pick Type

interface Post {
    title: string;
    content: string;
    createdAt: Date
}

function createPost (post: Pick<Post, 'title'| 'content'> ): Post {
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: '제목',
    content: '내용',
})
