# Best Practices

## Introduction

This entire project was filled with self-learning so some of the order in the methodology was a little different in practice. When using Angular I found the best practise after implementing the result.
In my comparisons I will reference many best practises I should be using but never got around to adapting into the project.

Component best practises don&#39;t really exist in any meaningful sense so container and presentational components are the only example I could source from reputable developers. Angular take on components is shallow and use there like classes but they are so much more powerful.
I also used something called the SAM pattern to help me understand containers and presenters, but it is not a best practice I can apply to this project.

Overall Angular is latest version of front-end systems, Web-based apps are the future of business apps and websites so this a good area for a project to be in.

## Angular

## Brief

I originally attempted to create Angular9 project with Visual Studio, but the resulting project was an ASP.Net program and not a website. The resulting code would be compiled into a program that could run inside the bowser. If I needed to create something like a game this might be the better option.

From all the research I came across 3 big things Angular CLI does differently to other JavaScript websites. Most of the differences is in the creation of smart components that have an MVC layout, these include and html and a Typescript&#39;s. They behave like miniature apps and a very similar structure to java and C# apps.
 The Angular CLI used to make these smart components is installed though node.js with the help of npm packages.

## Node.js

Node.js is primary terminal to interface with Angular CLI. Once node.js is installed you need to install the npm package manager from there the Angular CLI can be installed as a package with.

npm install -g @Angular/cli

From here a bunch of ng commands.

### Create an app

ng new my-app

Many additions can be added to this command to create different styles of projects or even example projects.

**Start app**

_cd my-app_

_ng serve_

### Other commands

A few commands that will come in handy are

**Create a new Component**

_ng generate component &quot;Name&quot;:_ Very simple and adds the component name to app structure to avoid errors

**Add a Module**

_ng generate module routing:_ This can generate structure but the reference to the module (unless you want to create one) will have to be set manually

## HTML: App.component.html

There is no longer just html but an app and by extension many components. There is only one app and Within the single apps component there can be many sub-components, these can be switched between with a router.

All other html pages must use this router module to switch between html pages.

## Scripts: App.Component.ts

The AppComponentis a bit like the root or index of the html page. In here is all the logic of the app, it acts like a script. It can store functions which can be later called with buttons like a JavaScript DOM Event Listener.
 There is amazing power in this rather than having a script find a buttons id and adding listener to it.
 The AppComponent can be updated and immediate the content inside the html can be changed.

## Header: App.modules.ts

This does behave a lot like a header allowing you to import varies scripts that are named modules, these can used inside the other two components.
 There are some great advantages as well since modules can be directly access using their special tags. The difference here is that a header with scripts need class or id tag to use their scripts.

## Templating

The final amazing thing these can become templates with just an app.component.ts as the core TypeScript. This lets you create small modular HTML inside a larger HTML and these modular scripts could be reused anywhere; This creates the ng content client side.
 Pushed to the limit an index html could house the entire website and you would never need to leave it or need reload the page.

## Modules

Things I could use to add extra features to based Angular libraries.

### Observables

These are an interface to handle asynchronous data. They are safer than ngModel which is similar, but observables can be used for much more than just html and TypeScript binding.

Observables are the safest way to two-way bind variables/data.

### Lazy loading

By using Routes, you can change the route div tag to a different component&#39;s selector. These other components are never loaded until the event changes the router link. ![](RackMultipart20200715-4-1q7atxy_html_c861a7352e77670d.png)

The advantage is that your app doesn&#39;t load other pages until it needs to speed up initial webpage load times by adding some website navigation load times.

### Singleton service

I know of this since it used in many Angular tutorials but never played around with it so I&#39;m not too sure of way to use properly. It seems like its good way to store constant data since it can transcend different components.

It is sometimes used to observe changes in data (two-way databinding) in Angular.io but I have found that isn&#39;t always a best practise.

## Database

The database used in Partly is very complex and multiple types of cloud-based servers are used. There are many options to replicate this, but I need to keep in mind my project does not need to deliver a database

## Xampp with PHP to use MySQL and Workshop

This is what I used previously with my PHP class (BCPR294 - Server-Side Web Programming) and is easy to set up and doesn&#39;t require excessive knowledge of server commands.
 The biggest downside is I must use php code to interact with the server and php is not part of the deliverables.

## Node.js with express to use MongoDB

This could be looked at as the most official way to have a large database implemented into Angular since this is the most common one, I have seen personally.

The real downside is you must run the node.js server alongside the app (like with Xampp running Apache). The routes can be set up inside Angular, but I will need manager the server through node.js commands unlike Xampp that has a UI.

