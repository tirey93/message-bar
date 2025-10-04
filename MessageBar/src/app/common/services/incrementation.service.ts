import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class IncrementationService {
    private _currentId = 0;

    getNext() {
        this._currentId = this._currentId + 1;
        return this._currentId;
    }
}