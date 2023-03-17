import { ErrorHandler } from "@angular/core";

export class ErrorsHandle implements ErrorHandler{
    handleError(error: any): void {
        console.log(error);
    }
}