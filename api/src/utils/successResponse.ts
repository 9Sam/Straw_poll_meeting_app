export class SuccessResponse{
    static getReponse(message:string, data:any){
        return {
            status: 200,
            message: message,
            data: data
        }
    }
}