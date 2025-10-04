import { Button } from "./button.dto";

export interface ButtonSet {
    buttonType: ButtonType;
    buttonPrimary: Button;
    buttonSecondary: Button;
}

export type ButtonType = "bottom" | "right";