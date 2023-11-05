import axios from "axios";

export const postImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const { data } = await axios.post("/api", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_ID,
      "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_CLIENT_SECRET,
    },
  });

  return data;
};
