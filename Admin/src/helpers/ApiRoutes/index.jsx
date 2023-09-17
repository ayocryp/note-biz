import React from 'react'; // Import React
import { api_routes } from "./api_routes";

function ApiRouter() {

    const PUBLIC_API_URL='https://lur-api.deltechverse.com'

  function router(_route, params = {}) {
    let _q = '?';
    if (Object.keys(params).length > 0) {
      Object.keys(params).forEach((key) => {
        if (_route.includes(`{${key}}`)) {
          _route = _route.replaceAll(`{${key}}`, params[key]);
        } else {
          _route += `${_q}${key}=${params[key]}`;
          _q = '&';
        }
      });
      // todo: check if _route has unreplaced params then throw an error
    }
    return _route;
  }

  const api = (path, params = {}) => {
    return `${PUBLIC_API_URL}${router(api_routes[path], params)} `;
  }

  const web = (path, params = {}) => {
    return router(web_routes[path], params);
  }

  return (
    <div>
      {/* You can render your router functions here */}
      <p>API Route: {api('your_api_route_key', { param1: 'value1' })}</p>
      <p>Web Route: {web('your_web_route_key', { param2: 'value2' })}</p>
    </div>
  );
}

export default ApiRouter;
