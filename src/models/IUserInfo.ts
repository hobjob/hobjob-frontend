import moment from "moment";

interface UserInfoSubscribe {
    working: boolean;
    passedPeriodTesting: boolean;

    typeSubscribe: string;
    nextTypeSubscribe: string;

    periodInfo: {
        count: number;
        title: moment.unitOfTime.DurationConstructor;
    };

    registrationSubscribe: string;

    paymentId: string;
    paymentNumber: string;
}

export interface UserInfoCourse {
    courseId: string;
    completedLessons: {[key: number]: number};
    dateCreate: string;

    lessons: {countViewingDuration: number}[];

    visible: boolean;
}

interface UserInfoPayment {
    auto: boolean;
    methodId: string;
}

export interface UserInfo {
    _id: string;
    email: string;
    avatar: string;
    city: string;
    dateOfBirth: string;

    name: string;
    surname: string;
    phone: string;

    subscribe: UserInfoSubscribe;
    courses: UserInfoCourse[];
    payment: UserInfoPayment;
}

export interface UserInfoState extends Omit<UserInfo, "courses"> {
    courses: {[key: string]: UserInfoCourse};
}
