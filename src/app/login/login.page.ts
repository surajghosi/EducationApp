import { Component, OnInit } from '@angular/core';
import  {LoginService ,LoadingService , ToastService} from '@app/_services';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private toastService:ToastService, 
              private loadingService:LoadingService ,
              public formBuilder: FormBuilder,
              private router: Router) { 

    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
   })

  }

  ngOnInit() {
  }

  login(): void {
    
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!')
      
    } else {
      this.loadingService.showLoader('this is loading message');
    setTimeout(() => {
      this.loadingService.hideLoader();
      this.toastService.showToast("Login sucessfully !", 'success');
      this.router.navigate(['dashboard'])
    }, 20000);
    }
    
  }
}
