export interface Project {
  id: number;
  title: string;
  description: string;
  repo_url: string;
  demo_url: string;
  readme_url: string;
  devlog_ids: number[];
  created_at: string;
  updated_at: string;
}

export interface Devlog {
  id: number;
  body: string;
  comments_count: number;
  duration_seconds: number;
  likes_count: number;
  scrapbook_url: string;
  created_at: string;
  updated_at: string;
  media?: {
    url: string;
    content_type: string;
  }[];
}

export interface User {
  id: number;
  slack_id: string;
  display_name: string;
  avatar: string;
  project_ids: number[];
  vote_count: number;
  like_count: number;
  devlog_seconds_total: number;
  devlog_seconds_today: number;
  cookies: number | null;
}
