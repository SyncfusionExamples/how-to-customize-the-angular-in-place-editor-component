import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';

  public editableOn: string = 'EditIconClick';
  public showButtons: boolean = false;

  public popupSettingsModel: Object ={
    model: { position: 'BottomRight' }
  };
  public textboxValue: string = "Andrew";
  public editorSaveButton: Object ={
    content: 'Save',
    cssClass: 'e-outline'
  };
  public editorCancelButton: Object ={
    content: 'Cancel',
    cssClass: 'e-outline'
  };

}
