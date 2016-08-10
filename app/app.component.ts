import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <table class="jumbotron text-center" style="width:100%;height:100%;background-color:black">
    <tr>
        <td>    <button (click)="onPrevious()" class="btn btn-default" [disabled]="prev_disabled">Previous</button>   </td>
        <td>    <img [src]="images[current_image]">  </td>
        <td>    <button (click)="onNext()" class="btn btn-default" [disabled]="next_disabled">Next</button>   </td>
    </tr>
  </table>
  `
  
})
export class AppComponent {
    images = ['/resources/mountain_1.jpg','/resources/mountain_2.jpg','/resources/mountain_3.jpg'];
    current_image = 1;
    prev_disabled:boolean;
    next_disabled:boolean;

    constructor(){
        this.prev_disabled = false;
        this.next_disabled = false;
    }
    onPrevious(){
        this.next_disabled = false;
        if(this.current_image==1){
            this.current_image--;
            this.prev_disabled = true;
        }else{
            this.current_image--;
        }
    }
    onNext(){
        this.prev_disabled = false;
        if(this.current_image==1){
            this.current_image++;
            this.next_disabled = true;
        }else{
            this.current_image++;
        }
    }
 }