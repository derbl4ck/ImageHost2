import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
})
export class LibraryComponent implements OnInit {

  heading = 'Library';
  subheading = 'Here you can see all relevant information at a glance.';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  private urls: string[] = [
    'https://images.unsplash.com/photo-1561652970-807773cc928c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg',
    'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg',
    'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg',
    'https://images.unsplash.com/photo-1561641250-c06551cf3b02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1561652791-1460f0ab2ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1561465023-b46ddd1ffe59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1561685247-378f3178a7e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1561653978-a526ddcfda79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1561662841-b368b90ed6a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1561652808-658ee8c3e3ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  ];

  ngOnInit() {}

  /* http://www.bestjquery.com/?GydSgm8A */
  images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
        imageUrl: m
    });
  }

}
