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

  inform (email, name, nickname, gender, age, profile_image, profile_description) {
    this.email = email;
    this.name = name;
    this.nickname = nickname;
    this.gender = gender;
    this.age = age;
    this.profile_image = profile_image;
    this.profile_description = profile_description;
  },

});

export default userStore;