interface CoursePassingLessonMaterial {
    title: string;
    file: string;
}

interface CoursePassingLesson {
    title: string;
    description: string;
    image: string;

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
    image: string;
    description: string;
    masterId: string;
    HobJobProduction: boolean;

    lessons: CoursePassingLesson[];
}
