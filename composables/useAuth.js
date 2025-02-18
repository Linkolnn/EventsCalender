import CryptoJS from 'crypto-js';

export function useAuth() {
  const users = useCookie('auth_users', { // Отдельная кука для хранения всех аккаунтов
    default: () => ({}),
    // secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 172800 // 2 дней
  });

  const currentUser = useCookie('current_user', { // Кука для текущей сессии
    default: () => null,
    // secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 172800 // 2 дня
  });

  const hashPassword = (password) => CryptoJS.SHA256(password + import.meta.env.VITE_SALT).toString();

  const register = (name, password) => {
    if (users.value[name]) {
      console.log('❌ Пользователь уже существует');
      return false;
    }

    users.value = {
      ...users.value,
      [name]: {
        password: hashPassword(password),
        createdAt: new Date().toISOString()
      }
    };

    currentUser.value = { name, lastLogin: new Date().toISOString() };
    console.log('✅ Аккаунт зарегистрирован:', name);
    return true;
  };

  const login = (name, password) => {
    const user = users.value[name];
    
    if (!user || user.password !== hashPassword(password)) {
      console.log('❌ Неверные данные');
      return false;
    }

    currentUser.value = { name, lastLogin: new Date().toISOString() }; 
    console.log('✅ Вход выполнен:', name);
    return true;
  };

  const logout = () => {
    try {
      // Сохраняем копию данных для корректного завершения
      const userData = { ...currentUser.value }
      
      // Атомарное обновление состояния
      currentUser.value = null
  
      
      console.log(`✅ Сессия пользователя ${userData.name} завершена`)
      return true
    } catch (error) {
      console.error('Ошибка при выходе:', error)
      return false
    }
  }
  return { 
    users: computed(() => users.value),
    currentUser: computed(() => currentUser.value),
    register,
    login,
    logout
  };
}