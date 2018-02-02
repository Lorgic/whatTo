import { Camera } from '@ionic-native/camera';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, Renderer2, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DomController } from 'ionic-angular';
import { isNumber } from 'ionic-angular/util/util';

/**
 * Generated class for the AddInstructionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-instructions',
  templateUrl: 'add-instructions.html',
})

export class AddInstructionsPage {

  public addInstructionsForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public camera: Camera,
    public renderer: Renderer2,
    public element: ElementRef,
    public domCtrl: DomController) {
    this.addInstructionsForm  = new FormGroup({
      instructions: new FormArray([
        new FormGroup({
          name: new FormControl('', [])
        })
      ])
    });
  }

  public get instructions(): FormArray{
    return this.addInstructionsForm.get('instructions') as FormArray
  }
  public addInstructionsInput(){
    this.instructions.push(new FormGroup({name: new FormControl('', [])}))
  }
  public deleteInstructionInput(input: number){
    this.instructions.removeAt(input);
  }
  public onSubmit(){

  }
  public addPhoto(instrIndex: number){
    console.log(instrIndex);
    let confirm = this.alertCtrl.create({
      title: 'Foto toevoegen',
      message: 'Wil je een foto vanuit album toevoegen of een nieuwe maken?',
      buttons: [
        {
          text: 'Album',
          handler: () => {
            this.camera.getPicture({sourceType: 0}).then((imageData) => {
              // let base64Image = 'data:image/jpeg;base64,' + imageData;
              this.updateInstructionPhoto(instrIndex, imageData);

            },(err) => {
              console.log(err);
            } )
            console.log('Album clicked');
          }
        },
        {
          text: 'Foto maken',
          handler: () => {
            this.camera.getPicture({sourceType: 1}).then((imageData)=>{
              // let base64Image = 'data:image/jpeg;base64,' + imageData;
              this.updateInstructionPhoto(instrIndex, imageData);
            }, (err) => {
              console.log(err);
            });
            console.log('Foto clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  public addTimer(instrIndex: number) {
    let prompt = this.alertCtrl.create({
      title: 'Wekker',
      message: "Wil je een kookwekker toevoegen voor deze stap?",
      inputs: [
        {
          type: 'number',
          name: 'hTimer',
          placeholder: 'Tijd in uren'
        },
        {
          type: 'number',
          name: 'mTimer',
          placeholder: 'Tijd in minuten'
        },

        {
          type: 'number',
          name: 'sTimer',
          placeholder: 'Tijd in seconden'
        },
      ],
      buttons: [
        {
          text: 'Annuleren',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Opslaan',
          handler: data => {

            //add inputcontrol logic
            let timerId: string = '#instTimer' + instrIndex;
            let timer = this.element.nativeElement.querySelector(timerId)
            Object.keys(data).forEach(element => {

              let res = parseInt(data[element]);
              if(res > 0) {
                data[element] = res.toString();
              } else{
                data[element] = undefined;
              }
            });
            let outputStr = ""
            if(data.hTimer) outputStr += data.hTimer + "h";
            if(data.mTimer) outputStr += data.mTimer + "m";
            if(data.sTimer) outputStr += data.sTimer + "s";

            if(outputStr !== ""){
              this.renderer.setProperty(timer, 'innerHTML', outputStr);
            }

          }
        }
      ]
    });
    prompt.present();
  }
  updateInstructionPhoto(index: number, path: string){
    let imgId: string = '#instImg' + index;
    let img = this.element.nativeElement.querySelector(imgId);
    this.renderer.setProperty(img, 'src', path)
  }
  ionViewDidLoad() {
  }

}
