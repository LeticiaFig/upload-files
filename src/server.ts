import app from './app';
import { serverConfig } from './config/constants'

app.listen(serverConfig.port, () => {
  console.log(`Start project on port ${serverConfig.port}`);
});
