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
		Toast.MakeToast("Tocaste el botón", "long");	
		
	}public onTouch(){
		Toast.MakeToast("Tocaste afuera", "long");	
		
	}
}
