export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  repoUrl: string;
  liveUrl: string;
}


export type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};