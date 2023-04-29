import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  x: number = 50;
  y: number = 50;
  title = 'angapp';
      constructor() { 
       this.loadScripts(); 
     }
  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
        './assets/index.js',
       //Load all your script files here'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } }
}
