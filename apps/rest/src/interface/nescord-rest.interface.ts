export interface INescordRestService {
  call(request: HttpRequest): any;
}

export interface HttpRequest {
  method: string;
  url: string;
  body: string;
}

export interface HttpResponse {
  body: string;
}
