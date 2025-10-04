import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleComponent1Component } from "./sample-component-1/sample-component-1.component";
import { SampleComponent2Component } from "./sample-component-2/sample-component-2.component";
import { MessageContainerComponent } from "./message-bar/message-containter/message-containter.component";
import { SampleComponent3Component } from "./sample-component-3/sample-component-3.component";

@Component({
  selector: 'app-root',
  imports: [SampleComponent1Component, SampleComponent2Component, MessageContainerComponent, SampleComponent3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
