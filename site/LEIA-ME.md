# Landing Page Médicos: código-fonte

Site estático em HTML, CSS e JavaScript puros, sem dependências nem build.

## Estrutura
- `index.html`: página principal (one-page)
- `contato.html`: página de contato
- `assets/css/styles.css`: estilos e paleta de cores (variáveis em `:root`)
- `assets/js/dados.js`: **todos os dados dos médicos. Edite só este arquivo.**
- `assets/js/main.js`: monta as seções a partir dos dados
- `assets/img/`: coloque aqui logotipo e fotografias

## Como trocar os dados
1. Abra `assets/js/dados.js` e substitua os placeholders `[...]`.
2. WhatsApp e telefone: apenas dígitos com DDI e DDD (ex.: `5562999999999`).
3. Fotos: salve em `assets/img/` e informe o caminho (ex.: `'assets/img/dr-joao.jpg'`).
   Use JPG/WebP otimizados (cerca de 1200px no lado maior).
4. Logotipo: preencha `logo` (e `logoClaro` para o rodapé verde, se houver versão clara).
5. Instagram vazio (`''`) oculta a linha automaticamente.

## Como visualizar
Abra o `index.html` no navegador. Para publicar, envie a pasta inteira para
qualquer hospedagem estática (Netlify, Vercel, Hostinger, GitHub Pages etc.).
