import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  @Input()
  isDarkMode = false;

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  @ViewChild('darkModeSwitch', { read: ElementRef }) element:
    | ElementRef
    | undefined;

  constructor(public themeService: ThemeService) {}

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked);
  }
}
