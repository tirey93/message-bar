import { ButtonSet } from "./button-set.dto";

export interface Message {
    id: number;
    content: string;
    type: MessageType;
    withCloseIcon: boolean;
    buttonSet?: ButtonSet;
}

export type MessageType = "success" | "warning" | MessageTypeForButtons;
export type MessageTypeForButtons = "information" | "error";
