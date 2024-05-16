
import microCors from 'micro-cors';

const cors = microCors();

const handler = (request: NowRequest, response: NowResponse): NowResponse => {
  if (request.method === 'OPTIONS') {
    return response.status(200).send('ok');
  }

  // handle incoming request as usual
};

export default cors(handler);
