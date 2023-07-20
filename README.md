# Página de Login/Cadastro 

### Concepção:

- Cria um FEED onde eu possa ter a listagem dos meus repositórios aqui do Github é ao clicar ter mais detalhes, exibindo o README do projeto!
- Objetivo era criar o Layout (FIGMA)
- Codar o projeto de acordo as especificações do Layout.

### Resolução:
- Comecei com a criação do projeto pelo FIGMA. Determinei a palheta de cores, em seguida fiz um pequeno rascunho em um papel para determinar como eu queria organizar os elementos do layout. Após isso passei a ideia para o FIGMA. Onde tentei aplicar o máximo de conceitos, como Auto Layout, Frame, Groups.. [VISUALIZE O PROJETO FIGMA](https://www.figma.com/file/FHYZ3l5viedmQuefEpobsD/Project-Store?type=design&node-id=14%3A149&mode=design&t=EkWMpl2yKrAG48hK-1)
- Codificação: Resolvi utilizar Next.js 13 + TailwindCSS. Codificação foi de acordo ao layout no figma, utilizei o EsLint para facilitar a identação do código. Utilizei algumas bibliotecas novas nesse projeto que me permitiram expandir meu conhecimento, como DateFNS (Facilitar a manipulação com datas) e Remark-html (Que transforma o conteúdo markdown em HTML, assim conseguindo exibir o README dos repositórios.)
- Utilizei a API do Github para fazer a busca das informações necessárias. (Foto, Descrição, Nome, Repositórios, README's.)
- Utilizo os params do HTML, para fazer a chamada para busca do README.



 ## :rocket: Techs
 
 * Next.js + TypeScript
 * Axios
 * TailwindCSS
 * Date-fns
 * Remark-html
 *  Eslint
 * Phosphor icon

 

## Layout (FIGMA)

<div align="center">
  <img alt="Layout" src="https://github.com/wwilliamsantana/feed-github-repository/assets/84254929/49845afb-cf5a-47ed-b343-be1b8fec305e" width="100%">
</div>

## Layout (Desenvolvimento)

<div align="center">
  <img alt="Layout" src="https://github.com/wwilliamsantana/feed-github-repository/assets/84254929/216db6f0-b611-4d62-9650-d57c5670a1cb" width="80%">
    <hr>
  <img alt="Layout" src="https://github.com/wwilliamsantana/feed-github-repository/assets/84254929/e32d4cfe-9c73-4e18-8969-181d48f551c3" width="80%">
</div>


