import { AppComment } from "./app-comment";

export interface Blogs {
  id?: number;
  content?: string;
  createDate?: Date;
  updateDate?: Date;
  title?: string;
  summary?: string;
  verified?: boolean;
  imageUrl?: string;
  rating?: number;
  category?: string;
  comments?: AppComment[];
}