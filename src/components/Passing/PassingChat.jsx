import React from "react";

const PassingChat = ({chatUrl}) => {
    return (
        <div className="passing-chat">
            <h3 className="passing-chat__title">Чат участников курса</h3>

            <p className="passing-chat__description">
                В чате вы можете общаться с единомышленниками, делиться своими
                успехами и идеями, задавать вопросы мастеру
            </p>

            <a
                href={chatUrl}
                target="__blank"
                className="btn passing-chat__btn"
            >
                Перейти в чат
            </a>
        </div>
    );
};

export default PassingChat;
