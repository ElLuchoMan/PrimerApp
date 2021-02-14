import { Component, OnInit } from '@angular/core';
import Toast from 'nativescript-android-toast';


@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
	public onClick(){
		Toast.MakeToast("♥Gracias por todo, te adoro demasiado ♥", "long");	
		
	}public onTouch(){
		Toast.MakeToast("♥ Eres el amor de mi vida ♥", "long");	
		
	}
}