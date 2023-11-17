import React from "react";

interface FileInputProps {
    id: string;
    submitFile: (file: File) => void;
    messageSubmitFile: (message: string) => void;
}

const FileInput: React.FC<FileInputProps> = ({
    id,
    submitFile,
    messageSubmitFile,
}) => {
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const type = e.target.files[0].type;
            const size = e.target.files[0].size;

            if (type === "image/jpeg" || type === "image/png") {
                if (size < 5000000) {
                    submitFile(e.target.files[0]);
                } else {
                    messageSubmitFile(
                        "Ваше изображение слишком большое. Максимальный вес 5 МБ"
                    );
                }
            } else {
                messageSubmitFile(
                    "Ваше изображение неверного расширения. Доступные расширения: .jpg, .jpeg, .png"
                );
            }
        }
    };

    return (
        <input
            className="input-file"
            id={id}
            type="file"
            onChange={handleSubmit}
            multiple={false}
            accept=".jpg, .jpeg, .png"
        />
    );
};

export default FileInput;
