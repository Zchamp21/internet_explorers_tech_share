# internet_explorers_tech_share

Hello! This is our tech share repository. 

For our tech share, we are going to be demonstrating how to use quill.js.

Quill.js is a rich text-editor library that you can add to your web pages to provide users with a more rich text-editing input.

For installation and quickstarts, go to this website: https://quilljs.com/

To run our project, do the following:
  1. run 'pipenv install'
  2. Set up your .env file based on the .env.template file we have provided.
  3. Set up your database based on the schema.sql file we have provided.
  4. run 'pipenv run flask run'
  5. Enjoy!

Because quill.js gives you the input in raw html, we used the following website to properly sanitize the html: https://pypi.org/project/html-sanitizer/
By running 'pipenv install', this library will install for you, but the website provides more information on how to use it.
This website may also provide some useful information about using html_sanitizer: https://stackoverflow.com/questions/55283447/python-html-sanitizer-allow-img-tag

#keybinding resolve issues
https://github.com/quilljs/quill/issues/790
