document.body.innerHTML = `
   <div class="container">
      <h1 class="header">Micro Frontend Host</h1>
      <div class="content">
         <div id="module1Container" class="module-container"></div>
         <div id="module2Container" class="module-container"></div>
         <div id="module3Container" class="d-none"></div>
      </div>
   </div>
`;

import('./moduleLoader');
