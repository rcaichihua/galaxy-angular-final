import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  accessToken?: string;
  refreshToken?: string;

  constructor() {
    this.load();
  }

  isAuthenticated(): boolean {
    return !!(this.accessToken && this.refreshToken);
  }

  private load() {
    this.accessToken = localStorage.getItem('accessToken') || undefined;
    this.refreshToken = localStorage.getItem('refreshToken') || undefined;
  }

  create(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;

    localStorage.setItem('accessToken', this.accessToken);
    localStorage.setItem('refreshToken', this.refreshToken);
  }

  destroy() {
    this.accessToken = undefined;
    this.refreshToken = undefined;

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
