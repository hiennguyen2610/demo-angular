import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent{
  
  @Input() subTotal!: number;
  @Input() tax!: number;
  @Input() discount!: number;
}
