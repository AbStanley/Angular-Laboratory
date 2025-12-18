import { Component } from "@angular/core";
import { DefaultChangeDetectionComponent } from "./default-change-detection-child.component";

@Component({
  selector: "app-parent",
  imports: [DefaultChangeDetectionComponent],
  template: `
    <button (click)="mutateUser()">Mutate user.name</button>
    <app-child [user]="user"></app-child>
  `,
})
export class ParentComponent {
  user = { name: "Stanley" };

  mutateUser() {
    this.user.name = "Updated Stanley";
    console.log("Mutated user.name");
  }
}
