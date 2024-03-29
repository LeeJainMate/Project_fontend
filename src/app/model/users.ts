export interface Users {
    uid :     number;
    name:     string;
    email:    string;
    password: string;
    types:    string;
    avatar:    string;
}
export interface SignupData {
    name: string;
    email: string;
    password: string;
    types : string;
    file : File;
  }