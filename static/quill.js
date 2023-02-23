window.addEventListener("load", async function() {
  // This sets up the main quill editor in the /main page.
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
    hidden_input.value = quill.root.innerHTML;
      
    // hidden_input.value = JSON.stringify(quill.getContents());
    // hidden_input.value = JSON.stringify(quill.getContents().ops);
  }

  // This sets up an onsubmit event handler for the main form on the /main page.
  let form = document.getElementById("form");
  form.onsubmit = submit_entry;



    // history
  // var quill = new Quill('#editor', {
  //   modules: {
  //     toolbar: true,
  //     history: {
  //       delay: 2000,
  //       maxStack: 1000,
  //       userOnly: true
  //     }
  //   },
  //   theme: 'snow'
  // });
  
  // var undoButton = document.querySelector('#undo');
  // undoButton.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   quill.history.undo();
  // });

  // var redoButton = document.querySelector('#redo');
  // redoButton.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   quill.history.redo();
  // });

  // var clearButton = document.querySelector('#clear');
  // clearButton.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   quill.history.clear();
  // });


  // // have questions about cutoff and maxstack
  // var cutoffButton = document.querySelector('#cutoff');
  // cutoffButton.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   quill.history.cutoff();
  // });
});