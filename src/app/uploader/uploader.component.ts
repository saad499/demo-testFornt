import { Component } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {

   uploadFile(): void {
  const fileInput = document.getElementById('file-input') as HTMLInputElement;
  const file = fileInput.files?.[0];
  
  if (file) {
    const totalSize = file.size;
    let uploadedSize = 0;
    
    const progress = document.getElementById('progress') as HTMLElement;
    
    const interval = setInterval(() => {
      uploadedSize += 1000; // Simulate progress update (1000 bytes uploaded)
      const progressPercentage = (uploadedSize / totalSize) * 100;
      
      progress.style.width = progressPercentage + '%';
      
      if (uploadedSize >= totalSize) {
        clearInterval(interval);
        alert('Upload completed!');
      }
    }, 100); // Simulate progress update every 100 milliseconds
  }
}
  
}

