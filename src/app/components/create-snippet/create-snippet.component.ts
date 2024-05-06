import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SnippetService } from '../../services/snippet/snippet.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { user } from '../../utils/models/user.model';
import { snippet } from '../../utils/models/snippet.model';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-create-snippet',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,LowerCasePipe],
  templateUrl: './create-snippet.component.html',
  styleUrl: './create-snippet.component.css',
})
export class CreateSnippetComponent {
  constructor(
    private snippetService: SnippetService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  snippetData = this.fb.group({
    title: ['', Validators.required],
    language: ['', Validators.required],
    code: ['', Validators.required],
  });

  langOptions =["JAVA", "PYTHON", "HTML", "CSS", "JAVASCRIPT"];

  onSubmit() {
    if (this.snippetData.valid) {
      console.log(this.snippetData.value.code);
      
      this.snippetData.value.language = 'JAVA';
      const data = this.snippetData.value as any;
      this.snippetService.createSnippet(data).subscribe({
        next: (res) => {
          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          console.log('Error Occures', err);
        },
      });
    }
  }
}
