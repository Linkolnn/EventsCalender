<template>
  <div v-if="currentUser" class="profile__page">
    <Transition name="aside">
      <aside class="profile__aside" v-if="aside">
        <h2 class="profile_aside-title">{{ isCreating ? 'Создание событие':'Изменить событие'}}</h2>
        <form class="profile__form" v-if="isCreating" @submit.prevent="createEvent">
          <label class="font-text_medium">Название</label>
          <input type="text" maxlength="100" class="inp" v-model="newEvent.title" required />
          <span class="profile__form-counter ">
            {{ newEvent.title.length }}/100
          </span>
          <label class="font-text_medium">Описание</label>
          <textarea maxlength="400"  class="inp textarea" v-model="newEvent.description"></textarea>
          <span class="profile__form-counter ">
            {{ newEvent.description.length }}/400
          </span>
          <label class="font-text_medium">Цвет события</label>
          <div class="color-picker">
            <button
              v-for="color in colorOptions"
              type="button"
              class="color-option"
              :class="[
                color.class, 
                { selected: newEvent.class === color.class }
              ]"
              @click="newEvent.class = color.class"
            />
          </div>
          <VueDatePicker class="profile__datapicker" v-model="newEvent.date" inline auto-apply locale="ru" range/>
          <button class="btn font-button" type="submit">{{ isEditing ? 'Сохранить' : 'Создать' }}</button>
          <button class="btn font-button" type="button" @click="cancelEdit">Отмена</button>
        </form>  
        <form class="profile__form" @submit.prevent="editEvent" v-else-if="selectedEvent">
          <div :class="selectedEvent.class" class="profile__form-content">
            <h3 class="profile__event-text">{{ selectedEvent.title }}</h3>
            <p class="profile__event-text">{{ selectedEvent.description }}</p>
            <h4>{{ formatDate(selectedEvent.start) }}</h4>
            <h4>{{ formatDate(selectedEvent.end) }}</h4>
          </div>
          <button class="btn font-button" type="submit">Изменить</button>
          <button class="btn font-button" type="button" @click="cancelEdit">Отмена</button>
          <button class="btn-delete btn font-button" type="button" @click="deleteEvent">Удалить</button>
        </form>
      </aside>
    </Transition>
    <section ref="profileRef" class="profile__section section">
      <div class="profile__create-block">
        <h1>Профиль {{ currentUser.name }}</h1>
        <div class="button-group">
          <button class="btn font-button" @click="startCreating">Создать событие</button>
          <button class="btn font-button" @click="$refs.vuecal.switchView('day', new Date())">Сегодня</button>
          <button class="btn-delete btn font-button" @click="deleteAllEvent">
            <IconTrashs class="font-text_medium" filled/>
          </button>
        </div>
      </div>
      <vue-cal
        ref="vuecal"
        locale="ru"
        class="calendar"
        :events="events"
        :disable-touch="true"
        :time="false"
        active-view="week"
        :transitions="true"
        events-on-month-view="short"
        :events-count-on-year-view="false"
        :disable-duplicate-events="true"
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
import gsap from 'gsap';

const { currentUser } = useAuth();
const { getUserEvents, saveUserEvents } = useEvents();
const aside = ref(null);
const profileRef = ref(null);
const events = ref([]);
const isCreating = ref(false);
const isEditing = ref(false);
const selectedEvent = ref(null);
const newEvent = ref({ 
  id: null,
  title: '', 
  description: '', 
  date: [],
  class: 'purple' 
});

const colorOptions = ref([
  { class: 'red' },
  { class: 'orange' },
  { class: 'green' },
  { class: 'blue' },
  { class: 'purple' }
]);

const generateId = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
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

const startCreating = () => {
  aside.value = true;
  isCreating.value = true;
  isEditing.value = false;
  newEvent.value = { title: '', description: '', date: [], color: '#6A1B9A' };
};

const createEvent = () => {
  if (newEvent.value.title && newEvent.value.date?.length === 2) {
    const eventData = {
      id: isEditing.value ? newEvent.value.id : generateId(),
      title: newEvent.value.title,
      description: newEvent.value.description,
      start: new Date(newEvent.value.date[0]),
      end: new Date(newEvent.value.date[1]),
      class: newEvent.value.class || 'purple'
    };

    const updatedEvents = isEditing.value
      ? events.value.map(e => e.id === eventData.id ? eventData : e)
      : [...events.value, eventData];

    saveUserEvents(currentUser.value.name, updatedEvents);
    events.value = updatedEvents;
    resetForm();
  }
};

const showEventDetails = (event) => {
  aside.value = true;
  selectedEvent.value = event;
  isCreating.value = false;
};

const editEvent = () => {
  if (!selectedEvent.value) return;
  aside.value = true;
  isCreating.value = true;
  isEditing.value = true;
  newEvent.value = {
    id: selectedEvent.value.id,
    title: selectedEvent.value.title,
    description: selectedEvent.value.description,
    date: [new Date(selectedEvent.value.start), new Date(selectedEvent.value.end)],
    color: selectedEvent.value.color 
  };
};

const resetForm = () => {
  isCreating.value = false;
  isEditing.value = false;
  selectedEvent.value = null;
  aside.value = false;
  newEvent.value = { id: null, title: '', description: '', date: [] };
};

