import { Image } from './IImage'

export interface CourseGoodLessons {
	title: string;
	video: {
		duration: string;
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
	skills: CourseGoodSkill[];
	useSkills: CourseGoodUseSkill[];
	tools: CourseGoodTool[];
	HobJobProduction: boolean;
}
