export interface Movie {
  id?: number;
  name: string;
  synopsis: string;
  watched: boolean;
  liked: boolean;
  comments: string[];
}