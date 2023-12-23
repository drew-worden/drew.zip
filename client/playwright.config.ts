//Import packages
import type { PlaywrightTestConfig } from '@playwright/test';

//Playwright configuration
const playwrightConfig: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests/integration',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

//Exports
export default playwrightConfig;
