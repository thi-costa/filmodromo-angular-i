export interface Movie {
  id?: number;
  name: string;
  synopsis: string;
  backgroundImage: string;
  watched: boolean;
  liked: boolean;
  comments: string[];
}