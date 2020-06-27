import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dersfilter'
})
export class DersfilterPipe implements PipeTransform {

    transform(value: any[], text: string): any[] {

        if (text == null || text.length === 0) {
            return value;
        }

        text = text.toLocaleUpperCase();

        return value.filter(elem => {
            if (
                elem.note.dersadi.toLocaleUpperCase().includes(text) 
            ) {
                return true;
            }

            return false;
        });
    }

}
