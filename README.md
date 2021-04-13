# Salesforce Challenge Tips for Superbadge "Lightning Web Components Specialist" 

This time we are going to be doing the LWC Superbadge
Here you will be able to read about my solution,
And known more about the development process.

We are going to start step by step

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
- After that i started adding code to the boatSearch lwc. based on the documentation
- Also I started coding boatSeatchForm lwc based on the documentation.