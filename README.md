# Nuxt, Storyblok & Netlify

> A course on VueSchool

- View the tutorial *Jamstack: The complete guide* [on VueSchool in this link](https://vueschool.io/courses/jamstack-the-complete-guide)

- View my complete guide [on Notion in this link](https://www.notion.so/yonatankof/Jamstack-The-Complete-Guide-dcf470cd24a14cc2a82b592903f526c0)

- View the [Netlify output in this link](https://effervescent-halva-ddf8b8.netlify.app/)

# To use

### Local dev

- `local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem`  to create a proxy that allows localhost development
- `npm run dev` to spin the server

### Generate a static site (Nuxt 3)

- `npm run generate` to build static assets 
- `npm run preview` to see the result