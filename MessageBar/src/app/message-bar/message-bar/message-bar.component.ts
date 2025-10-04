import { Component, Input } from '@angular/core';
import { Message } from '../dtos/message.dto';
import { MessageBarService } from '../message-bar.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-message-bar',
  imports: [NgTemplateOutlet],
  templateUrl: './message-bar.component.html',
  styleUrl: './message-bar.component.scss'
})
export class MessageBarComponent {
  @Input() message?: Message; 

  constructor(
    private messageBarService: MessageBarService
  ) {
  }

  remove(message: Message) {
    this.messageBarService.removeMessage(message);
  }
}
