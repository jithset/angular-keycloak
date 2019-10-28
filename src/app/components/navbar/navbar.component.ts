import { Component, OnInit, SimpleChanges } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'frontend';
  userDetails: KeycloakProfile;
  isAdmin = false;
  isEmployee = false;
  constructor(private keycloakService: KeycloakService, private authService: AuthService) { }

  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
      this.isAdmin = this.authService.getRoles('admin');
      this.isEmployee = this.authService.getRoles('employee');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isAdmin = this.authService.getRoles('admin');
    this.isEmployee = this.authService.getRoles('employee');
  }

  async doLogout() {
    await this.keycloakService.logout();
  }

}
