Frontend Conventions (MUSIC DASHBOARD)
====
#GENERAL
###File Structure
####Folder Naming

 - snake_case should be implemented
 - restrict deep folder structures
 - folder name should speak for itself, in any case that the function differs from the folder name, it should be changed
####File Naming
 - snake_case sould be implemented
 - file name should speak for itself. `stores` should be singular e.g. `user_store.js`, while actions be plural `user_actions.js`.
 - restrict using long file names e.g. `some_long_component_name.jsx`

###Vendor Assets

 - vendor assets should be `saved` e.g. `bower install react --save`
 - a `bower update` should be run every after pulling fresh code
 - don't **directly** modify vendor assets
 

###TESTING

 - testing be done after each deliverable is finished
 - run tests after a finished-component was altered
 - run tests || create tests before any major pull request

#SCSS

 - separated by component
 - `main.scss` should only have imports
 - naming convention should follow [accepted (de facto) standards](https://github.com/rstacruz/rscss)

###File Structure

```
.
+-- main.scss
+-- _components.scss
+-- _variables.scss
+-- _responsive.scss
+-- components
|	+-- _common.scss
| 	+-- _signup.scss
+-- responsive
|	+-- _small.scss
```

###example
/path/to/scss/main.scss;
```css
@import 'variables';
@import 'components';
@import 'responsive';
```

/path/to/scss/_components.scss
```css
@import 'components/common';
@import 'components/signup';
```

/path/to/scss/_responsive.scss
```css
@import 'responsive/small';
```

#Scripts

 - follow [JS Conventions](https://github.com/anyTV/JS-conventions)
 - any `components` codebase should be under one folder, no component-relative code be outside its respective folder

###File Structure
 
```
.
+-- scripts
|	+--actions
|		+--some_actions.js
|	+--components
| 		+--layouts
|		+--pages
|		+--mixins
|		+--any other components
| 	+--stores
|		+--mocks
|			+--users.json
|		+--some_store.js
+-- app.js
+-- router.jsx
```

###Data Handling

 - in a case whereas the data does not exist, or is yet to be implemented from the backend, a separate `json` file should be stored inside the 'mocks' folder. **NO STATIC DATA HANDLING INSIDE STORES**


