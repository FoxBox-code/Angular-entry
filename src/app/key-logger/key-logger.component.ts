import { Component,OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { fromEvent, tap, map , filter} from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit
{

  @ViewChild("keyContainer", {static : true})  input : ElementRef | undefined;
  keys = '';
  @Input() numeric = false;
  ngOnInit(): void
  {
    const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup');

    // logger$.subscribe(evt => this.keys += evt.key);

    logger$.pipe(
      
      map(evt => evt.key.charCodeAt(0)),
      filter(code =>
      {
        if(this.numeric)
        {
          return (code > 31 && (code < 48 || code > 57)) === false;
        }
        return true;
      }),
      tap(digit => this.keys += String.fromCharCode(digit))

    )
    .subscribe();

  }

}
