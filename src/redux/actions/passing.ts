import {saveAs} from "file-saver";

import $api from "../../http/";

export const fetchPassingCourseLessonMaterial = (
    courseId: string,
    lessonNum: number,
    materialNum: number,
    title: string
) => {
    return async () => {
        const response = await $api.get(
            `/courses/${courseId}/materials/${lessonNum}/${materialNum}`,
            {
                responseType: "blob",
            }
        );

        let myUrl = window.URL.createObjectURL(response.data);

        saveAs(myUrl, title);
    };
};
