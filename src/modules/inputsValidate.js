const inputsValidate = (formID) => {
  const form = document.getElementById(formID);
  const name = form.querySelector("input[name=fio]");
  const phone = form.querySelector("input[name=phone]");

  const validate = (e) => {
    if (e.target === name) {
      e.target.value = e.target.value.replace(/[^а-яa-z]+/i, "");
    } else if (e.target === phone) {
      if (e.target.value.length == 1) {
        e.target.value = e.target.value.replace(/[^\+]/, `+${e.target.value}`);
        e.target.value = e.target.value.replace(/[^\+\d]+/gi, "");
      } else {
        e.target.value = e.target.value.replace(/[^\+\d]+/gi, "");
      }

      if (phone.value.length > 16) {
        const reg = new RegExp(`${phone.value.substring(17)}$`, "g");
        phone.value = phone.value.replace(reg, "");
      }
    }
  };

  try {
    if (!form) {
      throw new Error("Переданной формы не существует.");
    }

    form.addEventListener("input", (e) => {
      if (e.target === name || e.target === phone) {
        validate(e);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default inputsValidate;
