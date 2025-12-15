export function crearSelect(idDiv: string): void {
  const div = document.getElementById(idDiv) as HTMLDivElement;
  if (!div) return;

  div.innerHTML = '';

  const select = document.createElement('select');

  const opcions = ['patata', 'ceba', 'pastanaga'];

  opcions.forEach(valor => {
    const option = document.createElement('option');
    option.value = valor;
    option.textContent = valor;
    select.appendChild(option);
  });

  div.appendChild(select);
}
