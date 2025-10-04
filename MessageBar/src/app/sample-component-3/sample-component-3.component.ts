import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MessageBarService } from '../common/services/message-bar.service';
import { ButtonType } from '../message-bar/dtos/button-set.dto';

@Component({
  selector: 'app-sample-component-3',
  imports: [ReactiveFormsModule],
  templateUrl: './sample-component-3.component.html',
  styleUrl: './sample-component-3.component.scss'
})
export class SampleComponent3Component {
  form = new FormGroup({
      content: new FormControl("", Validators.required),
      buttonPrimaryText: new FormControl("", Validators.required),
      buttonSecondaryText: new FormControl("", Validators.required),
      buttonsPosition: new FormControl("bottom" as ButtonType, Validators.required),
    });

  constructor(
      private messageBarService: MessageBarService
    ) {
  }

  send() {
    if (this.form.controls.buttonsPosition.value! === "right") {
      this.messageBarService.sendMessageWitRightButtonSet(
        this.form.controls.content.value!,
        {
          displayName: this.form.controls.buttonPrimaryText.value!,
          action: () => console.log("message from primary button")
        },
        {
          displayName: this.form.controls.buttonSecondaryText.value!,
          action: () => console.log("message from secondary button")
        },
        "information",
        true
      );
    } else {
      this.messageBarService.sendMessageWithBottomButtonSet(
        this.form.controls.content.value!,
        {
          displayName: this.form.controls.buttonPrimaryText.value!,
          action: () => console.log("message from primary button")
        },
        {
          displayName: this.form.controls.buttonSecondaryText.value!,
          action: () => console.log("message from secondary button")
        },
        "information",
        true
      );
    }
    
  }

  cleanAll() {
    this.form.reset();
    this.messageBarService.clearAll();
  }

  loremIpsum() {
    this.form.controls.content.setValue("This is sample message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt consectetur rhoncus. Sed a convallis nulla. Phasellus vel velit elit. Nunc nec nunc tristique, facilisis libero non, aliquam elit. Fusce lobortis quis enim nec malesuada. Suspendisse risus ex, tempor ac sem sed, ultrices porta tellus")
  }
}
