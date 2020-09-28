import {
  ApiSensation,
  fromApiSensationToSensation,
  Sensation,
} from "../Model/Sensation";

const BASE_URL = "https://sensum-server.herokuapp.com/api/";

export const getSensations = async (): Promise<Array<Sensation>> => {
  try {
    const url = BASE_URL + "sensations/letThemFLow";
    const request = new Request(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        offset: 0,
        limit: 0,
      }),
    });
    const sensationsRes = await fetch(request);
    const apiSensations: Array<ApiSensation> = await sensationsRes.json();
    return apiSensations.map(fromApiSensationToSensation);
  } catch (e) {
    console.error(e);
  }
  return [];
};
