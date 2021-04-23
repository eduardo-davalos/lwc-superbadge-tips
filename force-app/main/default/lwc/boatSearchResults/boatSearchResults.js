import { api, LightningElement, track, wire } from 'lwc';
import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';

import { publish, MessageContext } from 'lightning/messageService';
import BOAT_MESSAGE_CHANNEL from '@salesforce/messageChannel/BoatMessageChannel__c';



const SUCCESS_TITLE = 'Success';
const MESSAGE_SHIP_IT     = 'Ship it!';
const SUCCESS_VARIANT     = 'success';
const ERROR_TITLE   = 'Error';
const ERROR_VARIANT = 'error';
export default class BoatSearchResults extends LightningElement {
  selectedBoatId;
  columns = [];
  boatTypeId = '';
  @track boats;
  isLoading = false;
  error;
  
  // wired message context
  messageContext;

  // wired getBoats method 
  @wire (getBoats, {boatTypeId:'$boatTypeId'})
  wiredBoats({error, data}) { 
    if(data)
      {
          this.isLoading = true;
          this.boats = data;
          console.log('data'+data);
          console.log('boatsdata'+this.boats);
      }else if(error){
          console.log('errot');
        this.isLoading = false;
      }
  }
    
  // public function that updates the existing boatTypeId property
  // uses notifyLoading
  @api
  searchBoats(publicBoatTypeId) {
    this.boatTypeId = publicBoatTypeId;
   }
  
  // this public function must refresh the boats asynchronously
  // uses notifyLoading
  refresh() { }
  
  // this function must update selectedBoatId and call sendMessageService
  updateSelectedTile(event) { 
        this.selectedBoatId = event.detail.boatId;
        sendMessageService(boatId);
  }
  
  // Publishes the selected boat Id on the BoatMC.
  sendMessageService(boatId) { 
      publish(this.messageContext, BOAT_MESSAGE_CHANNEL,  {recordId:boatId});
  }
  
  // The handleSave method must save the changes in the Boat Editor
  // passing the updated fields from draftValues to the 
  // Apex method updateBoatList(Object data).
  // Show a toast message with the title
  // clear lightning-datatable draft values
  handleSave(event) {
    // notify loading
    const updatedFields = event.detail.draftValues;
    // Update the records via Apex
    updateBoatList({data: updatedFields})
    .then(() => {})
    .catch(error => {})
    .finally(() => {});
  }
  // Check the current value of isLoading before dispatching the doneloading or loading custom event
  notifyLoading(isLoading) { }
}
