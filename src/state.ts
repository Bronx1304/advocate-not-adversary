export class SiteState implements DurableObject {
  private state: DurableObjectState;

  constructor(state: DurableObjectState) {
    this.state = state;
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/counter/increment') {
      const page = url.searchParams.get('page') ?? '/';
      const key = `views:${page}`;
      const current = (await this.state.storage.get<number>(key)) ?? 0;
      await this.state.storage.put(key, current + 1);
      return new Response(JSON.stringify({ views: current + 1 }));
    }

    if (url.pathname === '/counter/get') {
      const page = url.searchParams.get('page') ?? '/';
      const key = `views:${page}`;
      const current = (await this.state.storage.get<number>(key)) ?? 0;
      return new Response(JSON.stringify({ views: current }));
    }

    if (url.pathname === '/safety/increment') {
      const type = url.searchParams.get('type') ?? 'crisis';
      const year = new Date().getFullYear().toString();
      const key = `safety:${year}:${type}`;
      const current = (await this.state.storage.get<number>(key)) ?? 0;
      await this.state.storage.put(key, current + 1);
      return new Response(JSON.stringify({ count: current + 1 }));
    }

    return new Response('Not found', { status: 404 });
  }
}
