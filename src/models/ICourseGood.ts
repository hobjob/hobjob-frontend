export interface CourseGoodLessons {
    title: string;
    video: {
        duration: string;
    };

    description?: string;
    image?: string;
}

export interface CourseGood {
    _id: string;
    url: string;
    title: string;
    description: string;
    image: string;
    masterId: string;
    category: string;
    path?: string;
    lessons: CourseGoodLessons[];
    HobJobProduction: boolean;
}
