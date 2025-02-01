import prisma from '@/lib/prisma';

export default async function PostsPage() {
    // データを取得
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>Author: {post.author.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
