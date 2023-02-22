window.addEventListener("load", function() {
  var quill = new Quill("#editor", {
    modules: {
      toolbar: [
        ["bold", "italic"]
      ]
    },
    placeholder: "Enter your message here!",
    theme: "snow"
  });
})