const deleteEvent = () => {
  if (!selectedEvent.value) return;
  const isConfirmed = window.confirm("Вы уверены, что хотите удалить это событие?");
  if (!isConfirmed) return;

  aside.value = false;

  const updatedEvents = events.value.filter(e => e.id !== selectedEvent.value.id);
  saveUserEvents(currentUser.value.name, updatedEvents);
  events.value = updatedEvents;
  selectedEvent.value = null;
};

const deleteAllEvent = () => {
  const isConfirmed = window.confirm("Вы уверены, что хотите удалить все события?");
  if (!isConfirmed) return;
  events.value = [];
  saveUserEvents(currentUser.value.name, events.value);
  selectedEvent.value = null;
};

const cancelEdit = () => {
  isCreating.value = false;
  isEditing.value = false;
  aside.value = false;
};

watch(currentUser,  (user) => {
  if (user) {
    events.value = getUserEvents(user.name)
  }
}, { immediate: true })


onMounted(() => {
  if (!currentUser.value) {
    navigateTo('/login');
  }
  gsap.fromTo(
    profileRef.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  );
});
</script>
<style lang="sass">
@import '@color'
@import '@global'
@import '@mixin'

.profile__event-text
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-line;

.aside-enter-active,
.aside-leave-active 
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease

.aside-enter-from,
.aside-leave-to 
  transform: translateX(-100%)
  opacity: 0

.aside-enter-to,
.aside-leave-from 
  transform: translateX(0)
  opacity: 1

.textarea
  resize: vertical
  min-height: 150px
  max-height: 250px

.profile__page
  position: relative
  background: rgb(255 255 255 / 50%) 
  display: flex

.profile__section
  flex: 1

.profile__create-block
  display: flex
  flex-direction: row
  justify-content: space-between
  padding: 0px 20px
  gap: 10px
  margin-bottom: 10px

.button-group
  display: flex
  flex-direction: row
  gap: 10px
  .btn
    width: max-content

.profile__aside
  display: flex
  flex-direction: column 
  width: 320px

.profile_aside-title
  text-align: center
  padding: 0 20px

.profile__form
  height: 160%
  width: 100%
  background: rgb(255 255 255 / 50%) 
  display: flex
  flex-direction: column
  padding: 20px
  gap: 20px

.profile__form-content
  padding: 20px
  border-radius: $radius
  display: flex
  flex-direction: column
  gap: 10px
  > *
    color: $white

.profile__form-counter
  transform: translateY(-15px)
  width: max-content

.color-picker
  border: 2px solid $purple
  border-radius: $radius
  background: $white
  justify-content: space-around
  display: flex;
  gap: 20px;
  padding: 15px 
  .color-option 
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;
    position: relative;
    &::after 
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      @include transition
    &.selected 
      border: 2px solid $dark-purple 
      transform: scale(1.2);
      @include transition

    &.red::after 
      background-color: $red
    
    &.orange::after 
      background-color: $orange
    
    &.green::after 
      background-color: $green
    
    &.blue::after 
      background-color: $blue
    
    &.purple::after 
      background-color: $purple

.red 
  background-color: $red

.orange 
  background-color: $orange

.green 
  background-color: $green

.blue 
  background-color: $blue

.purple 
  background-color: $purple

.btn-delete
  background: #ff0000 !important

.dp__flex_display
  align-items: center
  justify-content: center

.calendar 
  height: 90vh

.vuecal__event
  padding: 10px 1px
  color: $white
  word-wrap: break-word
  overflow-wrap: break-word
  white-space: normal
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 3
  overflow: hidden
  text-overflow: ellipsis
  line-height: 1.5
  max-height: calc(1.8em * 3)
  &:hover
    opacity: 0.8

.vuecal__event-title
  white-space: normal !important; // Заменяем pre-wrap на normal
  word-break: break-word;

.vuecal__menu
  background: $purple

.vuecal__view-btn
  font-size: 16px
  color: $white
  border: none

.vuecal__event-title 
  text-align: center !important

.vuecal__no-event 
  display: none

.weekday-label
  flex-direction: column

.vuecal__title-bar
  background: $white

.vuecal__arrow--next, .vuecal__arrow--prev
  border-radius: $radius
  color: $white
  background: $purple
  padding: 10px

.vuecal__arrow--prev
  margin-left: 20px

.vuecal__arrow--next
  margin-right: 20px

.vuecal__cell
  padding: 10px 0px
  min-width: 40px
  min-height: 50px

.vuecal__cell-events
  display: flex
  flex-direction: column
  gap: 5px

.vuecal__cell-events-count
  border-radius: 0px
  width: 100%
  background: $purple 

@include mobile
  .vuecal__arrow--prev
    margin-right: 0

  .profile__aside
    position: absolute;
    left: 0;
    overflow-y: scroll
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: $gradient;

  .profile__create-block
    display: flex
    flex-direction: column
    align-items: start
    gap: 10px
    margin-bottom: 10px
    > .btn
    .button-group
      width: 100%
      display: flex
      flex-wrap: wrap
      flex-direction: row
      gap: 10px
      .btn:first-child 
        flex: 1 1 100%
      .btn 
        flex: 1
      .btn-delete
        flex: 0 0 auto

  .calendar
    height: 70vh
</style>
