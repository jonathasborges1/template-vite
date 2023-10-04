
const currentDomain = window.location.hostname.replace(/^\w+\./, "");
const cookieHost = (window.location.hostname === "localhost" ? "localhost" : `.${currentDomain}`).replace(/\.+/g, "");

const currentLocation = window.location.origin;

const appConfig = {
   api: {
      url: "https://bikex.com.br/mw-canal-cliente/rest",
      timeout: 30000,
    },
   auth: {
      url:"https://auth.bikex.com.br/mw-auth/rest",
      timeout: 30000,
      keys: {
         token: "Template",
      },
   },
   host: cookieHost,
   urlLogout: `https://auth.bikex.com.br/#/logout?url=${currentLocation}&rules=canal_cliente`,
   urlLogoutDev: `http://localhost:3000/#/logout?url=${currentLocation}&rules=canal_cliente`,
   app: {
      name: "Template"
   },
 };

 export default appConfig;
 