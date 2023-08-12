export interface Article {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
    launches: Launch[];
    events: EventInfo[];
}

interface Launch {
    launch_id: string;
    provider: string;
}

interface EventInfo {
    event_id: number;
    provider: string;
}