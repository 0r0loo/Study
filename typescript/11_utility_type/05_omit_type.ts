// Omit Type

interface Post {
    title: string;
    content: string;
    createdAt: Date
}

function createPost (post: Omit<Post, 'createdAt'> ): Post {
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: '제목',
    content: '내용',
})
