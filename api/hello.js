import {NowRequest} from "@now/node";
import {NowResponse} from "@now/node";

const handler = (request: NowRequest, response: NowResponse): NowResponse => {
  if (request.method === 'OPTIONS') {
    return response.status(200).send('ok');
  }

  // handle incoming request as usual
};
