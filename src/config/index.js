const MODE = 'dev';

const URL = MODE === 'dev' ? "http://localhost:5000/api/v1" : ''

const CONFIG = {
  URL_API: URL ,
  URL_IMAGES: MODE === 'dev' ? "http://localhost:5000/images" : '',
  token: localStorage.getItem("token"),
};

export default CONFIG;
