<template>
  <div v-if="currentUser" class="profile__page">
    <aside class="profile__aside" :class="{ active: selectedEvent || isCreating }">
      <form v-if="isCreating" @submit.prevent="createEvent">
        <input v-model="newEvent.title" placeholder="Название события" required />
        <textarea v-model="newEvent.description" placeholder="Описание события" required></textarea>
        <VueDatePicker class="profile__datapicker" v-model="newEvent.date" inline locale="ru" range/>
        <button class="btn font-button" type="submit">{{ isEditing ? 'Сохранить' : 'Создать' }}</button>
        <button class="btn font-button" type="button" @click="cancelEdit">Отмена</button>
      </form>
      
      <form @submit.prevent="editEvent" v-else-if="selectedEvent">
        <h3>{{ selectedEvent.title }}</h3>
        <p>{{ selectedEvent.description }}</p>
        <p>{{ formatDate(selectedEvent.start) }}</p>
        <p>{{ formatDate(selectedEvent.end) }}</p>
        <button class="btn font-button" type="submit">Изменить</button>
        <button class="btn font-button" @click="selectedEvent = null">Отмена</button>
      </form>
    </aside>

    <section class="profile__section section">
      <h1>Профиль {{ currentUser.name }}</h1>
      <button class="btn font-button" @click="startCreating">Создать событие</button>
      <vue-cal
        locale="ru"
        class="calendar"
        :events="events"
        :disable-touch="true"
        :time="false"
        active-view="week"
        hide-view-selector
        :transitions="false"
        events-on-month-view="short"
        :events-count-on-year-view="false"
        @event-click="showEventDetails"
      />
    </section>
  </div>
</template>
<script setup>
import { useAuth } from '@/composables/useAuth';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useEvents } from '@/composables/useEvents';

const { currentUser } = useAuth();
const { getUserEvents, saveUserEvents } = useEvents();

const events = ref([]); // Инициализируем пустым массивом
const isCreating = ref(false);
const isEditing = ref(false);
const selectedEvent = ref(null);
const newEvent = ref({ title: '', description: '', date: [] });
// Ждем, пока currentUser загрузится, и получаем события
watch(currentUser, (user) => {
  if (user) {
    events.value = getUserEvents(user.name);
  }
}, { immediate: true });

const startCreating = () => {
  isCreating.value = true;
  isEditing.value = false;
  newEvent.value = { title: '', description: '', date: [] };
};

const formatDate = (date) => {
  if (!date || !(date instanceof Date) || isNaN(date)) return "Дата не указана";
  
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const createEvent = () => {
  if (newEvent.value.title && newEvent.value.date?.length === 2) {
    const eventData = {
      title: newEvent.value.title,
      description: newEvent.value.description,
      start: new Date(newEvent.value.date[0]),
      end: new Date(newEvent.value.date[1])
    };

    if (isEditing.value) {
      const index = events.value.findIndex(e => e === selectedEvent.value);
      if (index > -1) events.value[index] = eventData;
    } else {
      events.value.push(eventData);
    }

    saveUserEvents(currentUser.value.name, events.value);

    isCreating.value = false;
    isEditing.value = false;
    selectedEvent.value = null;
    newEvent.value = { title: '', description: '', date: [] };
  }
};

const showEventDetails = (event) => {
  if (!event?.start || !event?.end) return;
  console.log("Структура события:", event);
  selectedEvent.value = event;
  isCreating.value = false; // Добавьте эту строку
};


const editEvent = () => {
  isCreating.value = true;
  isEditing.value = true;
  newEvent.value = {
    title: selectedEvent.value.title,
    description: selectedEvent.value.description,
    date: [new Date(selectedEvent.value.start), new Date(selectedEvent.value.end)]
  };
};

const cancelEdit = () => {
  isCreating.value = false;
  isEditing.value = false;
};

</script>
<style lang="sass">
@import '@color'
@import '@global'
@import '@mixin'

.profile__page
  background: rgb(255 255 255 / 50%) 
  display: flex
  gap: 20px

.calendar 
  height: 90vh

.profile__datapicker
  top: 0 
  .dp__arrow_top
    display: none
  .dp--menu-wrapper
    transform: translateY(-50px)
    top: 0


.profile__aside
  display: none
  width: 300px
  transition: 0.3s
  &.active
    display: block
    padding: 20px
    transition: 0.3s
    border-radius: 8px

.vuecal__event
  cursor: pointer
  &:hover
    opacity: 0.8

.vuecal__event
  padding: 20px 0px
  background: $purple
  color: $white

.weekday-label
  flex-direction: column

.vuecal__arrow--next, .vuecal__arrow--prev
  border-radius: $radius
  background: $purple
  padding: 10px

.vuecal__cell-events
  display: flex
  flex-direction: column
  gap: 5px

.vuecal__cell-events-count
  border-radius: 0px
  width: 100%
  background: $purple

.profile__section
  flex: 1

vue-cal
  width: 100%
  height: 600px



@include mobile
  .calendar
    height: 70vh
</style>
