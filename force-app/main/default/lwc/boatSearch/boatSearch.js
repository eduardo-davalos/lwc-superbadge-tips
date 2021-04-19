import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';


export default class BoatSearch extends NavigationMixin(LightningElement) {

    isLoading = false;
    error;
    
    // Handles loading event
    handleLoading() { 
        isLoading = true;
    }
    
    // Handles done loading event
    handleDoneLoading() { 
        isLoading = false;
    }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { 
        let boatTypeId = event.detail.boatTypeId;

        getBoats({boatTypeId:this.boatTypeId})
            .then(result => {
                console.log(result);
                //this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
    
    createNewBoat() { 
        console.log('open new boat creation');
        // Generate a URL to a User record page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Boat__c',
                actionName: 'new'
            }
        });
    }
  }
  