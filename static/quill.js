window.addEventListener("load", async function() {
  // This sets up the main quill editor in the /main page.

  //tool bar customizations
    var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [ 'link', 'image', 'video'],          // add's image support
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']                                         // remove formatting button
  ];

  // handlers
  // var toolbarOptions = {
  //   handlers: {
  //     // handlers object will be merged with default handlers object
  //     'link': function(value) {
  //       if (value) {
  //         var href = prompt('Enter the URL');
  //         this.quill.format('link', href);
  //       } else {
  //         this.quill.format('link', false);
  //       }
  //     }
  //   }
  // }

  //! Keep this in here for now in case we want to do keyboard
  //! bindings. If not, remove this.
  // var bindings = {
  //   tab: {
  //     key: 9,
  //     handler: function() {
  //       this.quill.format('indent', '+1');
  //     }
  //   }
  // }

  //toolBar for customizations & handlers
  // var quill = new Quill("#editor", {
  //   modules: {
  //     toolbar: toolbarOptions,
  //     //! Remove this keyboard binding if not using for presentation.
  //     keyboard: {
  //       bindings: bindings
  //     }
  //   },
  //   placeholder: "Enter your message here!",
  //   theme: "snow"
  // });

  // Use this for the basic demo and introduction, and maybe add one or
  // two more toolbar features.
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