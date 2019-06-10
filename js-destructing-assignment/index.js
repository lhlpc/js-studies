// const formValue = {
//   body: "<p>zxcvb</p>",
//   description: "123123",
//   language: undefined,
//   subtitle: "sfdsfsdfsdf",
//   title: "sdffs"
// }
const formValue2 = {
  body: "<p>098</p>",
  description: "123123",
  language: "pt-BR",
  subtitle: "sfdsfsdfsdf",
  title: "sdffs",
  ex: "122354"
}

// const result = {
//   ...formValue2,
//   id
// }

const { language, ...result2 } = { 
  ...formValue2, locale: formValue2.language.locale 
}

console.log(result2);