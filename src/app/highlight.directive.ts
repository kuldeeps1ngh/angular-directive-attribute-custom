import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() appHighlight: string = '';
  constructor(private ele: ElementRef) {
    // this.highlight('yellow');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }
}