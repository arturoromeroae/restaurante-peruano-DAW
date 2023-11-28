import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-recipes.component.html',
  styleUrl: './home-recipes.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeRecipesComponent {

}
