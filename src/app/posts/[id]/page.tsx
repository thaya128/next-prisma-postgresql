import prisma from '@/lib/prisma';

type PostPageProps = {
    params: { id: string };
};

export default async function PostPage({ params }:PostPageProps) {
    const post = await prisma.post.findUnique({
        where: {
            id: String(params.id),
        },
        include: {
            author: {
                select: { name: true },
            },
        },
    });

    if (!post) {
        return <h1>Post Not Found</h1>;
    }

    return (
        <div>
            <h1>{post.id} : {post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};