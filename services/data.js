const data = {
    navMenuItems(isAuth) {
        return isAuth ? [
            {
              url: "/profile",
              text: 'Профиль'
            },
            {
              url: "#logout",
              text: 'Выйти'
            }
        ] : [
            {
              url: "/register",
              text: 'Регистрация'
            },
            {
              url: "/login",
              text: 'Авторизация'
            }
        ];
    },
    welcomeListBtn() {
        return [
            {
                url: "/#more",
                text: 'Подробнее'
            },
        ];
    },
};

export default data;