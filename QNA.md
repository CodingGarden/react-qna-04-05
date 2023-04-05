* what is used in place of redux nowadays?
  * Redux is still used... Redux Toolkit
  * Built in: Context API / useReducer
  * zustand
  * jotai
  * @tanstack/react-query
  * react-swr - stale while revalidate
  * apollo client
  * easy-peasy
  * preact signals
  * MobX
  * xstate
  * recoil
  * reactn
* What tools do you recommend for starting a React app? (ie create-react-app, vite, etc)
* Create React App
    * https://create-react-app.dev/
  * Vite Scaffold
    * https://vitejs.dev/
    * Coding Garden React TS Starter
      * https://github.com/CodingGarden/react-ts-starter
  * Parcel
    * https://parceljs.org/
  * Next.js
    * https://nextjs.org/
    * Or try create-t3-app
  * Remix
    * https://remix.run/
  * Gatsby
    * https://www.gatsbyjs.com/
  * Astro
    * https://astro.build/
  * Roll your own...
    * Webpack, Vite, Rollup
    * Babel or TypeScript compiler
    * Old school - Grunt, Gulp
  * Are hooks specific to react???
    * The general term "hook" is not
      * https://en.wikipedia.org/wiki/Hooking
    * Places hooks show up
      * Hardware
        * hook into behavior of hardware like a keyboard  
      * WebHook
        * https://en.wikipedia.org/wiki/Webhook
      * Git commit hooks
        * https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks
      * FeathersJS
        * Hooks are "middleware" functions that can be registered before, after or on errors of a service method.
        * https://feathersjs.com/api/hooks.html
      * SvelteKit
        * app-wide functions you declare that SvelteKit will call in response to specific events, giving you fine-grained control over the framework's behaviour.
        * Also "middleware"
        * https://kit.svelte.dev/docs#hooks