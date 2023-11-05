import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://open.neis.go.kr/hub/",
  params: {
    Type: "json",
    KEY: process.env.REACT_APP_TOKEN,
  },
});

const getMeal = async () => {
  const { data } = await apiInstance.get("mealServiceDietInfo", {
    params: {
      ATPT_OFCDC_SC_CODE: "F10",
      SD_SCHUL_CODE: "7380292",
      MLSV_YMD: "20231030",
    },
  });
  return data.mealServiceDietInfo[1].row[0];
};

const ApiTest = () => {
  const data = getMeal();

  console.log(data);
  return <div></div>;
};

export default ApiTest;
