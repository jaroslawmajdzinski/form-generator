import { Component, Input } from '@angular/core';
import { menuConfig } from '../menu.config';
import { menuConfigT } from 'src/app/types/app.types';

@Component({
  selector: 'app-menu-generator',
  templateUrl: './menu-generator.component.html',
  styleUrls: ['./menu-generator.component.scss']
})
export class MenuGeneratorComponent {
  
  @Input()config!: menuConfigT[] | undefined
  @Input()depth = 0;

}
