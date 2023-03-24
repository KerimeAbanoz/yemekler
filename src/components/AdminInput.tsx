import { SetStateAction, useState } from "react";
import axios from "axios";

const api = "http://localhost:3001";

function AdminInput() {
  const [inputValue, setInputValue] = useState("");
  const [parsedValue, setParsedValue] = useState({
    corba: "",
    anayemek: "",
    karbonhidrat: "",
    extra: "",
  });

  const toDelete = ["- Çorbalar -", "- Ana yemekler - "];
  const regexString = toDelete.join("|");

  const valueParse = inputValue.replace(new RegExp(regexString, "g"), "");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // setParsedValue(valueParse)
    console.log("Parsed value:", valueParse);
    // sendMeals();
  };

  const sendMeals = async () => {
    await axios
      .put(api + "/create", parsedValue)
      .then((response) => {
        console.log(response.data);
        // handle the updated resource data
      })
      .catch((error) => {
        console.error(error);
        // handle any errors that occurred
      });
  };

  return (
    <div>
      <h1>Günlük yemekleri giriniz:</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={20}
          name="meals"
          value={inputValue}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">YEMEKLERİ GÖNDER</button>
      </form>
    </div>
  );
}

export default AdminInput;
