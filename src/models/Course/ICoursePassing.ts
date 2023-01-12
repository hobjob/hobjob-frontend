import { Image } from '../IImage'

export interface CoursePassingLessonMaterial {
    title: string;
    file: string;
}

export interface CoursePassingLesson {
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

    materials: CoursePassingLessonMaterial[];
}

export interface CoursePassing {
    _id: string;
    title: string;
	image: Image;
    description: string;
    masterId: string;
    HobJobProduction: boolean;
    completedLessons: number[];

    lessons: CoursePassingLesson[];
}
