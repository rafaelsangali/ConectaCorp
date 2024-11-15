# ConectaCorp Client Wizard

Este projeto visa implementar um sistema de cadastro de clientes em múltiplas etapas (wizard) para a empresa fictícia ConectaCorp. O objetivo principal é melhorar a experiência do usuário ao longo do processo de cadastro, tornando-o mais organizado, interativo e fácil de completar, aumentando a taxa de conversão.

## Tecnologias Usadas

- **React**: Utilizado para criar a interface do usuário e gerenciar o estado do formulário. O React permite a criação de componentes reutilizáveis e facilita a construção da interface interativa.
- **Next.js**: Framework utilizado para facilitar a criação de aplicações React, oferecendo funcionalidades como renderização do lado do servidor (SSR) e geração de páginas estáticas (SSG).
- **TypeScript**: Usado para garantir a tipagem estática e a melhoria da manutenção e legibilidade do código. A tipagem ajuda a prevenir erros durante o desenvolvimento e fornece autocompletar nas IDEs.
- **Tailwind CSS**: Utilizado para estilização. Tailwind facilita a criação de layouts responsivos e componentização rápida com sua abordagem de utilitários. Ele permite uma customização eficiente do design, sem a necessidade de escrever CSS complexo.
- **React Hook Form**: Biblioteca utilizada para gerenciar o estado dos formulários e realizar a validação de maneira simples e performática. Essa biblioteca ajuda a reduzir a quantidade de código necessário para lidar com formulários em React.
- **Zod**: Usado para validação de esquemas de dados, como validação de tipos e regras de campos do formulário.
- **Moment.js**: Utilizado para manipulação e formatação de datas. No projeto, é usado para formatar a data de nascimento do usuário e validar a maioridade.
- **Axios**: Utilizado para realizar requisições HTTP, permitindo a integração com uma API backend ou a simulação de envio de dados.
- **Zustand**: Biblioteca de gerenciamento de estado que facilita o compartilhamento de estado entre componentes de maneira simples e eficiente.

### Estrutura de Diretórios

1. **`/src/app`**: Contém a visualização e organização dos componentes principais do aplicativo, como páginas e containers.
2. **`/src/components`**: Diretório para componentes reutilizáveis e globais. Exemplo: campos de formulário, botões, etc.
3. **`/src/constants`**: Contém objetos e valores constantes utilizados ao longo da aplicação, como listas de opções para preenchimento, e com a possibilidade de adicionar mais conforme a necessidade.
4. **`/src/core`**: Contém as stores criadas com o Zustand para abstração da lógica de gerenciamento de estado global. Ideal para centralizar informações compartilhadas entre diferentes componentes.
5. **`/src/hooks`**: Diretório com hooks personalizados, que encapsulam lógica reutilizável, como a manipulação de formulários e estados.
6. **`/src/schemas`**: Contém os esquemas de validação dos dados do formulário usando o Zod, garantindo que os dados preenchidos sejam corretos antes de serem enviados.
7. **`/src/style`**: Diretório de estilos adicionais em CSS para customizações que não são cobertas pelo Tailwind CSS.
8. **`/src/utils`**: Funções reutilizáveis, como mascaras para input de dados (telefone, CPF, etc.), e outras funções auxiliares.

## Funcionalidades

1. **Divisão em Etapas**: O formulário está dividido em múltiplas etapas, e o usuário pode navegar entre elas utilizando os botões "Próximo" e "Anterior".
2. **Validação de Campos**: A validação dos campos é feita utilizando **React Hook Form** em conjunto com **Zod** para garantir que todos os campos obrigatórios sejam preenchidos corretamente.
3. **Responsividade**: O design do formulário é totalmente responsivo, utilizando **Tailwind CSS** para garantir uma boa experiência em dispositivos móveis e desktops.
4. **Envio de Dados**: Após preencher todas as etapas e aceitar os termos, o formulário envia um JSON com os dados coletados para um endpoint backend.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/conectacorp.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd conectacorp
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Scripts

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Cria a versão otimizada para produção.
- **`npm run start`**: Inicia o servidor de produção após o build.
- **`npm run lint`**: Executa o linter para garantir que o código siga os padrões de qualidade definidos.

## Dependências Principais

### **React Hook Form**

- Facilita a criação e gestão de formulários em React, permitindo uma validação simples e eficiente com menos código.

### **Zod**

- Utilizado para validação de esquemas de dados. Permite verificar se os dados preenchidos pelo usuário seguem um formato esperado e se atendem a determinadas condições (ex.: maioridade).

### **Tailwind CSS**

