import { API_ROOT, callPost } from './utilsApis'

const login = (socialSite, socialToken) => {
  const fullUrl = API_ROOT + 'login';
  const data = {socialSite, socialToken};
  return callPost(fullUrl, data);
}

export { login };
