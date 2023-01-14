import { Image } from '../IImage'

export interface PassingCourseLessonMaterial {
	title: string;
	file: string;
}

export interface PassingCourseLesson {
	title: string;
	description: string;
	image: Image;

	video: {
		fileNameUser: string;
		fileNameSystem: string;
		indexFile: string;
		path: string;
		duration: string;
	};

	materials: PassingCourseLessonMaterial[];
}

export interface PassingCourse {
	_id: string;
	title: string;
	image: Image;
	description: string;
	masterId: string;
	HobJobProduction: boolean;
	completedLessons: number[];

	lessons: PassingCourseLesson[];
}
