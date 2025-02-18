import { useCookie } from '#app';

// useEvent.js
export function useEvents() {
    const events = useCookie('user_events', {
      default: () => ({}),
      sameSite: 'strict',
      path: '/',
      maxAge: 172800
    });
  
    const getUserEvents = (username) => {
      if (!username) return [];
      return (events.value[username] || []).map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end)
      }));
    };
  
    const saveUserEvents = (username, userEvents) => {
      if (!username) return;
      
      events.value = {
        ...events.value,
        [username]: userEvents.map(event => ({
          ...event,
          start: event.start.toISOString(),
          end: event.end.toISOString()
        }))
      };
    };
  
    const updateEvent = (username, eventId, updatedEvent) => {
      const userEvents = getUserEvents(username);
      const index = userEvents.findIndex(e => e._eid === eventId);
      
      if (index === -1) return;
      
      userEvents[index] = {
        ...userEvents[index],
        ...updatedEvent,
        start: new Date(updatedEvent.date[0]),
        end: new Date(updatedEvent.date[1]),
        _eid: eventId
      };
      
      saveUserEvents(username, userEvents);
    };
  
    return { 
      events, 
      getUserEvents, 
      saveUserEvents, 
      updateEvent 
    };
}