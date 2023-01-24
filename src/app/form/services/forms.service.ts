import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { formlist } from '../form';
@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, private http:HttpClient) { 
    console.log(this.config.apiEndpoint);
    console.log("forms service initialised");
  }

  flist : formlist[]=[
//     {
//       ftype: "abstract",
//       photo: "https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",
//       dateofbirth: new Date('10-Nov-1999'),
//       rating:3.445
//     }, {
//       ftype: "abstract",
//       photo: "https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",
//       dateofbirth: new Date('10-Nov-1999'),
//     rating:2.5},
// {
//           ftype: "abstract",
//           photo: "https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",
//           dateofbirth: new Date('10-Nov-1999'),
//           rating:4.3
//         }
  ]
  getForms(){
   // return this.flist;
   return this.http.get<formlist[]>("/api/rooms");
  }
}
