<template>
    <div class="modal-overlay">
      <div class="modal-content">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <div class="dates">
          <div>Начало: {{ formatDate(event.dates.start) }}</div>
          <div>Конец: {{ formatDate(event.dates.end) }}</div>
        </div>
        
        <div class="modal-actions">
          <button @click="$emit('update', event)">Изменить</button>
          <button @click="$emit('delete', event.id)">Удалить</button>
          <button @click="$emit('close')">Отмена</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { format } from 'date-fns'
  
  defineProps({
    event: Object
  })
  
  const formatDate = (date) => format(date, 'dd.MM.yyyy')
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    min-width: 400px;
  }
  
  .modal-actions {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }
  </style>