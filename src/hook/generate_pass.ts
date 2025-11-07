import { useState } from "react";
import { ChecksTexts } from "../App";

export const useGenerate = () => {
  const [validation, setValidation] = useState({
    uppercase: true,
    lowercase: true,
    simbols: false,
    numbers: false,
  });

  const handleValidation = (newValidation: string, bool: boolean) => {
    if (ChecksTexts.INCLUDE_UPPERCASE === newValidation) {
      setValidation({ ...validation, uppercase: bool });
    } else if (ChecksTexts.INCLUDE_LOWERCASE === newValidation) {
      setValidation({ ...validation, lowercase: bool });
    } else if (ChecksTexts.INCLUDE_SYMBOLS === newValidation) {
      setValidation({ ...validation, simbols: bool });
    } else if (ChecksTexts.INCLUDE_NUMBERS === newValidation) {
      setValidation({ ...validation, numbers: bool });
    }
  };

  const getRandomInt = () => {
    return Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  };

  const generateRandomUppercaseLetter = () => {
    // 1. Define all uppercase letters
    const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // 2. Generate a random index between 0 and 25 (the length of the string minus 1)
    const randomIndex = Math.floor(Math.random() * UPPERCASE_LETTERS.length);

    // 3. Select the character at that random index
    const uppercaseLetter = UPPERCASE_LETTERS.charAt(randomIndex);

    return uppercaseLetter;
  };

  const generarSimboloAleatorio = () => {
    // 1. Define una lista (string) con todos los símbolos que deseas incluir.
    // Aquí se incluyen símbolos comunes de puntuación y especiales.
    const SIMBOLOS_ESPECIALES = "!@#$%^&*()_+{}[]|:;<>?,./\\";

    // 2. Generar un índice aleatorio dentro del rango de la lista de símbolos.
    const indiceAleatorio = Math.floor(
      Math.random() * SIMBOLOS_ESPECIALES.length
    );

    // 3. Seleccionar y devolver el símbolo en ese índice.
    const simboloResultante = SIMBOLOS_ESPECIALES.charAt(indiceAleatorio);

    return simboloResultante;
  };

  const generateValidations = () => {
    const validationsArray: string[] = Object.keys(validation).filter(
      (key) => validation[key as keyof typeof validation] === true
    );
    console.log("validationsArray:", validationsArray);
    const numRandom = Math.floor(Math.random() * validationsArray.length);
    console.log("numRandom:", numRandom);
    const validationSelect = validationsArray[numRandom];
    console.log("validationSelect:", validationSelect);
    return handleValidationSelect(validationSelect);
  };

  const handleValidationSelect = (validationSelect: string) => {
    switch (validationSelect) {
      case "uppercase":
        return generateRandomUppercaseLetter();
      case "lowercase":
        return generateRandomUppercaseLetter().toLocaleLowerCase();
      case "simbols":
        return generarSimboloAleatorio();
      case "numbers":
        return getRandomInt().toString();
    }
  };

  const generatePassword = (characterLength: number) => {
    if (characterLength <= 0) {
      console.error(
        "El valor de characterLength debe ser mayor a cero:",
        characterLength
      );
      return "";
    }
    let randomChoice: string = "";
    for (let i = 0; i < characterLength; i++) {
      console.log("randomChoice before:", generateValidations());
      randomChoice = `${randomChoice}${generateValidations()}`;
    }
    return randomChoice;
  };

  return { generatePassword, handleValidation };
};
