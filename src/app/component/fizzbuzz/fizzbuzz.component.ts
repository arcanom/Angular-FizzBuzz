import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
valeur : number = 1
fizzbuzz : string= "1"
size: string = "fw-light"

diminuer(){
  this.valeur--;
  this.afficher(this.valeur)
}
augmenter(){
  this.valeur++;
  this.afficher(this.valeur)
}
afficher(val:number){
  if(val % 3 == 0 && val % 5 == 0 ){
    this.fizzbuzz = "Fizzbuzz"
    this.size = "fw-bolder"

  } else if(val % 3 == 0){
    this.fizzbuzz = "Fizz"
    this.size = "fw-bold"

  } else if(val % 5 == 0){
    this.fizzbuzz = "Buzz"
    this.size = "fw-bold"

  } else {
  this.fizzbuzz =  this.valeur.toString()
  this.size = "fw-lighter"

  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
