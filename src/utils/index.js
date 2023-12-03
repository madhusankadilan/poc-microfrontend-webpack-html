// util.js
export async function loadMicroFrontend(containerId, url) {
   const container = document.getElementById(containerId);
   const response = await fetch(url);
   const text = await response.text();
 
   container.innerHTML = text;

   const containerScripts = container.querySelector('script');

   if (containerScripts) {
      const script = document.createElement('script');
      script.text = containerScripts.text;
      container.appendChild(script);
   }
};