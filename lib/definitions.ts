export interface ProjectInterface {
  _id: string;
  title: string;
  description: string;
  techs: {
    _id: string;
    name: string;
  }[];
  urls: {
    url: string;
    name: string;
  }[];
}
