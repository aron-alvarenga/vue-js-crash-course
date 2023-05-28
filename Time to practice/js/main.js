// 8)
Vue.component("app-hobby", {
  props: ["hobby"],
  template: "<li v-on:click='removeHobby'>{{hobby}}</li>",
  methods: {
    removeHobby: function () {
      this.$emit("hobbyremoved", this.hobby);
    },
  },
});

new Vue({
  // 1)
  el: "#app",
  data: {
    hobbies: ["Sports", "Cooking"], // 2)
    userHobby: "",
    hobbyWasDeleted: false, // 5)
  },
  methods: {
    addHobby: function () {
      // 3)
      this.hobbies.push(this.userHobby);
    },
    removeHobby: function (hobby) {
      // 4)
      const position = this.hobbies.indexOf(hobby);
      this.hobbies.splice(position, 1);
      this.hobbyWasDeleted = true; // 5)
    },
  },
});
