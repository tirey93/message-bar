import { Component, OnDestroy } from '@angular/core';
import { MessageBarComponent } from "../message-bar/message-bar.component";
import { MessageBarService } from '../../common/services/message-bar.service';
import { filter, Subject, takeUntil } from 'rxjs';
import { Message } from '../dtos/message.dto';

@Component({
  selector: 'app-message-containter',
  imports: [MessageBarComponent],
  templateUrl: './message-containter.component.html',
  styleUrl: './message-containter.component.scss'
})
export class MessageContainerComponent implements OnDestroy{
  private destroy$ = new Subject<void>();
  messageList: Message[] = []

  constructor(
    messageBarService: MessageBarService
  ) {
    messageBarService.messageAdded$.pipe(
      takeUntil(this.destroy$),
    ).subscribe({
      next: (message => {
        this.messageList.push(message);
      })
    })

    messageBarService.messageRemoved$.pipe(
      takeUntil(this.destroy$),
    ).subscribe({
      next: (message => {
        this.messageList = this.messageList.filter(m => m.id !== message.id)
      })
    })

    messageBarService.clearAll$.pipe(
      takeUntil(this.destroy$),
    ).subscribe({
      next: (() => {
        this.messageList = [];
      })
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
