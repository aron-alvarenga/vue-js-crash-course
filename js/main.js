Vue.component("app-username", {
  props: ["username"],
  data: function () {
    return {
      // username: "Aron Alvarenga",
    };
  },
  template: "<p>{{ username }}</p>",
});

new Vue({
  el: "#app",
  data: {
    name: "Aron",
    elements: [],
  },
  methods: {
    changeName: function () {
      this.name = "Alvarenga";
    },
    addElement: function () {
      this.elements.push(this.elements.length + 1);
    },
    getColor: function (number) {
      return number % 2 == 0 ? "lime" : "tomato";
    },
  },
});

new Vue({
  el: "#app2",
  data: {
    message: "Hello there",
  },
});

new Vue({
  //A vue instance can only control one part of your code, not multiple ones. SOLUTION: Components.
  el: ".username",
  data: {
    username: "Aron",
  },
});
