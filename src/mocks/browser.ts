import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Setup the worker with the provided handlers
export const worker = setupWorker(...handlers);
