import { LightningElement } from 'lwc';
import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';

export default class BoatSearchForm extends LightningElement {
    boatType = '';
    boatTypes = [{ label: 'All Types', value: '' }];

    //Initializing methods
    connectedCallback() {
        this.fillBoatTypeValues();
    }

    //Method to fill the values
    fillBoatTypeValues(){
        //Calling apex
        //If success, for each boaType returned we added to the boatTypes array using .map and spread operator
        getBoatTypes()
        .then(result => {
            this.boatTypes = [...this.boatTypes, ...result.map(boatSelector => {
                return { label:boatSelector.Name, value:boatSelector.Id };
            })];
        })
        .catch(error => {
            console.log(error);
        });
    }
}