export const API_KEY = "AIzaSyCLHn_2Fg418wG69_dlWbbpbrCPNkzlmQM"

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
// "AIzaSyCqhxBfyzFCKjk_1TW-34pDsafDxrO4xSQ"