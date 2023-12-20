import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthHttp } from '../../http/auth.http';
import { SignInDto } from '../../dto/sign-in.dto';
import { AppValidators } from '../../../../common/forms/validators';
import { ErrorMessageComponent } from '../../../../common/forms/components/error-message/error-message.component';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
  ],
  templateUrl: './sign-in.view.html',
  styleUrl: './sign-in.view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignInComponent {
  private fb = inject(FormBuilder);
  private authHttp = inject(AuthHttp)
  showPassword = false;

  form: FormGroup<{
    email: FormControl;
    password: FormControl;
  }>
  constructor() {
    this.form = this.fb.group({
      email: [null, [Validators.required, AppValidators.email]],
      password: [null, Validators.required]
    })
  }

  signIn() {
    if (this.form.invalid) return;
    //this.authHttp.getToken(this.form.getRawValue());
    this.authHttp.getToken(this.form.value as SignInDto).subscribe(console.log);
  }
}
