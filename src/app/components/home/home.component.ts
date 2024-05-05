import { Component, OnInit, Signal } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { SnippetService } from '../../services/snippet/snippet.service';
import { snippet } from '../../utils/models/snippet.model';
import { CreateSnippetComponent } from '../create-snippet/create-snippet.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UdpateSnippetComponent } from '../udpate-snippet/udpate-snippet.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    CreateSnippetComponent,
    RouterOutlet,
    RouterLink,
    UdpateSnippetComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private snippetService: SnippetService, private router: Router) {}

  codeSnippets!: snippet[];

  ngOnInit() {
    this.getSnippets();
  }

  getSnippets() {
    this.snippetService.getSnippets().subscribe({
      next: (res) => {
        this.codeSnippets = (res as any).data;
      },
      error: (err) => {
        console.log('Error Occured', err);
      },
    });
  }

  deleteSnippet(id: string) {
    this.snippetService.deleteSnippet(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log('Error while deleting', err);
      },
    });
  }

  updateSnippet(id: string) {
    this.router.navigate(['/home/update-snippet', id]);
  }
}
