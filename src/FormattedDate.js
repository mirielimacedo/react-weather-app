import React from "react";

export default function FormattedDate({ date }) {
  const options = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  };

  // Verifica se a data é válida antes de formatá-la
  if (date instanceof Date && !isNaN(date.getTime())) {
    const formattedDate = date.toLocaleDateString("en-US", options);
    return <span>{formattedDate}</span>;
  } else {
    return null; // Retorna null se a data for inválida
  }
}
