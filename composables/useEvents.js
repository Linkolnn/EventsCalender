import { useCookie } from '#app';

export function useEvents() {
  const events = useCookie('user_events', {
    default: () => ({}),
    sameSite: 'strict',
    path: '/',
    maxAge: 172800
  });

  const saveUserEvents = (username, userEvents) => {
    events.value = { 
      ...events.value,
      [username]: userEvents.map(event => ({
        id: event.id, // Уникальный ID события
        title: event.title,
        description: event.description,
        start: event.start.toISOString(),
        end: event.end.toISOString(),
        class: event.class
      }))
    };
  };

  const getUserEvents = (username) => {
    return (events.value[username] || []).map(event => ({
      id: event.id,
      title: event.title,
      description: event.description,
      start: new Date(event.start),
      end: new Date(event.end),
      class: event.class
    }));
  };

  return { getUserEvents, saveUserEvents };
}