import React from 'react'

const PassingHashtag = ({hashtag}) => {
    return (
        <div className="passing-bottom-block-hashtag">
            <h3 className="passing-bottom-block-hashtag__title">
                Участвуйте в Конкурсе на лучшую работу
            </h3>

            <p className="passing-bottom-block-hashtag__description">
                Выложите пост в Инстаграм с фотографией вашей работы и хештегом{" "}
                <a>{hashtag}</a> отметьте наш аккаунт{" "}
                <a href="https://www.instagram.com/hobjob.ru">@hobjob.ru</a> В
                конце месяца мы выберем лучшую работу и подарим Pro подписку.
                Также проверьте, чтобы ваш аккаунт был открыт, иначе мы не
                сможем оценить работу.
            </p>
        </div>
    );
};

export default PassingHashtag
