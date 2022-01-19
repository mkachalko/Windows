const sendForm = ({ formID, someElem = [] }) => {
  const form = document.getElementById(formID);
  const name = form.querySelector("input[name=fio]");
  const phone = form.querySelector("input[name=phone]");
  const statusBlock = document.createElement("div");
  const errorText = "Ошибка отправки...";
  const successText = "Заявка успешно отправлена!";
  const loadtext = "Отправка...";

  const validate = () => {
    return name.value && phone.value;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };

  const clue = (input, str) => {
    const clue = document.createElement("div");
    clue.classList.add("clue");
    clue.style.color = "red";
    clue.style.fontSize = "12px";
    clue.textContent = str;

    input.after(clue);
    setTimeout(() => clue.remove(), 8000);
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};
    const inputs = [name, phone];

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      if (document.getElementById(elem.id)) {
        const element = document.getElementById(elem.id);
        if (elem.type === "block" && element.textContent) {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === "input" && element.value) {
          formBody[elem.id] = element.value;
        }
      }
    });

    if (validate()) {
      const clues = document.querySelectorAll(".clue");

      clues.forEach((clue) => {
        clue.remove();
      });

      statusBlock.style.textAlign = "center";
      statusBlock.style.fontSize = "12px";
      statusBlock.textContent = loadtext;
      form.append(statusBlock);

      sendData(formBody)
        .then((data) => {
          statusBlock.style.color = "rgb(0, 146, 21)";
          statusBlock.textContent = successText;
          setTimeout(() => statusBlock.remove(), 5000);
          inputs.forEach((input) => (input.value = ""));
        })
        .catch((error) => {
          statusBlock.style.color = "red";
          statusBlock.textContent = errorText;
          setTimeout(() => statusBlock.remove(), 5000);
        });
    } else {
      const clues = document.querySelectorAll(".clue");

      if (clues.length > 0) {
        clues.forEach((clue) => {
          clue.remove();
        });
      }
      inputs.forEach((input) => {
        if (!input.value) {
          clue(input, "Это поле обязательное!");
        }
      });
    }
  };

  try {
    if (!form) {
      throw new Error("Переданной формы не существует.");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
