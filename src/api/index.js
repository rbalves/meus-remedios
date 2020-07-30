import axios from 'axios';

const baseDomain = process.env.VUE_APP_URL_BASE;
const baseURL = `${baseDomain}/box_b881cca42a1b7bfa2c71`;

export default axios.create({
    baseURL,
});
