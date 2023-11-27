// elasticsearch.ts

import { Client } from '@elastic/elasticsearch';

const client = new Client({ node: 'http://localhost:9200' });

export const checkConnection = async (): Promise<boolean> => {
  try {
    await client.ping();
    console.log('Elasticsearch connected');
    return true;
  } catch (error) {
    console.error('Elasticsearch connection failed', error);
    return false;
  }
};

export default client;
