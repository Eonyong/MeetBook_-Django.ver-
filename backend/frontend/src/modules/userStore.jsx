import { makeAutoObservable, observable } from "mobx";

const userStore = observable({
  email: '',
  name: '',
  nickname: '',
  gender: 0,
  age: 0,
  profile_image: '',
  profile_description: '',
  host_point: 0,
  guest_point: 0,

  constructor() {
    makeAutoObservable(this);
  },

  login(email) {
    this.email = email;
  },

});

export default userStore;