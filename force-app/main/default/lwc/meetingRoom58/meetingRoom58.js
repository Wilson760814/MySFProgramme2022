import { LightningElement, api } from 'lwc';

export default class MeetingRoom58 extends LightningElement {
    @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'}

    @api showRoomInfo = false;

    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.meetingRoomInfo, bubbles :true});

        this.dispatchEvent(tileClicked);
    }
}