import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { formlist } from '../form';
@Injectable({
  providedIn: 'root'
})
export class FormsService {

  //header = new HttpHeaders({token:"12345abcdef"});

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, private http:HttpClient) { 
    console.log(this.config.apiEndpoint);
    console.log("forms service initialised");
  }

  // getForms$= this.http.get<formlist[]>("/api/rooms",{headers:this.header}).pipe(
  //   shareReplay(1)
  // );
  getForms$= this.http.get<formlist[]>("/api/rooms").pipe(
    shareReplay(1)
  );

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

  // addForms(form:formlist){
  //   return this.http.post<formlist[]>("/api/rooms",form,{headers:this.header});
  // }
  addForms(form:formlist){
    return this.http.post<formlist[]>("/api/rooms",form);
  }

  editForms(form:formlist,newform:formlist){
    return this.http.put<formlist[]>(`/api/rooms/${form.formNumber}`,newform);
  }

  deleteForms(form:formlist){
    return this.http.delete<formlist[]>(`/api/rooms/${form.formNumber}`);
  }

  
  getPhotos(){
    const request=new HttpRequest('GET',"https://jsonplaceholder.typicode.com/photos",{
      reportProgress:true
    })
    return this.http.request(request);
  }
}
