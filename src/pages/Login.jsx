import React from "react";

const Login = () => {
    return (
        <section class="reglog">
            <div class="container">
                <div class="reglog-wrapper">
                    <div class="reglog-block">
                        <div className="reglog-block-title">
                            <h2 class="reglog-block__title">Войти</h2>
                            <a href="#" class="reglog-block__subtitle">
                                Зарегистрироваться
                            </a>
                        </div>
                        <div class="input reglog-block-input">
                            <input
                                name="name"
                                type="text"
                                class="input__field"
                                required
                            />
                            <span class="input__span"></span>
                            <label class="input__label">Email</label>
                        </div>
                        <div class="input reglog-block-input">
                            <input
                                name="name"
                                type="text"
                                class="input__field"
                                required
                            />
                            <span class="input__span"></span>
                            <label class="input__label">Пароль</label>
                        </div>
                        <button class="btn reglog-block__btn">Войти</button>
                    </div>

                    <div class="reglog-bottom">
                        <a href="#" class="reglog-bottom__link">
                            Забыли пароль?
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
