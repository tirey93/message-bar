import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageBarService } from '../message-bar/message-bar.service';

@Component({
  selector: 'app-sample-component-2',
  imports: [ReactiveFormsModule],
  templateUrl: './sample-component-2.component.html',
  styleUrl: './sample-component-2.component.scss'
})
export class SampleComponent2Component {
  form = new FormGroup({
    content: new FormControl("", Validators.required),
  });

  constructor(
      private messageBarService: MessageBarService
    ) {
  }

  send() {
    this.messageBarService.sendSimpleMessage(
      this.form.controls.content.value!,
    );
  }

  cleanAll() {
    this.form.reset();
    this.messageBarService.clearAll();
  }
  
  loremIpsum() {
    this.form.controls.content.setValue("This is sample message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt consectetur rhoncus. Sed a convallis nulla. Phasellus vel velit elit. Nunc nec nunc tristique, facilisis libero non, aliquam elit. Fusce lobortis quis enim nec malesuada. Suspendisse risus ex, tempor ac sem sed, ultrices porta tellus")
  }
}
