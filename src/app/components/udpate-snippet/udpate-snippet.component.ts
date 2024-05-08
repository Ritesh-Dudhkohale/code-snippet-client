import { Component } from '@angular/core';
import { SnippetService } from '../../services/snippet/snippet.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-udpate-snippet',
  standalone: true,
  imports: [RouterLink, LowerCasePipe, ReactiveFormsModule],
  templateUrl: './udpate-snippet.component.html',
  styleUrl: './udpate-snippet.component.css',
})
export class UdpateSnippetComponent {
  constructor(
    private snippetService: SnippetService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  snippetData = this.fb.group({
    title: ['', Validators.required],
    language: ['', Validators.required],
    code: ['', Validators.required],
  });

  id!: string;
  langOptions = ['JAVA', 'PYTHON', 'HTML', 'CSS', 'JAVASCRIPT'];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;

    this.snippetService.getSnippetByID(this.id).subscribe({
      next: (res: any) => {
        this.snippetData.setValue({
          title: res.data.title,
          language: res.data.language,
          code: res.data.code,
        });
      },
    });
  }

  onSubmit() {
    if (this.snippetData.valid) {
      const data = this.snippetData.value as any;
      this.snippetService.updateSnippet(this.id, data).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          alert(err.message);
          console.log('Error Occures', err);
        },
      });
    }
  }
}