If I were to create from scratch this would be the best implementation since I could create a front end to control the server.

## Firebase

(The obvious choice)

Again, I have used this during the mobile app development class. (BCIT388 - Mobile Technology).

The main thing to note it is just the Firebase website and a module called Angularfire needed for its implementation. The running of the server is done through the website interface and does not need to be managed by me.
The module seems to be made by the Angular team but is extremely new and has almost no tutorials outside the modules GitHub Readme.


The main thing to note in its implementation is I must use a Firebase key or authentication ticket to access the database.

# Forms

Forms are HTML5 tags that can export and compile different input field into an object. PHP can unpack this object to then run some logic for an intended result like storing the information in a database.

Validation would have to be done with JavaScript with and on submit event or with the php form submission. While you could construct form validation with complex JavaScript event listeners a built-in approach with Angular is much better

## Angular: Template or Reactive

- Template could be looked at as the older AngularJS style
- Reactive is the newer but similar style to html and JavaScript.

Templates validation logic is normally inside the html and therefore asynchronous so it will validate after the user is done typing. This is very handy with complex form submissions.

Reactive validation would put most of the logic in the component and is normally not asynchronous so validation would take place after the submission. This is exactly like normal HTML.

## Reactive

After much thought I believe I don&#39;t need the extra features or work associated with reactive templates specially to make them asynchronous.

At the same time looking over materials module there is the ability to control the user&#39;s inputs. It can even provide hints and error statements when needed.

This means I get all the advantage of templates forms being asynchronous and be able to use reactive forms with their much better logic.

We won't need overly complex validators and materials can provide the asynchronous user-friendly approach.

### Material or native html

Materials provides us with a way to reference an object that can hold let&#39;s say combo box options. This will help especially when templating input elements since many alternative options could be applied to a combo box. ![](RackMultipart20200715-4-1q7atxy_html_1226a3be27317e4e.png)

This added focus on separating logic really helps us maximise the OOP of any given form.

### Hints with Material

Hints are amazing tool and provide what I wanted to help the user fill out the forms


You could submit the, but the reactive validator will check the field as well.

## Reactive Validation

One of the amazing abilities of Angular form&#39;s is the built-in validators. These can be set by assigning in the Form Control class with a validator, this will check the user input before they submit the form (template forms only).


# Presentational and Container Components

This is such a complex best practice to address since Angular itself does not use or recommend it, but I believe this is immensely power for front end systems.
 You could look at it like purposeful merging of similar scripts into a component.

## Presentational components

The form presentational component is where all the div tags or displays are stored. Multiple presentations could be under the umbrella of a single container and each presentation is a separate element on the page. For example, navigation, side bar, content, grid; all being separate presentations.

The advantage to this is that you could customise, move and reuse different presentations with another container.

Events will control that state of each container so a child Presenter class that triggers and event will pass it to the parent containers class changing the state.

## Container components

The presentational component won&#39;t have any logic but will have in inputs and outputs.
 The presentation is only concerned with how the app looks.

The container holds all the information for a page and can be small with just references to the child presentations or very extensive for example holding every word in the page to switch the language.

The power of this smarter component is that it can be more reactive to user inputs rather than having extensively functions in the app itself that are being called. Every page or container would just react to the users input then and there.

### Inputs

Init or onload inputs, most basic and will only be updated on refresh.

One-way databinding would let you change for example the language without reloading the page.

An Obserable object or two-way binding could be used but rarely and should involve a function or service retiring a value. A clock or timer could be a two-way bound variable.

### Outputs

These are simple since they are event handlers passing return variables into the parent.
 Sometimes these a event from the button being pushed but can even be events triggered by conditions.

# Dynamic Creation

Structured directives are the root of dynamic creation in Angular, they are an amazing feature for only turning off or on content without hiding it but also duplicate content with a foreach style loop, they can also check a conditional state and be very direct with templates.


## NG

The ng literally means Angular so NgIf&#39;s true name is Angular&#39;s If.

### NgIf

A simple conditional statement to disable content.

### NgFor

Retains the conditional element by duplicating any content inside an array if there is any. Each loop in the array it could also provide a completely different element on the page.

### _NgSwitch_

Very similar but instead of a loop its askes the state of the given directive. If the state is not present it will not show the contents.

### Ng-template, ng-container, TemplateRef and ViewContainerRef

These each provide different way on templating content. They are like div tags that can either be manipulated with other ng directives or completely replaced. TemplateRef and ViewContainerRef can act like variables to be placed on the page.

