const data = {
    navMenu(menuType = 'header', isAuth = false) {
        const baseItems = isAuth ? [
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
                text: 'Войти'
            }
        ];

        const additionalItems = {
            footer: [
                {
                    url: "/#more",
                    text: 'О проекте'
                }
            ],
            header: []
        };

        return [...baseItems, ...(additionalItems[menuType] || [])];
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