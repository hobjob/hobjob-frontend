import {CourseGood} from "./ICourseGood";
import {Post} from "./IPost";

export interface Master {
    _id: string;
    name: string;
    surname: string;
    masterDescription: string;
    avatar: string;
}

export interface MasterById extends Master {
    courses: CourseGood[];
    posts: Post[];
}