You can even pass a template as a input placing it with ngTemplateOutlet.

## Dynamic form creation

The dynamic forms will build on ng-container duplication.

I will then add the form submissions and the creation or updating of the database.

Looking over the Angular.io information some of that is shown could apply to my forms but will overly complicate them.

- [[ngSwitch](https://angular.io/api/common/NgSwitch)]: this is for logic but I won&#39;t need it for such a simple form
- Subcomponents: This is tricky, but I want all component to be self-contained and not rely on too many smaller components.
- Asynchronous and observables: unlikely due to one-way binding being much better for forms
- Looping validation logic (or others): I would rather hard code it, so bug testing it is easier.

I already know about \*ngFor so I just need to supply it with the correct data.


# Implementation

# Angular

Not much needs to be said on the implementation since I used most of the Angular set up and only the modules are an option aspect of best practice.

I created everything I needed directly from the best practices of Angular.io.

## Modules

I only used observables.

Lazy loading was never needed since I&#39;m only developing component deliverables so concerns about loading size or initialization speed is not a concern with only a few components.

Singleton service has potential but not in the first version of the components since I want things to work in the simplest manor, too much reuse with injectable services might lead to complex bugs.

### Observables

Only with firebase database access/instance and it is only one-way(read). The writing or setting of the database will be done with an event.

## Database

## Brief

Out of all the database types only one is small enough to not impact development time in its implementation. If the deliverables had to ship with a database firebase would be a poor choice.

## Firebase

The best and easier solution is to use the database Angular was meant for, A cloud database. MongoDB with AWS is and option, but firebase has a built-in database, so I chose that.

There is only one source for this since its new but the best thing I found is a set function (since I can already read the database)

| set(value: T) | Replaces the current value in the database with the new value specified as the parameter. This is called a  **destructive**  update, because it deletes everything currently in place and saves the new value. |
| --- | --- |

This will let me create and update with one function so no need for any logic.

## Database structure

I used separate formGroups instead of just using the profileForm (I laid out before).

- businessName
- fullName
- email
- address
- number
- website
- gst
- notes

The advantage to sperate forms is that it is easier to sort back into the formData since the output of forms is just and object. This becomes crucial when I set the data on the firebase.

Firebase -\&gt;formData-\&gt;\*ngFor&amp;formGroups-\&gt;onSubmit-\&gt;formData-\&gt;Firebase

These all need to be consistent and not generate other types of array/object formats. This means the database will contain arrays indexes of 0 since even every data entry could have potential duplications (I won&#39;t use them)

Formatting between them is possible but this should be relegated to another component one not required by the specifications.

# Forms

Reactive forms need all the validation to be assigned on the creation of each input, so I need to map out what I need before I&#39;m implement any form fields. I looked for best practised during the creation of each validation field.

## Validation required

The most obvious thing that needs to be a validator is anything I use as a restriction or hints in the form materials.

Error logic should be present as an individual element to be added during the presentation.

| Input Name | Input type | Input hint or restriction | Validation needed |
| --- | --- | --- | --- |
| Company name | Text | No symbols but some exceptions, required | RequiredPattern |
| First name | Text | No symbols, required | RequiredPattern |
| Last name | Text | No symbols, required | RequiredPattern |
| Email | Email | 2 email segments with different symbol requirements, required | RequiredEmail |
| Number | Number | Just Numbers, + at least 8, max 13 | PatternminLengthmaxLength |
| Website | URL | No symbols except hyphen and full stop | Pattern |
| Address | Text Area | No symbols | Pattern |
| City | Text | No symbols | Pattern |
| Postal | Number | Just numbers, must be 4 | PatternminLengthmaxLength |
| GST No. | Number | Just numbers | Pattern |
| Notes | Text Area | No symbols | Pattern |

# Presentational and Container Components

## Separate a container from a normal component

The general rule is all the logic related to interaction should be in a container (Model).
 Everything related to displaying data should be in the presentational (View).

The Form component can be split between these two new components

### Container

- Global Variables
  - Required Form: string
  - Form ID (Database reference): string
  - Any database object or observables
  - formData: array, this will be the input needed for the presentational
- Construct Instances
  - Set the formData
  - Create connection to database
  - Snapshot database data
  - Set the formData based on the Form ID
- Set Database: output function
  - The output of the form groups
  - Update the formData with output
  - Set the database based on formData

### Presentational

- Global Variables
  - Each form Group needed
  - formData: Input
  - addData: Output Event
- Reactive Form Validation
  - For each form group based on the formData
- Submission Event
  - Pass the form groups as an object into the parent class

### Note: Asynchronous form

An Asynchronous form is possible although not really needed for a simple form like this.

The advantages to the type of form is data can be observed without a submission event. This would be good for form validation of a password&#39;s strength or updating a table without triggering an event.

Observables would be the best way to achieve this rather than something like two-way binding, another option is using ng triggers whenever a user edits a input box.


# Dynamic Creation

The best way to do this is provide data to \*ngFor is a default array of objects with array of objects inside them. I could use switches but if I just render or draw what is inside the array object.

This was on the Angular website and showcases how I can do it. The advantage is that It could be an input from the container, the one-way data binding would generate content instantly.

# Compare and Contrast

| **Section** | **Description** | **Researched?** | **Attempted?** | **Implemented?** |
| --- | --- | --- | --- | --- |
| Angular | App: Creation with Ionics | No: Although I did play around with it, I never formally researched it for the project | Yes: I played around with it before I started the project | No: Partly does not use Ionics so I could not either. |
| Angular | App: Creation with Visual Studio | No: Native Angular can be generate with Visual Studio. | Yes: The native Angular generated by visual studio is inside ASP.NET so it really is C# project. | No: The result would be a ASP.NET executable, not a true web-based angular app. |
| Angular | App: Creation with node.js | Yes: node.js to install the Angular CLI which gives access the Angular command ng for generations | Yes: Project files where generated fine and could be run with &quot;ng serve&quot; command. | Yes: The project my-app was generated and is a web-based app. |
| Angular | Module: Observables | Yes: I researched many uses for it and how you subscribe to an observable. | Yes: I did end up using it to observe the Firebase database. | Yes: The database list is a snapshot and a new one will generate if the database gets updated. |
| Angular | Module: Lazy loading | Yes: I did research it, but this was after finding out about it during my first milestone | No: I had already started coding without it and never attempted to add it. | No: The module was never added. |
| Angular | Module: Singleton service | Yes: I investigated this to create some sort of session variable for formData. | No: I never attempted to create a service to hold session variables | No: The container was good enough to hold variables like formData |
| Database | MySQL: Xampp with PHP(Apache) | No: I only researched how to run MySQL with node.js but this is not an ideal set up even if possible. | No: It would require a deliverable (php script) not required. | No: html must implement php while Angular outputs html, so I don&#39;t need it. |
| Database | MongoDB: Node.js with express | Yes: This is a good database set up | Yes: I tried to get a node.js server going but struggled | No: I spent 10 hours trying to set up the server but realized it was to much work for this implementation. |
| Database | Firebase: Realtime Database with Angular | Yes: Even with limited server control this was a good set up, especially as a temporary database | Yes: The set-up was hard but came directly from the Angular module GitHub | Yes: after a bit of playing around it all worked with either an object or list observable. |
| Forms | Validation: Template | Yes: I investigated this since it was how AngularJS does validation and it is asynchronous | No: Partly does not use Template so I decided not to attempt implementation | No: Reactive can be asynchronous and can even be Whitebox tested since the validation is separate from the html. |
| Forms | Validation: Reactive | Yes: This was part of the angular tutorials and is much newer than templates | Yes: Partly already uses it so I must follow their implementation | Yes: the result is a much cleaner validation |
| Component design | Design Pattern: OOP or Default | Yes: This is what all the angular tutorials use, many components all having a single responsibility | Yes: I used this to begin with based off the tutorials | No: I transitioned all the components into another pattern |
| Component design | Design Pattern: Presentational and container | Yes: Rather than multiple components each component represents a feature in the front-end | Yes: I did extensive research to divide my components onto this pattern | Yes: the result might be large classes but if executed properly will make the front-end system much simpler to expand on. |
| Dynamic Creation | Angular: If | Yes: Most basic structured directive that can turn off or on content | Yes: I used this for the initial attempt at form inputs. | No: I wanted dynamic creation, so I didn&#39;t need this directive |
| Dynamic Creation | Angular: For | Yes: The most universal structured directive to generating content | Yes: An array can generate or even disable content | Yes: This is what I ended up using for dynamic creation. |
| Dynamic Creation | Angular: Switch | Yes: Conditional rendering is another possible option | No: I would rather generate content from an array and not a switch | No: the result would be a larger html rather than larger class code. |
| Dynamic Creation | Angular: Container | Yes: There are many types, but I used containers | Yes: Containers and NgFor to duplicate content | Yes: This worked amazingly |

## Bibliography

abramov, D. (n.d.). _Presentational and Container Components - Dan Abramov - Medium_. Retrieved from medium.com: https://medium.com/@dan\_abramov/smart-and-dumb-components-7ca2f9a7c7d0

Angular . (n.d.). _Angular - Lazy-loading feature modules_. Retrieved from angular.io: https://angular.io/guide/lazy-loading-ngmodules

Angular . (n.d.). _Angular - Observables in Angular_. Retrieved from angular.io: https://angular.io/guide/observables-in-angular

Angular . (n.d.). _Angular - Setting up the local environment and workspace_. Retrieved from angular.io: https://angular.io/guide/setup-local

Angular . (n.d.). _Angular - Singleton services_. Retrieved from angular.io: https://angular.io/guide/singleton-services#providing-a-singleton-service

Angular . (n.d.). _Angular - Structural directives_. Retrieved from angular.io: https://angular.io/guide/structural-directives#templateref-and-viewcontainerref

Angular . (n.d.). _Angular - User input_. Retrieved from angular.io: https://angular.io/guide/user-input

Angular. (2019, APRIL 26). _Angular ng-content and Content Projection - The Complete Guide_. Retrieved from blog.angular-university.io: https://blog.angular-university.io/angular-ng-content/

Angular. (n.d.). _Angular - Building dynamic forms_. Retrieved from angular.io: https://angular.io/guide/dynamic-form

Angular. (n.d.). _Angular - In-app navigation with routing_. Retrieved from angular.io: https://angular.io/guide/router

Angular. (n.d.). _Angular - Tour of Heroes app and tutorial_. Retrieved from angular.io: https://angular.io/tutorial

Angular. (n.d.). _Angular - Validating form input_. Retrieved from angular.io: https://angular.io/guide/form-validation

Angular. (n.d.). _Angular ng-template, ng-container and ngTemplateOutlet: Guided Tour_. Retrieved from blog.angular-university.io: https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/

Angular. (n.d.). _angular/angularfire: The official Angular library for Firebase._ Retrieved from github.com: https://github.com/angular/angularfire

Angular Architecture. (2020 , April 24). _Angular Architecture: Container vs Presentational Components Pitfalls_. Retrieved from blog.angular-university.io: https://blog.angular-university.io/angular-component-design-how-to-avoid-custom-event-bubbling-and-extraneous-properties-in-the-local-component-tree/

Angular. (n.d.). _Getting started | Angular Material_. Retrieved from material.angular.io: https://material.angular.io/guide/getting-started

angular-university. (n.d.). _Angular Forms Guide: Template Driven and Reactive Forms_. Retrieved from blog.angular-university.io: https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/

BezKoder. (2020, April 20). _Angular 8 + MongoDB example with Node.js Express: Build CRUD App - BezKoder_. Retrieved from bezkoder.com: https://bezkoder.com/angular-mongodb-node-express/

Marx, L. (2019, May 09). _Angular NgFor: Everything you need to know | malcoded_. Retrieved from malcoded.com: https://malcoded.com/posts/angular-ngfor/#can-we-increase-the-performance-of-ngfor

mozilla. (n.d.). _The HTML autocomplete attribute - HTML: Hypertext Markup Language | MDN_. Retrieved from developer.mozilla.org: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete

Nielsen, L. G. (2018, November 06). _Container components with Angular - Angular inDepth_. Retrieved from indepth.dev: https://indepth.dev/container-components-with-angular/

Pandya, M. (2018, Nov 30). _Angular Material Design Components With Reactive Form - Part Two_. Retrieved from www.c-sharpcorner.com: https://www.c-sharpcorner.com/article/angular-material-design-components-with-reactive-form-part-2/

PHP Enthusiast. (2018, August 04). _Learn to code Angular and PHP app | PHPenthusiast_. Retrieved from phpenthusiast.com/: https://phpenthusiast.com/blog/develop-angular-php-app-getting-the-list-of-items

Regmi, K. (2019, Feb 22). _How to create forms dynamically in Angular 7 using FormControl_. Retrieved from medium.com: https://medium.com/@krishnaregmi/how-to-create-dynamic-forms-in-angular-7-using-formcontrol-a443a2c5e3a9

Small Firm Service. (n.d.). _Using CHARACTERS and SYMBOLS in Company Names_. Retrieved from www.smallfirmsservices.com: https://www.smallfirmsservices.com/characters-and-symbols-company-name/

Wikipedia. (n.d.). _Email address - Wikipedia_. Retrieved from en.wikipedia.org: https://en.wikipedia.org/wiki/Email\_address
