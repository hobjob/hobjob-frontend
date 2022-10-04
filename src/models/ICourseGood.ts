import { Image } from './IImage'

export interface CourseGoodLessons {
	title: string;
	video: {
		duration: string;
	};

	description?: string;
	image?: Image;
}

export interface CourseGood {
	_id: string;
	url: string;
	title: string;
	description: string;
	image: Image;
	masterId: string;
	category: string;
	path?: string;
	lessons: CourseGoodLessons[];
	HobJobProduction: boolean;
}
