//lwc framework
import { LightningElement, wire, api } from 'lwc';

// Custom Labels Imports
import labelPleaseSelectABoat from '@salesforce/label/c.Please_select_a_boat';
import labelDetails from '@salesforce/label/c.Details';
import labelReviews from '@salesforce/label/c.Reviews';
import labelAddReview from '@salesforce/label/c.Add_Review';
import labelFullDetails from '@salesforce/label/c.Full_Details';

// Boat__c Schema Imports
import BOAT_ID_FIELD from '@salesforce/schema/Boat__c.Id';
import BOAT_NAME_FIELD from '@salesforce/schema/Boat__c.Name';
const BOAT_FIELDS = [BOAT_ID_FIELD, BOAT_NAME_FIELD];

//To get info of the record
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

//to navigate to a standard salesfroce page
import { NavigationMixin } from 'lightning/navigation';

//Import the message servie channel requirements
import {APPLICATION_SCOPE, subscribe, MessageContext } from 'lightning/messageService';
import BOATMC from '@salesforce/messageChannel/BoatMessageChannel__c'

export default class BoatDetailTabs extends NavigationMixin(LightningElement) {
  @api boatId;

  // Getter and Setter to allow for logic to run on recordId change
  // this getter must be public
  @api get recordId() {
    return this.boatId;
  }
  set recordId(value) {
    this.setAttribute('boatId', value);
    this.boatId = value;
  }


  error = undefined;

  // Initialize messageContext for Message Service
  @wire(MessageContext)
  messageContext;

  // Wire the getRecord method using ('$boatId')
  @wire(getRecord, { recordId: '$boatId', fields: BOAT_FIELDS })
  wiredRecord;

  label = {
    labelDetails,
    labelReviews,
    labelAddReview,
    labelFullDetails,
    labelPleaseSelectABoat,
  };
  
  // Decide when to show or hide the icon
  // returns 'utility:anchor' or null
  get detailsTabIconName() { 
      if(this.wiredRecord.data != undefined){
        return 'utility:anchor';
      }
      return null;
  }
  
  // Utilize getFieldValue to extract the boat name from the record wire
  get boatName() {
    return getFieldValue(this.wiredRecord.data, BOAT_NAME_FIELD);
   }
  
  // Private
  subscription = null;
  
  // Subscribe to the message channel
  subscribeMC() {
    // local boatId must receive the recordId from the message
    // recordId is populated on Record Pages, and this component
    // should not update when this component is on a record page.
    if (this.subscription || this.recordId) {
        return;
      }
      // Subscribe to the message channel to retrieve the recordId and explicitly assign it to boatId.
      this.subscription = subscribe(
        this.messageContext,
        BOATMC,
        (message) => {this.boatId = message.recordId;},
        { scope: APPLICATION_SCOPE }
      );
  }
  
  // Calls subscribeMC()
  connectedCallback() {
    this.subscribeMC();
   }
  
  // Navigates to record page
  navigateToRecordViewPage() {
      // View a custom object record.
      this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: this.boatId,
            actionName: 'view'
        }
    });
   }
  
  // Navigates back to the review list, and refreshes reviews component
  handleReviewCreated(event) { 
    this.template.querySelector('lightning-tabset').activeTabValue = this.label.labelReviews;
    this.template.querySelector('c-boat-reviews').refresh();
  }
}
