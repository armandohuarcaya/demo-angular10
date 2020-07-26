import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cris-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formHeaders: FormGroup;
  constructor(private formsBuilder: FormBuilder, private login: BackendService,
              private route: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formsLabels();
  }
 private formsLabels() {
  const controls = { 
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  }
  this.formHeaders = this.formsBuilder.group(controls);
  }
  logins() {
    const form = this.formHeaders.value;
    const valor = {
      email: form.email,
      password: form.password,
    }
    this.navigates();
    // if(valor && valor.email) {
    //   this.login.login$(valor).subscribe(res => {

    //     // if (res.success) {
    //     //   console.log('existe');
          
    //     //      }
    //   });
    // } else {
    // }

  }
  navigates() {
    this.route.navigate(['./modulos'], { relativeTo: this.activatedRoute.parent});
  }
}
