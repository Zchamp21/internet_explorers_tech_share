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
      [ 'link', 'image', 'video'],                      // add's image support
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']                                         // remove formatting button
  ];

  /*****************************************************
   * Ryan's part
   * Use this for the basic introduction. This is the 
   * default toolbar that quill uses.
   * Mention class ql-editor in quill.html.
  *****************************************************/ 
  var quill = new Quill("#editor", {
    placeholder: "Enter your message here!",
    theme: "snow"
  });



  /*****************************************************
   * Nico's part
   * Uncomment this for demonstrating the handlers 
   * functionality.
  *****************************************************/
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

  /*****************************************************
   * Nico's part
   * Uncomment this for demonstrating the toolbar
   * customizations.
  *****************************************************/
  // var quill = new Quill("#editor", {
  //   modules: {
  //     toolbar: toolbarOptions,
  //   },
  //   placeholder: "Enter your message here!",
  //   theme: "snow"
  // });



  /*****************************************************
   * Yiling's part
   * This part is for the history feature of the 
   * presentation.
  *****************************************************/
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
    
  // var icons = Quill.import("ui/icons");
  // icons["clear"] = 'clear';
  // icons["cutoff"] = 'cutoff';
  // icons["undo"] = `<svg viewbox="0 0 18 18">
  //   <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
  //   <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
  //   </svg>`;
  // icons["redo"] = `<svg viewbox="0 0 18 18">
  //   <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
  //   <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
  //   </svg>`;
  // // https://github.com/KillerCodeMonkey/ngx-quill/issues/362

  // // icons: https://github.com/quilljs/quill/tree/develop/assets/icons 
  // var toolbarOptions = [
  //   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  //   ['undo', 'redo', 'clear'],
  //   ['cutoff']
  // ];

  // var quill = new Quill('#editor', {
  //   modules: {
  //     toolbar: {
  //       container: toolbarOptions,
  //       handlers: {
  //         undo: function(value) {
  //           this.quill.history.undo();
  //         },
  //         redo: function(value) {
  //           this.quill.history.redo();
  //         },
  //         clear: function(value) {
  //           this.quill.history.clear();
  //         },
  //         cutoff: function(value){
  //           this.quill.history.cutoff();
  //         }
  //       }
  //     },
  //     history: {
  //       delay: 2000,
  //       maxStack: 500,
  //       userOnly: true
  //     },
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

  // var cutoffButton = document.querySelector('#cutoff');
  // cutoffButton.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   quill.history.cutoff();
  // });

  

  /*****************************************************
   * Cedric's part
   * This part is for the key bindings part of the 
   * presentation.
   * metaKey (shortKey) - commandKey for Mac, ctrlKey, shiftKey and altKey
  *****************************************************/

  // var bindings = {
  //   tab: {
  //     key: 9,
  //     handler: function() {
  //       this.quill.format('indent', '+1');
  //     }
  //   },
  //   bold: {
  //     key: 9,     // using tab key
  //     handler: function(range, context) {
  //       if (!context.format.bold) {
  //         this.quill.format('bold', true);
  //       } else {
  //         this.quill.format('bold', false);
  //       }
        
  //     }
  //   },
  //   bold: {
  //     key: 'M',
  //     shortKey: true,
  //     handler: function(range, context) {
  //       if (!context.format.bold) {
  //         this.quill.format('bold', true);
  //       } else {
  //         this.quill.format('bold', false);
  //       }
        
  //     }
  //   },
  //   header: {
  //     key: 'H',
  //     shortKey: true,
  //     handler: function(range, context) {
  //       if (!context.format.header) {
  //         this.quill.format('header', 3);
  //       } else {
  //         this.quill.format('header', false);
  //       }
  //     }
  //   }
  // }

  // var quill = new Quill("#editor", {
  //   modules: {
  //     keyboard: {
  //       bindings: bindings
  //     }
  //   },
  //   placeholder: "Enter your message here!",
  //   theme: "snow"
  // });



  /*****************************************************
   * Zach's part
   * This part is for javascript-flask communication.
   * Uncomment the quill var for the example.
  *****************************************************/
  // var quill = new Quill("#editor", {
  //   modules: {
  //     toolbar: toolbarOptions
  //   },
  //   placeholder: "Enter your message here!",
  //   theme: "snow"
  // });

  function submit_entry() {
    let hidden_input = document.getElementById("message");
    // hidden_input.value = quill.root.innerHTML;
      
    hidden_input.value = JSON.stringify(quill.getContents());
  }

  // This sets up an onsubmit event handler for the main form on the /main page.
  let form = document.getElementById("form");
  form.onsubmit = submit_entry;

//reference:
// https://stackoverflow.com/questions/59555447/how-to-create-undo-redo-buttons-in-quill-js-react-quill
//  https://github.com/KillerCodeMonkey/ngx-quill/issues/362
// https://stackoverflow.com/questions/59555447/how-to-create-undo-redo-buttons-in-quill-js-react-quill
});