
# <img src="https://user-images.githubusercontent.com/74038190/221857969-f37e1717-1470-4fe4-abb5-88b334cf64ea.png" alt="icon of todo list" width="45" /> Baby Steps Internship Project

> :information_source: This is a web application built using [Next.js](https://nextjs.org/).

This project retrieves user information from an external API endpoint and displays them in a paginated table.  It also offers a search feature that enables users to filter the user list by name or email. Additionally, the project uses server-side rendering to improve performance and SEO.

If you wish to learn about the specific code used in this project, please refer to the [Explanation.md](Explanation.md) file.

<hr>

## :fire: Deployed Link ##

This project is hosted on [Vercel Platform](https://vercel.com/). Visit the following link to view the web application.

```
https://baby-steps-rho.vercel.app/
```
<hr>

## ✅ Guidelines to run web app locally

- For this app to work, Use these commands to run the application

```bash
# to install dependencies 
npm install

# to run the server
npm run dev

```

- Open `http://localhost:3000` with your browser to see the application.

<br>

<hr>

## :open_file_folder: Folder Structure

A quick look at the folder structure of this project.

    .
    |──node_modules
    |──next.config.json
    |──jsconfig.json
    |──.eslintrc.json
    |──package-lock.json
    |──package.json
    ├── components
        |───user
            |───userList.js
            |───userList.module.css
    ├── data
        |───userStats.json
    └── models
        |───userModel.js
    └── pages
        |───api
            |───user
                 └─[id].js
            |───_app.js
            |───_document.js
            |───404.js
            |───index.js
    └── public
        └───static
            |──404.png
            |──BabySteps.jpg
    └── styles
        |──404.module.css
        |──globals.css
        |──user.module.css
        |──Home.module.css
    

<hr>

## <img src="https://user-images.githubusercontent.com/74038190/221857984-5bf77e81-6f65-4502-a7c8-f29a978efb3f.png" alt="bullseye" width="35" /> Frameworks & Tools
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
<img src="https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=Lighthouse&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />

<hr>

## 💻 User Interface

> Start Screen

![Starting Screen](https://user-images.githubusercontent.com/74038190/236125286-d9db0182-e12a-4cb4-8143-da5994bc922f.png)

<br>

> Dynamic User Details Page

![Dynamic User Page](https://user-images.githubusercontent.com/74038190/236125293-669d25d3-4faf-45b5-8bdb-063937c61fbb.png)