- Framework de CSS baseado em utilitários, ideal para criar layouts responsivos e rápidos. Permite a personalização de componentes de forma dinâmica e flexível.

### **Zustand**

- Utilizado para gerenciar o estado da aplicação, especialmente os dados do formulário ao longo das várias etapas.

## Justificativa Técnica

- **Validação de Formulários**: A combinação de **React Hook Form** e **Zod** permite uma validação robusta e eficaz, sem sobrecarregar o código com lógica extra. **React Hook Form** lida com o gerenciamento do estado dos campos de forma eficiente, enquanto **Zod** valida os dados de maneira simples e segura.
- **Gerenciamento de Estado**: **Zustand** foi escolhido por sua simplicidade e desempenho. Ele permite a gestão do estado entre as etapas do formulário de maneira simples, sem a necessidade de soluções mais complexas, como o Redux.
- **Responsividade**: A utilização de **Tailwind CSS** torna o design responsivo por padrão, facilitando a adaptação da interface para dispositivos móveis sem a necessidade de media queries personalizadas.
- **Acessibilidade**: O código foi desenvolvido com a preocupação de garantir que os formulários sejam acessíveis para usuários com deficiência. Utilizando boas práticas de HTML semântico e componentes interativos acessíveis, a experiência do usuário é otimizada.

## Funcionalidade Não Cumprida

Um dos requisitos do sistema seria permitir ao usuário marcar uma opção que replicasse os dados de endereço residencial para o endereço de cobrança. A funcionalidade foi planejada da seguinte maneira:

- Quando o usuário preencher o endereço residencial, ele teria a opção de marcar uma caixa de seleção, como "Usar este endereço para cobrança".
- Caso essa opção fosse marcada, o sistema preencheria automaticamente os campos do endereço de cobrança com os mesmos valores inseridos no endereço residencial.

No entanto, essa funcionalidade ainda não foi implementada na versão atual do projeto. A implementação dessa funcionalidade pode ser feita utilizando uma simples checagem de estado e, ao marcar a opção, copiar os valores dos campos do endereço residencial para o endereço de cobrança.

### Como melhorar essa funcionalidade:

- Utilizar hooks para copiar os dados entre os campos de endereço.
- Considerar a validação de que os campos de endereço de cobrança são obrigatórios apenas se a opção de replicar não for marcada.

---

## Pontos de Melhoria

Embora o sistema de múltiplas etapas esteja funcionando, alguns pontos podem ser melhorados para aprimorar a experiência do usuário e garantir a robustez do formulário:

1. **Validação de Campos**:

   - **Maior validação nos campos**: Embora existam validações simples, é importante implementar uma validação mais robusta para garantir que todos os campos obrigatórios sejam preenchidos corretamente. Exemplos incluem validações de formato de e-mail, telefone e CEP, além de validações mais complexas para garantir que a data de nascimento realmente corresponda à maioridade.
   - **Feedback visual de validação**: Adicionar feedback visual, como bordas vermelhas ou mensagens de erro próximas aos campos, quando a validação falhar.

2. **Funcionalidade de Retorno (Etapas Anteriores)**:
   - **Navegação entre etapas**: Atualmente, a navegação entre as etapas está limitada ao botão "Próximo". A funcionalidade de retornar às etapas anteriores pode ser adicionada para que o usuário possa revisar ou corrigir informações anteriores.
   - **Armazenamento de dados das etapas anteriores**: Certifique-se de que os dados preenchidos nas etapas anteriores não sejam perdidos ao navegar para frente e para trás, utilizando o gerenciamento de estado adequado (usando Zustand, por exemplo).
3. **Aprimoramento de Responsividade**:
   - O sistema de múltiplas etapas já é responsivo, mas sempre existem melhorias possíveis, como otimizar o layout para diferentes tamanhos de tela, especialmente para dispositivos móveis.
4. **Melhoria no Design de UX/UI**:

   - **Indicadores de progresso**: Um indicador de progresso visual nas etapas do formulário, como uma barra de progresso, pode ajudar o usuário a entender em qual etapa está e quantas etapas faltam.
   - **Botões de navegação mais claros**: Melhorar o design dos botões de "Próximo", "Anterior" e "Finalizar" para que sejam mais visíveis e fáceis de identificar.

5. **Melhor Acessibilidade**:
   - Implementar uma melhor acessibilidade, como a navegação por teclado, e garantir que todos os campos estejam corretamente rotulados para leitores de tela.
   - Garantir que o contraste entre texto e fundo esteja de acordo com as diretrizes de acessibilidade.
