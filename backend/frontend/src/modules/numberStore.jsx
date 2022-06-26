import { observable } from 'mobx';

const numberStore = observable({
  // state
  num: 0,

  // actions
  increaseAction(num) {
    this.num += num;
  },

  decreaseAction(num) {
    this.num -= num;
  }

});

export default numberStore;