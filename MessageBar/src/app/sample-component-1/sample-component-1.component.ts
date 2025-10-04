import { Component } from '@angular/core';
import { MessageBarService } from '../common/services/message-bar.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageType } from '../message-bar/dtos/message.dto';

@Component({
  selector: 'app-sample-component-1',
  imports: [ReactiveFormsModule],
  templateUrl: './sample-component-1.component.html',
  styleUrl: './sample-component-1.component.scss'
})
export class SampleComponent1Component {
   form = new FormGroup({
      type: new FormControl("information" as MessageType, Validators.required),
      content: new FormControl("", Validators.required),
      withClosing: new FormControl("yes", Validators.required)
    });

  constructor(
    private messageBarService: MessageBarService
  ) {
  }

  send() {
    this.messageBarService.sendMessage(
      this.form.controls.content.value!,
      this.form.controls.type.value!,
      this.form.controls.withClosing.value! === 'yes',
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
