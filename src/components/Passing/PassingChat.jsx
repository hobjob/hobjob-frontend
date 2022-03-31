import React from "react";

const PassingChat = ({chatUrl}) => {
    return (
        <div className="passing-bottom-block-chat">
            <h3 className="passing-bottom-block-chat__title">
                Чат учеников курса
            </h3>

            <p className="passing-bottom-block-chat__description">
                В чате вы можете общаться с единомышленниками, делиться своими
                успехами и идеями, задавать вопросы мастеру
            </p>

            <a
                href={chatUrl}
                target="__blank"
                className="btn passing-bottom-block-chat__btn"
            >
                Перейти в чат
            </a>
        </div>
    );
};

export default PassingChat;
