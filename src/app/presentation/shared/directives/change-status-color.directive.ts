import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

export interface statusClassDead {
  status:string
  typeClass:string
};
@Directive({
    selector: '[myClass]',
    standalone: true,
})
export class ChangeStatusColorDirective {
    @Input('myClass') classStatus!: statusClassDead;
    classColor:string[] = [];
    typeColor=''
    constructor(private el: ElementRef, private renderer: Renderer2) {}
    ngOnChanges() {
        // this.renderer.removeClass(this.el.nativeElement, this.className);
        // this.renderer.addClass(this.el.nativeElement, this.getClassName());
        if (this.classStatus) {
          this.getClassName()
        }
      }
      
      private getClassName(): string {
      
        this.typeColor = (this.classStatus.typeClass==='light')?'50':'400';
        switch (this.classStatus.status) {


            case 'Alive':
                this.classColor = [`bg-green-${this.typeColor}`, 'ring-green-600/20', 'text-green-600'];
                break;
            case 'Dead':
                this.classColor = [`bg-red-${this.typeColor}`, 'ring-red-600/10', 'text-red-600'];
                break;
            default:
                this.classColor = [`bg-gray-${this.typeColor}`, 'ring-gray-500/10', 'text-gray-600'];
        }
        this.classColor.forEach(className => {
          this.renderer.addClass(this.el.nativeElement, className);
        });
        return '';
    }
}
