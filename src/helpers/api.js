import axios from "axios";
import { toast } from "react-toastify";
import { getSessionItem } from "./SessionStorage";

const baseUrl = "https://cric.com";

const accessTok = getSessionItem("accessToken");

let axiosConfig;

if (accessTok) {
  axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "true",
      Authorization: `Bearer ${accessTok}`,
    },
  };
} else {
  axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "true",
    },
  };
}

const Helper = {
  PostData: async function (url, params) {
    let apicall = baseUrl + url;
    return await axios
      .post(apicall, params, axiosConfig)
      .then((res) => {
        try {
          let output = res.data;
          if (output.status) {
            return output;
          } else {
            toast.error(output.message);
          }
        } catch (e) {
          toast.error("Internal Server Error!");
        }
      })
      .catch((e) => {
        console.log(res);
        toast.error("Internal Server Error!");
      });
  },

  updateData: async function (url, params) {
    let apicall = baseUrl + url;
    return await axios
      .post(apicall, params, axiosConfig)
      .then((res) => {
        try {
          let output = res.data;
          if (output.status) {
            return output;
          } else {
            toast.error(output.message);
          }
        } catch (e) {
          toast.error("Internal Server Error!");
        }
      })
      .catch((e) => {
        console.log(res);
        toast.error("Internal Server Error!");
      });
  },

  GetData: async function (url, params) {
    let apicall = baseUrl + url;
    let param = params ? params : "";
    return axios
      .get(apicall, param, axiosConfig)
      .then((res) => {
        if (res.status) {
          let output = res.data;
          if (output.status === 200 || output.status === true) {
            return output;
          } else {
            toast.error(output.message);
          }
          return output;
        }
      })
      .catch((e) => {
        if (e.response.status === 401) {
        } else {
          return { status: false, message: e };
        }
      });
  },

  deleteData: async function (url, params) {
    let apicall = baseUrl + url;
    return await axios
      .delete(apicall, params, axiosConfig)
      .then((res) => {
        try {
          let output = res.data;
          if (output.status) {
            return output;
          } else {
            toast.error(output.message);
          }
        } catch (e) {
          toast.error("Internal Server Error!");
        }
      })
      .catch((e) => {
        console.log(res);
        toast.error("Internal Server Error!");
      });
  },
  
};

export default Helper;
