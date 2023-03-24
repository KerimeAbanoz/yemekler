import axios from "axios";
import { useEffect, useState } from "react";

const api = "http://localhost:3001";

function YemekListesi() {
  const [corba, setCorba] = useState("");
  const [anayemek, setAnayemek] = useState("");
  const [karbonhidrat, setKarbonhidrat] = useState("");
  const [extra, setExtra] = useState("");

  useEffect(() => {
    getYemekler();
  }, []);

  const getYemekler = async () => {
    await axios(api + "/yemekler")
      .then((res) => {
        console.log(res.data.yemekler[0]);
        setCorba(res.data.yemekler[0].corba);
        setAnayemek(res.data.yemekler[0].anayemek);
        setKarbonhidrat(res.data.yemekler[0].karbonhidrat);
        setExtra(res.data.yemekler[0].extra);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Yemek Listesi: </h1>

      <ul>
        <li>{corba}</li>
        <li>{anayemek}</li>
        <li>{karbonhidrat}</li>
        <li>{extra}</li>
      </ul>

      {/* <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Message: {formData.message}</p> */}
    </div>
  );
}

export default YemekListesi;
