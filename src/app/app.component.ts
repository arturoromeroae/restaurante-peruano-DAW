import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomeRecipesComponent } from './components/home-recipes/home-recipes.component';
import { HomeTeamComponent } from './components/home-team/home-team.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomeBannerComponent, HomeRecipesComponent, HomeTeamComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurante-peruano';
}
