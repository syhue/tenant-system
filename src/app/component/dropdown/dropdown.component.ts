import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownComponent),
            multi: true,
        },
    ],
})
export class DropdownComponent<T> implements OnInit, ControlValueAccessor {

    @Input() value!: T;
    @Input() options!: DropdownSelection[];
    @Input() placeholder!: string;
    @Output() valueChange = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    writeValue(value: any) {
        this.value = value;
    }
    registerOnChange(fn: any) {
        this.onChange = fn;
    }
    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    //control value accessor
    onChange: any = () => { };
    onTouch: any = () => { };

    update(event: any) {
        this.onChange(event.target.value);
        this.onTouch(event.target.value);

        this.valueChange.emit(event.target.value);
        // this.callback.emit(event.target.value);
    }
}

export interface DropdownSelection {
  id: number;
  name: string;
}
