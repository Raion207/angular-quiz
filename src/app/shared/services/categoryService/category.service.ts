import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryContent: any[] = [];
  playerName: string = '';

  constructor(private http: HttpClient) { }

  getCategoryContent() {
    this.http.get('http://localhost:3000/list').subscribe((categories: any) => {
      for (const category of categories) {
        this.categoryContent.push({
            id: category.id,
            category: category.categoryLabel
        });
      }
    });
  }

}
