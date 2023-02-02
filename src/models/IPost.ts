import { Image } from "./IImage";

export interface PostNext {
	_id: string;
	title: string;
}

export interface PostContent {
	title: string;
	description: string[];
	image: Image;
}

export interface Post {
	_id: string;
	title: string;
	image: Image;
	masterId: string;
	category: string;
	content: PostContent[];
	next: PostNext;
}
