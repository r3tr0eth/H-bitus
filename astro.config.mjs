import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // Integraciones
  integrations: [react()],

  // Cualquier otra config que necesites
});
