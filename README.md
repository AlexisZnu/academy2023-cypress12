# Crowdar Academy 2023 - Otros frameworks, Cypress

## Purpose:
The following project has the purpose of demonstrate and let test automation developers to
to test a App Web using Cypress.io Framework.

***

## Project structure

A typical Cypress project usually looks like this

```

..\academy2023-cypress12
|
|   cypress.config.js
|   README.md
|   package.json
|   
\---cypress
    +---fixtures
    |   |  
    |   \---example.json
    |      
    +---integration
    |   |
    |   |---01-Login-CrowdarAcademy2023.cy.js
    |   |
    |   |---02-Sliders-CrowdarAcademy2023.spec.js
    |   |
    |   |---03-Arrivals-CrowdarAcademy2023.spec.js
    |   |
    |   \---04-HomePage-Arrivals-AddToBasket-CrowdarAcademy2023.spec.js
    |      
    |       
    +---support
        |---  commands.js
        \---  e2e.js
                        


## Folder's description:

|Path   |Description    |
|-------|----------------|
|academy2023-cypress12\cypress\fixtures\examples\\\*.json | Folder with all the **Fixtures-Examples**|
|academy2023-cypress12\cypress\fixtures\Download\\\*.xlsx | Folder with all downloads **Downloads** report.xlsx |
|academy2023-cypress12\cypress\fixtures\locators\\\*.json | Folder with all the **Locators** matching steps with java code|
|academy2023-cypress12\cypress\integration\\\*.spec.js | Folder with all the **Test Web** matching steps with java script code|
|academy2023-cypress12\cypress\plugins\\\index.js | Folder with all the **Plugins** with java script code|
|academy2023-cypress12\cypress\support\\\ | Folder with all the **Support Commands** with java script code|
|academy2023-cypress12\ | Folder with all configuration needed to run Cypress |


## Getting started
***    

```

# Getting started

 snap install node --classic
 
 npm install cypress --save-dev
 
 Optional: npm install -D cypress@12.11.0
 
 Run Cypress:  .\node_modules\.bin\cypress open
 
 Optional runners: npm run cy:open              
                   npm run cy:run 