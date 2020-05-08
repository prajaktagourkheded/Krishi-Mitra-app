import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(private  languageService : LanguageService) { 
 
  }

  ngOnInit() {
    
  }
select(lng){
  this.languageService.setLanguage(lng);
    console.log("kr diya language select")
}
}
