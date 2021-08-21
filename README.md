# Salesforce Challenge Tips for Superbadge "Lightning Web Components Specialist" 

This time we are going to be doing the LWC Superbadge
Here you will be able to read about my solution,
And known more about the development process.

We are going to start step by step


## DAY 1, First Commit
## Challenge 1 Before you start (Prework)

First we need to take care of the prework, steps:
- Create a new trailhead playground or a dev org activating my domain.
- In session setting, deactivate (Enable secure and persistent browser caching to improve performance), so we can test the updates faster.
- Install the unlocked package [LWCPackage] (https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000008ateoAAA)
This package will create the object configurations, tabs, pagelayouts and initial code of the project.
- Read the Superbadge QA (https://trailhead.salesforce.com/help?article=Lightning-Web-Components-Specialist-Superbadge-Trailhead-Challenge-Help)


## Challenge 2 Build the Boat Message Service channel

- We need to create a [Lightning Message Service Channel]  (https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_message_channel)
This will help us to communicate our LWC via Lightning Message Service API, with everything (DOM, VF, LC, Lightning pages, etc)
-Create and deploy the Lightning message service, with the Trilhead specifications

## Challenge 3 Get BoatDataService class ready for action

- This one is a simple challenge just review the BoatDataService class, and add AuraEnabled and or chacheable to those methods who need it.

## Challenge 4 Build the component boatSearchForm

- The first thing i did, was to create the boatSearch lwc, and added exposure to lightning app pages.
- Then I decided to create the Lightning page, then Lighnting tab, then lightning app, named Friend Ships based on the requirements, so i can see the functionality of the component.
- After that i started adding code to the boatSearch lwc. (The search container where we are grouping the search and results, also it has a button to create new boats ) based on the documentation
- Also I started coding boatSeatchForm lwc based on the documentation. (a pick list to select boats types)

## DAY 2, Second Commit

- We still working on challenge for, first we start refactoring boatSeatchForm javascript, because the documentation ask for specifict variables, and function names.

- Now we created an event from boatSeatchForm, that send the boatTypeId to the parent componet, we recieved the id, and look in apex for a list of boats based on boat type. (firing Event from child to parent )

- Here is a tricky part, the searchOptions in the boatSearchForm, it is necessary to add a track decorator to complete the challenge, I had a hard time finding this issue.

## Challenge 5 Build the component boatTile

-The first thing to do is create the boatTile component, from this point, i recomend create the component using the given template in the superbadge trailhead, because it is necessary to have all the same naming for methods and variables

- Then we worked on the class selected, to change dynamicaly the class based on the boat id, of the current and selected boat.

- Then we fire an event from child to parent, if the current boat is selected, we send the boat id to the parent.

- Then we return the url of the boat picture in the get method for image background

- Finally, we complete the html adding the values to show from the boat, name, price etc.

## DAY 3, Third Commit

## Challenge 6 Customize the component boatMap

- For this challenge we need to update the boatMap lwc that we installed in our org previously

- Update the code according to the trailhead instructions, it is straightforward (We need to update some arrays, use lightning/uiRecordApi to get record value, and handle the boatid ussing messageServices)

- Important : Import all the necesary messageServices {APPLICATION_SCOPE, subscribe, MessageContext } 

## Challenge 7 Build the component boatsNearMe and display boats near you

Here we are going to build the boatsNearMe component, so we will be able to get a map data with boats.

- First create the boatsNearMe lwc and copy the template from the challenge, doing this we assure the correct method and variables names.

- This one was a little bit harder, i struggled with the correct location of every element, you must be very carefull where you put every single line, also be carefull with  constants,  and fo not forget to parse de JSON response.

## DAY 4, Fourth commit

## Challenge 8 Build the component boatSearchResults

We started with the first tab "Galery"

- First we created the boatSearchResults component, using the template from the lwc.

- We created the functions to recieve the selectedBoat, to put the message with the selected boat.

- Another important aspect is the getting all the boat type id from the parent, we get it with a public function
then the public function, assign the id to a wired variabel, wich causes an update to apex method, and  the wired apex get all the boats from that specific type

- Then we iterate trough all the boats to show them on screen, y was able to iterate and show the boat name, but i am getting an error when creating all the boats tiles, i need to fix it

## DAY 5, Fifth commit
## Challenge 8 part 2
 Ok the problem was very simple to solve, in boarTile.js, backgroundStyle method, the i used the variable boat, without this.

 - Today we will start working on the Boat Editor

 - First we create a datatable using the boats records (NOTES: Check thay the org currency is the same as the trailhead, in my case USD, also when creating the datatable use, fieldName: 'Length__c', instead of the api field)

 - Then we updated the loading event functionallity

 - Do not forget to add async to the update part

 - FInally we added the boats near me component to the html

## Day 6, Sixth commit
## Challenge 9 Boat search component

Previously we have worked on this componet , so almost everything is ready for this challenge,
I am getting an error about the spinner, so we need to fix this in order to complete the challenge.

-I solved an issue in boatMap js, updateMap method variables were wrong.
-And for the searchComponent, i only missed to add variant="brand" into the spinner tag

## Challenge 10 fiveStarRating

-The fiveStarRating is already creaded, so first we need to get it on our visual studio
-Afer that we just need to follow the steps described in the superbadge, it is pretty straightforward.

## Challenge 11 boatAddReviewForm

-Now it is time to create boatAddReviewForm component, as always we will initiate using the template in the superbadge
-Begin creating lightning-record-edit-form with its respective imports
-Add the required fields with the custom labels
-Add the stars component to the form, and use the event to obtain the value
-Finish with the submit method and success method
-Do no forget to create a new event on the success method

## Challenge 12 boatReviews

-We are going to create the boatReviews component to visualize all the boats reviews
-Here we are going to use NavigationMixin so we could travel between diferent salesforce pages do not forget to extend the class
-We are going to add a little spinner
-We are also making an iteration for every review, so we can see each review created
-For each review we are going to show a picture from the creator, and its data, an also the review, and the star component

## Challege 13 boatDetailTabs

-We are going to create the boat details container, were we are going to add all the details and reviews
-Start making the component available to use on lightning pages
-Then copy the given code on the trailhead and create the component
-Import all the necesary labels, and start adding them to the html
-Initialize the variables create the imports
-Get data for the wired variable, using uiRecordApi and using the boat event to recieve the selected id
-Build a tabset on the html
-Create the details lightning card, with name icon details and button
-Extend navigation mixin to the class, and link the button to the deetail page
-Add the lightning-record-view-form to see extra fields
-Relate the reviews components to the other tabs.