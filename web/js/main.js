const convertRomanToArab = async (number) => {
  const baseApiURL = "https://roman-to-arab-api-a1ce1557b296.herokuapp.com";
  const postData = {
    number: number,
  };

  try {
    const { result } = await fetch(`${baseApiURL}/convert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }).then((response) => response.json());

    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

const numberInput = document.getElementById("number");

numberInput?.addEventListener("keypress", async (e) => {
  if (e.key !== "Enter") {
    return;
  }

  const resultEl = document.getElementsByClassName("result")[0];
  const convertedNumber = await convertRomanToArab(e.target.value);

  resultEl.innerHTML = convertedNumber;
  numberInput.value = "";
});
