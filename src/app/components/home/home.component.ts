import { Component } from '@angular/core';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export  class HomeComponent {

  constructor() { }

  openSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.style.left = "0";
      document.getElementById("content")?.classList.add("content-push");
    }
  }

  closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.style.left = "-250px"; /* Adjust to the negative of sidebar width */
      document.getElementById("content")?.classList.remove("content-push");
    }
  }
  
  card1 = async (idd: string) => {
    console.log(idd);
    const data = await fetch(`http://localhost:3000/books/${idd}`).then((res) =>
      res.json()
    );
    const { id, title,descr,pub_date, author, img, pdf } = data;

    const authors = document.getElementById('author');
    const descrp = document.getElementById('descr');
    const pd = document.getElementById('pd');
    const pdfs = document.getElementById('pdf');
    const d_header=document.getElementById('document_header')
 
    if (authors) {
      authors.innerText = 'Author: ' + author;
    }
    if (descrp) {
      descrp.innerText = 'Description: ' + descr;
    }
    if (pd) {
      pd.innerText = 'Publish Date: ' + pub_date;
    }
    if (pdfs) {
      pdfs.setAttribute('src', pdf);
    }
    if(d_header){
      d_header.innerText = title
    }
 
    console.log(data);
  };


 


}
