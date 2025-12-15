export function imatge(id:string){
  const texto = document.getElementById(id)!;
  const img = document.createElement('img');
  img.src = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d';
  img.style.width = "300px"
  img.style.height = "300px"
  texto.appendChild(img)
}
