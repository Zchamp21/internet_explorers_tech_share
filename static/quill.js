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

  function submit_entry() {
    console.log(quill.getContents());

    let hidden_input = document.getElementById("message");
    // hidden_input.value = quill.root.innerHTML;
    
    hidden_input.value = JSON.stringify(quill.getContents());
    // hidden_input.value = JSON.stringify(quill.getContents().ops);
  }

  let form = document.getElementById("form");
  form.onsubmit = submit_entry;
})