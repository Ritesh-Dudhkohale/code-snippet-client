import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnippetService {
  constructor(private http: HttpClient) {}

  private base_url = 'https://code-snippet-server.onrender.com/api/code-snippets';

  getSnippets() {
    return this.http.get(this.base_url);
  }

  createSnippet(data: { title: string; language: string; code: string }) {
    return this.http.post(this.base_url, data);
  }

  getSnippetByID(id: string) {
    return this.http.get(this.base_url + '/' + id);
  }

  updateSnippet(
    id: string,
    data: { title: string; language: string; code: string }
  ) {
    return this.http.put(this.base_url + '/' + id, data);
  }

  deleteSnippet(id: string) {
    return this.http.delete(this.base_url + '/' + id);
  }
}
