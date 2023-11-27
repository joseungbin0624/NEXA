// closeServer.ts

import { Server } from 'http';

export const closeServer = (server: Server): Promise<void> => {
  return new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) {
        console.error('Error closing server', err);
        reject(err);
        return;
      }
      console.log('Server closed successfully');
      resolve();
    });
  });
};
