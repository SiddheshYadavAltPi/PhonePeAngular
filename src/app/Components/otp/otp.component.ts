import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  isEnable = false;

  constructor() { }
  
  ngOnInit(): void {
    let inputs = document.querySelectorAll('input');
    let len:Number;
    inputs.forEach((e,index)=>{
      e.addEventListener('keydown',(key)=>{
        len = e.value.length;
        if (len>0 && key.key!== 'Backspace') {
          e.value ="";
        }
      })
      e.addEventListener('keyup',(key:any)=>{
        // let a = inputs[0].value.length !== 0;
        // let b = inputs[1].value.length !== 0;
        // let c = inputs[2].value.length !== 0;
        // let d = inputs[3].value.length !== 0;
        // let f = inputs[4].value.length !== 0;
        // if(a&& b && c && d &&f){
        //   this.isEnable = true;
        // }else{
        //   this.isEnable= false;
        // }

        this.isEnable = Array.from(inputs).every(e=>e.value.length !== 0);
        var verifyBtn = document.getElementsByClassName("verifyBtn") as HTMLCollectionOf<HTMLElement>;
        
        if(this.isEnable) {
          verifyBtn[0].style.background = "#6739b7";
          verifyBtn[0].style.color="white";
        }else{
          verifyBtn[0].style.background = "darkgrey";
          verifyBtn[0].style.color="rgb(83, 83, 83);";
        };
        
        if(len>0){
          if (key.key=="Backspace") {
          }else{
            e.value = "";
            e.value=key.key;
            if(index!==inputs.length-1){
              inputs[index + 1].focus();
            }
          }
        }else{
          if(key.key =='Backspace'){ 
            inputs[index - 1].focus();
          }else if(index!==inputs.length -1){            
            inputs[index + 1].focus();
          }
        }
      })
    })
  }

}
