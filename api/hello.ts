import {NowRequest, NowResponse} from "@now/node";

const handler = (request: NowRequest, response: NowResponse) => {
  if (request.method === 'OPTIONS') {
    return response.status(200).send('ok');
  } else {
    return ""
  }

  // handle incoming request as usual
};
