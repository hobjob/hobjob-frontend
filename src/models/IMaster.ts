import { CourseGood } from "./Course/ICourseGood";
import { Post } from "./IPost";
import { Image } from "./IImage";

export interface MasterSocials {
	inst: string;
	vk: string;
	telegram: string;
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
