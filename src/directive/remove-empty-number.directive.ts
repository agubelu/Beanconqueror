import {Directive, HostListener} from '@angular/core';
import {NgModel} from '@angular/forms';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[ngModel][remove-empty-number]',
  providers: [NgModel],
})
export class RemoveEmptyNumberDirective {

    // @Output() ngModelChange:EventEmitter<any> = new EventEmitter();

    constructor(private readonly model: NgModel) {
    }

  @HostListener('ionFocus', ['$event.target'])
  public focus(): void {

    console.log('choose');
    const val: any = this.model.control.value;
    // Emit worked aswell but I don't know what its doing in depth
    // this.ngModelChange.emit(parseFloat(val));

    if (val === null || val === undefined || val === 0 || val === '0' || val === '') {
      this.model.control.setValue('');

    }

  }
}
