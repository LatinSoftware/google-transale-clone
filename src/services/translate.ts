import { type LanguageFrom, type Language } from './../types.d'
interface Props {
  text: string
  languageFrom: LanguageFrom
  languageTo: Language
}

export async function Transale ({ text, languageFrom, languageTo }: Props): Promise<string> {
  console.log('ejecutandose')

  if (languageFrom === languageTo) return text
  // const url = 'https://rapid-translate-multi-traduction.p.rapidapi.com/t'
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //     'X-RapidAPI-Key': '063b077c15mshd3c695c660f716cp1e0ae7jsn740488cbde12',
  //     'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
  //   },
  //   body: {
  //     from: languageFrom,
  //     to: languageTo,
  //     q: text
  //   }
  // }

  // try {
  //   const response = await fetch(url, options)
  //   const result = await response.text()
  //   console.log(result)
  //   return result
  // } catch (error) {
  //   console.error(error)
  // }

  return text
}
