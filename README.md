# Commerce
This is an example of e-commerce single-page application using Django and Vue.js.
To run this project you need to have Python installed (version 3.9.5 is recommended) as well as Vue.js (version 3.0.0)

When you download content of this repository in your command prompt,
activate Pythons virtual envirobment by typing:

.\env\Scripts\activate

Then you have to start Django server witch is responsiple for handling backend data.
Just make sure you are in Commerce directory on the same level as manage.py file then type:

python manage.py runserver

However this server does not use Vue.js files. For that you need to open anoter command prompt,
navigate to frontend directory and then type:

npm run serve

Now you can access this website on port: 

http://127.0.0.1:8080/

if you want to access admin site you need to type this url in your browser:

http://127.0.0.1:8000/admin

This will open Django's admin panel.
To log in into this panel you need to use username and password down below:

username: admin
password: admin
