import axios from './index';

export const fetchUserImgUpload = async (imageForm: FormData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const res = await axios.post(`/hondi/users/image`, imageForm, config);
  return res;
};

export const fetchUserNicknameUpload = async (nickname: string) => {
  const res = await axios.put(`/hondi/users/nickname`, { nickname });
  return res;
};
