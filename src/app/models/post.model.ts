export interface Post {
    id: number,
    userId: 1,
    description: string,
    createdAt: string,
    updatedAt: string,
    status: 1
}

export interface PostResponse {
    status: string
    data: Post[]
}