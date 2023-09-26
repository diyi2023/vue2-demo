<template>
    <div class="popup-component">
      <div class="popup-content">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <button @click="closePopup">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  import PopupManager from '@/utils/popupManager';
  export default {
    props: {
      title: {
        type: String,
        default: 'Popup Title'
      },
      message: {
        type: String,
        default: 'Popup Message'
      }
    },
    methods: {
      closePopup() {
        // 调用 PopupManager 的方法关闭弹出框
        PopupManager.closePopup();
      }
    }
  };
  </script>
  
  <style scoped>
  .popup-component {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }
  </style>