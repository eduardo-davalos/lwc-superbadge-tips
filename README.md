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