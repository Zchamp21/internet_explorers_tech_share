window.addEventListener("load", async function() {
  function show_form(formId) {
    let form = document.getElementById(formId);
    if (form.style.display == "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  }

  function submit_update(id, quill) {
    let inputId = "update"+id;
    let hidden_input = document.getElementById(inputId);
    hidden_input.value = quill.root.innerHTML;
  }

  // This retrieves the data from the database.
  let url = "http://localhost:5000/api/messages";
  let fetchData = await fetch(url);
  let jsonData = await fetchData.json();
  let data = jsonData.data;

  // An empty array to store multiple quill editors, 1 for each entry
  // in the database. This is so the messages can be edited.
  let quills = [];

  // Set up quill objects, various onclick and onsubmit event handlers
  // for each entry in the database.
  // The ids are constructed in here and in the html using ids from the
  // primary key in the database.
  for (let i = 0; i < data.length; i++) {
    editorId = "#editor" + data[i]['id'];
    quills[i] = new Quill(editorId, {
      modules: {
        toolbar: [
          ['bold', 'italic']
        ]
      },
      placeholder: 'Enter your message',
      theme: 'snow'
    });
    // This pre-sets the quill editors with the previous message from the database
    // that editor corresponds to.
    quills[i].root.innerHTML = data[i]['msg'];

    let spanId = "edit" + data[i]['id'];
    let formId = "form" + data[i]['id'];
    let span = document.getElementById(spanId);
    // Show the update form when the span is clicked.
    span.onclick = function() {
      show_form(formId);
    }

    // Set up the onsubmit handler for each update form.
    let curForm = document.getElementById(formId);
    curForm.onsubmit = function() {
      submit_update(data[i]['id'], quills[i]);
    }
  }
})