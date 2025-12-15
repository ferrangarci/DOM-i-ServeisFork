export function countWords(id:string){
  const texto = document.getElementById(id)!.innerText
    let array = texto.split(' ')
    return array.length
}
