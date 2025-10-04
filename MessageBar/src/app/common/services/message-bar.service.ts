import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Message, MessageType, MessageTypeForButtons } from "../../message-bar/dtos/message.dto";
import { IncrementationService } from "./incrementation.service";
import { Button } from "../../message-bar/dtos/button.dto";

@Injectable({
    providedIn: 'root'
})
export class MessageBarService {
    private _messageAdded$ = new Subject<Message>()
    private _messageRemoved$ = new Subject<Message>()
    private _clearAll$ = new Subject<void>()
    public messageAdded$ = this._messageAdded$.asObservable();
    public messageRemoved$ = this._messageRemoved$.asObservable();
    public clearAll$ = this._clearAll$.asObservable();

    constructor(
        private incrementationService: IncrementationService
    ) {        
    }

    sendSimpleMessage(content: string) {
        this.sendMessage(content, "information", true);
    }

    sendMessage(content: string, type: MessageType, withCloseIcon: boolean) {
        this._messageAdded$.next({
            id: this.incrementationService.getNext(),
            content: content,
            withCloseIcon: withCloseIcon,
            type: type
        })
    }

    sendMessageWithBottomButtonSet(content: string, buttonPrimary: Button, 
        buttonSecondary: Button, type: MessageTypeForButtons, withCloseIcon: boolean) {
        this.sendMessageWithButtonSet(content, buttonPrimary, buttonSecondary, "bottom", type, withCloseIcon);
    }

    sendMessageWitRightButtonSet(content: string, buttonPrimary: Button, 
        buttonSecondary: Button, type: MessageTypeForButtons, withCloseIcon: boolean) {
        this.sendMessageWithButtonSet(content, buttonPrimary, buttonSecondary, "right", type, withCloseIcon);
    }

    removeMessage(message: Message) {
        this._messageRemoved$.next(message)
    }

    clearAll() {
        this._clearAll$.next();
    }

    private sendMessageWithButtonSet(content: string, buttonPrimary: Button, 
        buttonSecondary: Button, buttonType: "bottom" | "right", 
        type: MessageTypeForButtons, withCloseIcon: boolean) {
        this._messageAdded$.next({
            id: this.incrementationService.getNext(),
            content: content,
            withCloseIcon: withCloseIcon,
            type: type,
            buttonSet: {
                buttonType: buttonType,
                buttonPrimary: buttonPrimary,
                buttonSecondary: buttonSecondary,
            }
        })
    }
}