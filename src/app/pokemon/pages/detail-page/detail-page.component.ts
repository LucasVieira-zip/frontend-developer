import { Component } from '@angular/core';
import { DetailCardComponent } from '../../components/detail-card/detail-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [CommonModule, DetailCardComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent {}
