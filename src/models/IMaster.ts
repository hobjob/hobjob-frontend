import {CourseGood} from "./ICourseGood";
import {Post} from "./IPost";

export interface MasterSocials {
    inst: string;
    vk: string;
    tiktok: string;
    telegram: string;
}

export interface Master {
    _id: string;
    name: string;
    surname: string;
    masterDescription: string;
    avatar: string;
    socials: MasterSocials;
}

export interface MasterById extends Master {
    courses: CourseGood[];
    posts: Post[];
}
