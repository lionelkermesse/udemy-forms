import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-templ',
  templateUrl: './form-templ.component.html',
  styleUrls: ['./form-templ.component.css']
})
export class FormTemplComponent implements OnInit {
  @ViewChild('signupForm', {static: false}) signupForm: NgForm;
  defaultQuestion: string = 'pet';
  defaultAnswer: string = '';
  genders: string[] = ['male', 'female'];
  submitted: boolean;
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(form: NgForm) {
    console.log('form submitted', form);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }

  ngOnInit(): void {
  }

}
