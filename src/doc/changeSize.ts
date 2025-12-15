export function changeSize(id:string){
  const texto = document.getElementById(id)
  if (texto){
    texto.style.width = "400px"
  }
}
