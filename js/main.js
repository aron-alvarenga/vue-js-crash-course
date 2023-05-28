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
