export interface PostNext {
    _id: string;
    title: string;
}

export interface PostContent {
    title: string;
    description: string[];
    image: string;
}

export interface Post {
    _id: string;
    title: string;
    description: string;
    image: string;
    masterId: string;
    category: string;
    content: PostContent[];
    next: PostNext;
}
