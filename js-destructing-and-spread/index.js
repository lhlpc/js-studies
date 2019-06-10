// ----------- Objects
const formValue = {
  body: "<p>098</p>",
  description: "123123",
  language: "pt-BR",
  subtitle: "sfdsfsdfsdf",
  title: "sdffs",
  ex: "122354"
}

const { language, ...result } = { 
  ...formValue, locale: formValue.language.locale 
}

console.log(result);

// ----------- Arrays
// Element removal
// const arrayzao = [1, 2, 3, 4];
// const [last, arrayzao_incomplete] = [...]