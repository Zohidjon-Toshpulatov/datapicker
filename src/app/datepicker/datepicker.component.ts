import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy',
    appendSelectorToBody: true,
    inline: false
    // other options are here...
  };



  model: IMyDateModel = null;

  constructor() { }

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    // date selected
    console.log('working')
    this.myDpOptions.inline = !this.myDpOptions.inline
  }

  toggle(dp) {
    console.log('hi')
    dp.toggleCalendar();
    this.myDpOptions.inline = !this.myDpOptions.inline
  }

  clearDate(dp) {
    this.myDpOptions.inline = !this.myDpOptions.inline
    console.log(this.myDpOptions.inline)
    this.model = null
  }

}
