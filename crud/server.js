const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});
app.use("/datagrid", (req, res) => {
  res.send([
    {
      id: 1,
      name: "علی",
      natnalCode: "1000000000",
      phone: "09999999999",
      birthData: "2020-10-10",
    },
    {
      id: 2,
      name: "رضا",
      natnalCode: "1000000001",
      phone: "09999999998",
      birthData: "2020-09-09",
    },
    {
      id: 3,
      name: "محمد",
      natnalCode: "1000000002",
      phone: "09999999997",
      birthData: "2020-02-02",
    },
  ]);
});
app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/")
);
