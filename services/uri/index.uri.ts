import { BannerUri } from './banner.uri';
import { HeaderUri } from './header.uri';

// General Route Of Web site
const BASE_URL = 'https://api.jci-ci.org/api'; //'http://localhost:8000/api' //

const BASE_URI_API: string = '/api/header.api.json';

export const URI = {
   USER: `${BASE_URL}/public_users`,

   BANNERS: `${BASE_URL}/public_banners`,

   PPS: `${BASE_URL}/public_pps`,

   TEAMS: `${BASE_URL}/public_teams`,

   CONTACTS: `${BASE_URL}/public_contacts`,

   ACTIVITES: `${BASE_URL}/public_activites`,

   PARTNERS: `${BASE_URL}/public_partners`,

   BLOGS: `${BASE_URL}/public_blogs`,
};
