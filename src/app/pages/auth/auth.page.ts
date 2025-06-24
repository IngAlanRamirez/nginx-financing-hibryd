import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
  ],
})
export class AuthPage implements OnInit {
  private spinner = inject(NgxSpinnerService);

  constructor() {}

  ngOnInit() {
    // Mostrar spinner
    this.spinner.show();

    // Simular proceso de autenticación (para testing)
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
