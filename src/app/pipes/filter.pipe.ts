import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', searchField: string = 'title'): Post[] {
    console.log('Search: ', search);
    if (!search.trim()) {
      return posts;
    }

    return posts.filter(post => post[searchField].toLowerCase().includes(search.toLowerCase()));
  }

}