import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup<any>;

  constructor(private fb: FormBuilder, private auth_service: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({ 'username': ["", Validators.required], 'password': ["", Validators.required]})
  }

  onSubmit(): void {
    const user: User = this.auth_service.login(this.form.value.username, this.form.value.password);
    if (user) {
      this.router.navigate(['pokedex']);
    }
  }

}
