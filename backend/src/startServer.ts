// startServer.ts

import app from './server';
import { checkConnection as checkElasticsearchConnection } from './elasticsearch';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await checkElasticsearchConnection();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server', error);
  }
};

startServer();
