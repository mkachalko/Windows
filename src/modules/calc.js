const calc = () => {
  const calcBlock = document.getElementById("calc");
  const calcType = document.getElementById("calc-type");
  const calcMaterial = document.getElementById("calc-type-material");
  const calcInput = document.getElementById("calc-input");
  const calcTotal = document.getElementById("calc-total");

  const getTotal = () => {
    const typeValue = calcType.options[calcType.selectedIndex].value;

    let materialValue = 1;

    calcInput.value = calcInput.value.replace(/\D/, "");

    if (calcMaterial.value > 0) {
      materialValue = calcMaterial.options[calcMaterial.selectedIndex].value;
    }

    if (calcType.value > 0 && calcInput.value) {
      calcTotal.value = +calcInput.value * typeValue * materialValue;
    } else {
      calcTotal.value = "";
    }
  };

  // if (!calcBlock) return;
  try {
    if (!calcBlock) {
      throw new Error("На этой странице нет калькулятора");
    }

    calcBlock.addEventListener("input", getTotal);
  } catch (error) {
    console.log(error.message);
  }
};

export default calc;
