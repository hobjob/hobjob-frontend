import { CourseGood } from "./Course/ICourseGood";
import { Post } from "./IPost";
import { Image } from "./IImage";

export interface MasterSocials {
	dzen: string,
	vk: string,
	youtube: string,
	telegram: string,
	inst: string,
	tiktok: string,
}

export interface MasterWorkVideo {
	cover: Image;
	url: string
}

export interface Master {
	_id: string;
	name: string;
	surname: string;
	masterDescription: string;
	worksImage: Image[];
	worksVideo: MasterWorkVideo[];
	avatar: Image;
	socials: MasterSocials;
}

export interface MasterById extends Master {
	courses: CourseGood[];
	posts: Post[];
}
