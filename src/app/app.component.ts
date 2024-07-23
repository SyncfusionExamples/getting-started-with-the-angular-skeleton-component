import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkeletonModule } from '@syncfusion/ej2-angular-notifications';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkeletonModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public isDataLoading = true;
  ngOnInit() {
    setTimeout(()=>{
      this.isDataLoading = false;
    },3500);
  }
  title = 'myangularapp';
}
