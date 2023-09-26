import Vue from 'vue';

let instance = null;

class PopupManager {
  constructor() {
    if (!instance) {
      this.popupComponent = null;
      instance = this;
    }
    return instance;
  }

  openPopup(component, propsData) {
    this.popupComponent = component;
    const PopupComponent = Vue.extend(component);
    const vm = new PopupComponent({
      propsData
    }).$mount();
    document.body.appendChild(vm.$el);
  }

  closePopup() {
    if (this.popupComponent) {
      this.popupComponent = null;
      const vm = document.querySelector('.popup-component');
      if (vm) {
        vm.parentNode.removeChild(vm);
      }
    }
  }
}

export default new PopupManager();