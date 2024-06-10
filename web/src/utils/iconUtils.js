function calculateIconBlurValue(color) {
function calculateBlurValue(color) {
  // Aqui você pode implementar a lógica para calcular o valor do desfoque para cada cor
  // Por exemplo, se as cores mais claras devem ter menos desfoque e as cores mais escuras mais desfoque
  // Você pode ajustar essa lógica conforme necessário
  // Neste exemplo, vamos supor que o valor de desfoque seja simplesmente o comprimento da string de cor
  return color.length;
}

// Array de cores dos ícones
const iconColors = [];

// Função para carregar o conteúdo do arquivo SVG
async function loadSVGContent() {
  const response = await fetch('meuArquivo.svg'); // Substitua 'meuArquivo.svg' pelo caminho do seu arquivo SVG
  const svgContent = await response.text(); // Obtém o conteúdo do arquivo SVG como uma string
  return svgContent;
}

// Função para extrair as cores únicas do SVG
async function extractSVGColors() {
  const svgContent = await loadSVGContent(); // Carrega o conteúdo do arquivo SVG
  const tempElement = document.createElement('div'); // Cria um elemento temporário para análise
  tempElement.innerHTML = svgContent; // Define o conteúdo SVG no elemento temporário
  const fillTags = tempElement.querySelectorAll('circle, rect, path, polygon'); // Procura por elementos que podem ter cores
  const uniqueColors = new Set(); // Cria um conjunto para armazenar as cores únicas
  fillTags.forEach(tag => {
    const color = tag.getAttribute('fill'); // Obtém a cor de cada elemento
    if (color !== null) {
      uniqueColors.add(color); // Adiciona a cor ao conjunto
    }
  });
  const allColors = Array.from(uniqueColors); // Converte o conjunto em uma array
  return allColors;
}

// Uso da função para extrair as cores únicas do SVG
extractSVGColors().then(allColors => {
  console.log(allColors); // Exibe as cores únicas no console
});

iconColors.forEach(color => {
  const blurValue = calculateBlurValue(color); // Calcular o valor do desfoque para cada cor
  iconColors.push({ color, blurValue }); // Armazenar a cor e seu valor de desfoque no array
});

// Calcular a média ponderada dos valores de desfoque para cada cor
let totalWeightedBlur = 0;
let totalWeights = 0;
iconColors.forEach(iconColor => {
  const weight = iconColor.blurValue; // Peso para esta cor (usando o valor de desfoque como peso)
  totalWeightedBlur += iconColor.blurValue * weight; // Acumular os valores de desfoque ponderados
  totalWeights += weight; // Acumular os pesos
});
const averageWeightedBlur = totalWeightedBlur / totalWeights; // Calcular a média ponderada

// Aplicar o valor do desfoque no CSS
const buttonElement = document.querySelector("button");
if (buttonElement) {
  buttonElement.style.filter = `blur(${averageWeightedBlur}px)`;
}
