import { useState } from "react";
import { ChecksTexts } from "../App";

export const useGenerate = () => {
  const [validation, setValidation] = useState([]);

  const handleValidation = (newValidation: string) => {
    if (ChecksTexts.INCLUDE_UPPERCASE === newValidation) {
      return "";
    } else if (ChecksTexts.INCLUDE_LOWERCASE === newValidation) {
      return "";
    } else if (ChecksTexts.INCLUDE_SYMBOLS === newValidation) {
      return "";
    } else if (ChecksTexts.INCLUDE_NUMBERS === newValidation) {
      return "";
    }
  };

  const getRandomInt = (min: number, max: number) => {
    // Math.ceil() asegura que el límite inferior (min) sea inclusivo
    min = Math.ceil(min);
    // Math.floor() asegura que el límite superior (max) sea inclusivo
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

  const generatePassword = () => {
    return "";
  };

  return { generatePassword, handleValidation };
};
