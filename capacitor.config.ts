import type { CapacitorConfig } from '@capacitor/cli';
import { HttpClient } from '@angular/common/http';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'nginx-financing-hibryd',
  webDir: 'www',
  plugins: {
    HttpClient: {
      enabled: true,
    },
  },
};

export default config;
