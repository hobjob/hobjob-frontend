import { Image } from '../IImage'

export interface CourseGoodLesson {
	title: string;
	video: {
		duration: string;
		vertical: boolean;
	};

	description?: string;
	image?: Image;
}

export interface CourseGoodSkill {
	title: string
	description: string
}

export interface CourseGoodUseSkill {
	title: string
	description: string
}

export interface CourseGoodTool {
	title: string
}

export interface CourseGoodFeedbacks {
	images: Image[]
	mediaImages: Image[]
}

export interface CourseGoodAdsVk {
	subscribe: string
	buy: string
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
	lessons: CourseGoodLesson[];
	materials: string[];
	skills: CourseGoodSkill[];
	useSkills: CourseGoodUseSkill[];
	tools: CourseGoodTool[];
	feedbacks: CourseGoodFeedbacks;
	adsVk: CourseGoodAdsVk;
	HobJobProduction: boolean;
}