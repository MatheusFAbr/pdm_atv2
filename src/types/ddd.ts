export interface DDDResponse {
  state: string;
  cities: string[];
}

export interface DDDApiError {
  message: string;
  type: string;
  name: string;
  errors: DDDFieldError[];
}

export interface DDDFieldError {
  message: string;
  type: string;
}
