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
  },
});
