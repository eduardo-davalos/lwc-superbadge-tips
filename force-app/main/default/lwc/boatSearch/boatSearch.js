import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class BoatSearch extends NavigationMixin(LightningElement) {

    isLoading = false;
    
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
        console.log('search boats');
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
  