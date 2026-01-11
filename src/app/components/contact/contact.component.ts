import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected emailPersonal = 'daniel.odstrcil574@gmail.com';
  protected emailBand = 'daneil.odstrcil@orbiszlin.cz';
  protected personal = '@daneil.odstrcil';
  protected band = '@daniel';
}
