const axios = require("axios");

module.exports = {
  add: async (req, res) => {
    const url = "https://developers.flouci.com/api/generate_payment";

    const payload = {
      app_token: "f90bb4f0-2221-48a7-bd4b-3b0608a067ea",
      app_secret: "aadcdc6f-2f3d-4119-b15d-0640f5d726b4",
      accept_card: "true",
      amount: 7000,
      success_link: "http://localhost:3000/success",
      fail_link: "http://localhost:3000/fail",
      session_timeout_secs: 1200,
      developer_tracking_id: "d811a12c-2638-48c2-8e54-0969af61b176",
    };

    const headers = {
      "Content-Type": "application/json",
    };

    await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => res.send(data))
      .catch((error) => res.send("Error:", error.message));
  },
  verify: async (req, res) => {
    const id_payement = req.params.id;

    await axios
      .get(`https://developers.flouci.com/api/verify_payment/${id_payement}`, {
        headers: {
          "Content-Type": "application/json",
          apppublic: "f90bb4f0-2221-48a7-bd4b-3b0608a067ea",
          appsecret: "aadcdc6f-2f3d-4119-b15d-0640f5d726b4",
        },
      })
      .then((result) => {
        res.send(result.data);
      })
      .catch((error) => res.send("Error:", error.message));
  },
};
