
## Learning Next Auth with Pages Router

* Add a .env.local ouside of the src directory and put `NEXTAUTH_SECRET=some_value` inside
* To Use JSON Server - `json-server --watch json_server/data.json --port 3001 --middlewares json_server/middleware.js`  
---
* Project Features:
    * 2 Stage Authentication
    * Stage 1 &rarr; Username and Password Based Authentication
    * Stage 2 &rarr; Two Factor Authentication
    * Middleware manages all the redirections
    * Does not refresh / Stays on the same page on unsuccessful signin.
---
* Two factor authorization can be implemented using two credential providers
* Follow the official doc: [Credentials - Multiple providers](https://next-auth.js.org/providers/credentials#multiple-providers)
* And also see the [SignIn Callback](https://next-auth.js.org/configuration/callbacks#sign-in-callback)