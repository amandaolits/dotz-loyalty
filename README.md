# 🚀 Dotz Loyalty  

## Tecnologias Utilizadas 🚀

🔹 **React** - Biblioteca para construção da interface do usuário  
🔹 **TypeScript** - Tipagem estática para maior segurança no código  
🔹 **Styled Components** - Estilização dos componentes de forma dinâmica  
🔹 **React Hook Form** - Gerenciamento de formulários de maneira eficiente  
🔹 **Yup** - Validação de formulários de forma declarativa  
🔹 **React Router** - Navegação entre as páginas  
🔹 **Context API** - Gerenciamento de estado global   

## 📦 Como instalar e rodar o projeto  

### 1️⃣ Clone o repositório  
```bash
git clone https://github.com/amandaolits/dotz-loyalty.git
```

### 2️⃣ Acesse a pasta do projeto 
```bash
cd dotz-loyalty
```

### 3️⃣ Instale as dependências  
```bash
npm install
```

### 4️⃣ Inicie o servidor
```bash
npm run server
```

### 5️⃣ Rode a aplicação
```bash
npm run start
```

## 👤 Exemplos de usuário para acesso 
```bash
    {
      "id": "1",
      "name": "Ana Pereira",
      "email": "ana@email.com",
      "password": "Ana1123@",
      "phone": "11966666666",
      "balance": 300000
    },
    {
      "id": "2",
      "name": "Pedro Martins",
      "email": "pedro@email.com",
      "password": "Pedro123@",
      "phone": "11955555555",
      "balance": 594150
    }
```

<br>
<br>

# 📌 Página de Cadastro de Usuário  
A página de **Cadastro de Usuário** permite que novos usuários criem uma conta no sistema, fornecendo informações essenciais como **nome, e-mail, senha e telefone**. Antes de finalizar o cadastro, o sistema verifica se o e-mail já está registrado, impedindo cadastros duplicados.  

## **📌 Funcionalidades da Página**  

### 🔹 **1. Validação de Formulário**  
Antes de enviar os dados para o servidor, o formulário valida os campos obrigatórios utilizando a biblioteca [`yup`](https://github.com/jquense/yup) integrada ao [`react-hook-form`](https://react-hook-form.com/).  

- **Nome**:  
  - Deve conter **apenas letras** (acentos permitidos).  
  - Mínimo de **3 caracteres**.  
  - Campo **obrigatório**.  

- **E-mail**:  
  - Deve ser um e-mail **válido**.  
  - Campo **obrigatório**.  

- **Senha**:  
  - Mínimo de **8 caracteres**.  
  - Deve conter **pelo menos**:  
    ✅ 1 letra **minúscula**  
    ✅ 1 letra **maiúscula**  
    ✅ 1 número  
    ✅ 1 caractere **especial** (!@#$%^&*)  
  - Campo **obrigatório**.  

- **Telefone**:  
  - Deve estar no **formato válido** (ex.: **(11) 99999-9999**).  
  - Campo **obrigatório**.  

### 📂 **Fluxo do Cadastro**  

1️⃣ **Usuário preenche os campos** do formulário.  
2️⃣ O formulário é **validado** (**Yup** + **react-hook-form**).  
3️⃣ O sistema **verifica se o e-mail já existe** na API.  
4️⃣ **Se o e-mail já estiver cadastrado** → Exibe **alerta** e **bloqueia o envio**.  
5️⃣ **Se o e-mail não estiver cadastrado** → **Envia os dados** para a API via `POST`.  
6️⃣ **Exibe mensagem de sucesso**.  
7️⃣ **Redireciona para a tela de login**.  

## **📌 Melhorias Futuras**  
🔄 **Exibir mensagens de erro personalizadas** sem utilizar `alert()`.  
🔑 **Implementar autenticação real** em vez de um backend fake.  
📨 **Enviar e-mail de confirmação** após cadastro.    

<br>
<br>
  
# 🔐 Página de Login  

A página de **Login** permite que os usuários cadastrados acessem a plataforma Dotz Loyalty. A autenticação é feita verificando os dados informados pelo usuário e validando as credenciais armazenadas na base de dados.

## 📌 **Funcionalidades**  

✔️ **Validação de formulário**: Garante que o usuário preencha os campos corretamente antes do envio.  
✔️ **Verificação de credenciais**: Busca o usuário no banco de dados e compara a senha informada.  
✔️ **Autenticação via contexto**: Atualiza o estado global do usuário através do `AuthContext`.  
✔️ **Redirecionamento seguro**: Usuários autenticados são direcionados automaticamente para o **dashboard**.  
✔️ **Link para cadastro**: Caso o usuário ainda não tenha conta, ele pode se registrar na plataforma.  

## 📂 **Fluxo de Funcionamento**  

1️⃣ **Usuário preenche os campos** `E-mail` e `Senha` no formulário.  
2️⃣ O formulário é **validado** usando `Yup` e `react-hook-form`.  
3️⃣ O sistema **busca o usuário na API** com base no e-mail fornecido.  
4️⃣ **Se o usuário não existir ou a senha estiver incorreta** → Exibe **mensagem de erro**.  
5️⃣ **Se o login for bem-sucedido** → Atualiza o estado global (`UserContext`).  
6️⃣ **A função `login` do `AuthContext` é chamada** → O usuário é autenticado.  
7️⃣ **Redirecionamento automático** para o painel (`/dashboard`).  

## **📌 Melhorias Futuras**  

🔄 **Implementar mensagens de erro personalizadas** sem utilizar alert().  
🔑 **Autenticação real via JWT** em vez de um backend fake.  
📌 **Adicionar suporte a "Lembrar-me"** para manter o usuário autenticado.  
📨 **Criar um fluxo de "Esqueci minha senha"** para recuperação de credenciais.  

<br>
<br>

# 📊 Dashboard 
A página de **Dashboard** permite que os usuários visualizem e troquem seus Dotz por produtos disponíveis. Ela contém uma listagem de produtos, um sistema de filtragem por categoria, uma barra de pesquisa e um botão de **"Resgatar"** para efetuar a troca.  

No topo da página, há um **Header** fixo que exibe a logo da plataforma e um ícone de usuário, garantindo fácil navegação e acesso rápido a funcionalidades como **Meu Extrato**, **Meus Endereços** e **Logout**.  

## 🚀 Funcionalidades  
✔ **Exibição de produtos** disponíveis para troca.  
✔ **Filtro por categoria**, facilitando a navegação.  
✔ **Barra de pesquisa** para encontrar produtos rapidamente.  
✔ **Botão "Resgatar"** para efetuar a troca de Dotz pelos produtos.  
✔ **Modal de confirmação**, garantindo que o usuário aprove a transação antes de concluir.  
✔ **Header fixo**, contendo:  
   - Logo clicável para retornar ao dashboard.  
   - Ícone do usuário com opções de navegação no popover.  

## 🔄 Fluxo de Funcionamento  
1️⃣ O sistema carrega a lista de produtos ao acessar a página.  
2️⃣ O usuário pode buscar produtos digitando palavras-chave na barra de pesquisa.  
3️⃣ O usuário pode filtrar os produtos por categoria na barra lateral.  
4️⃣ O usuário clica no botão **"Resgatar"** de um produto desejado.  
5️⃣ O sistema exibe um **modal de confirmação**, mostrando os detalhes do resgate:  
   - Nome do produto  
   - Valor em Dotz  
   - Saldo atual do usuário  

6️⃣ Se o saldo for suficiente:
   - A transação é registrada.  
   - O saldo do usuário é atualizado.  
   - Um alerta confirma o resgate bem-sucedido.   

7️⃣ A página é recarregada para refletir a atualização do saldo.  

## 📌 Melhorias Futuras  
🔄 Exibir o saldo do usuário diretamente no **Header**.   
🔄 Implementar notificações ao invés de alertas para um fluxo mais fluido.  

<br>
<br>

# 🏠 Meus Endereços 
A página **Meus Endereços** permite que os usuários cadastrem, visualizem e removam endereços associados à sua conta.

A página conta com um **Header fixo** que facilita a navegação entre as seções da plataforma.  

## 🚀 Funcionalidades  
✔ **Listagem de endereços** cadastrados pelo usuário.  
✔ **Modal para cadastrar um novo endereço**, garantindo um fluxo amigável.  
✔ **Validação de campos** utilizando `Yup` e `react-hook-form`.  
✔ **Remoção de endereços**, permitindo exclusão com um simples clique.  
✔ **Header fixo**, contendo:  
   - Logo clicável para voltar ao **Dashboard**.  
   - Ícone do usuário com opções de navegação.  

## 🔄 Fluxo de Funcionamento  
1️⃣ O sistema carrega os endereços associados ao usuário autenticado.  
2️⃣ Se o usuário não tiver endereços cadastrados, a página exibe a mensagem **"Nenhum endereço cadastrado"**.  
3️⃣ O usuário pode **adicionar um novo endereço** clicando no botão **"Adicionar Endereço"**, abrindo um **modal**.  
4️⃣ O usuário preenche os campos do formulário e envia o cadastro.  
5️⃣ O sistema valida os dados e, se tudo estiver correto:  
   - O novo endereço é armazenado.  
   - A listagem de endereços é atualizada.  
   - Uma mensagem de sucesso é exibida.  
6️⃣ Para **remover um endereço**, o usuário clica no ícone de exclusão ao lado do endereço desejado.  
7️⃣ O sistema exclui o endereço e atualiza a lista automaticamente.  

## 📌 Melhorias Futuras  
🔄 Implementar API externa para **preenchimento automático de endereços** via CEP.  
🔄 Permitir a **edição de endereços** cadastrados, sem necessidade de exclusão e novo cadastro.  

<br>
<br>

# 📜 Meu Extrato  
A página **Meu Extrato** permite que o usuário acompanhe todas as suas transações de pontos Dotz, incluindo créditos e débitos. Além disso, exibe o **saldo atual** de Dotz do usuário.  

A página possui um **Header fixo**, garantindo fácil navegação dentro da plataforma.  

## 🚀 Funcionalidades  
✔ **Exibição do saldo atual** do usuário em Dotz.  
✔ **Listagem de transações**, detalhando data, descrição e quantidade de pontos movimentados.  
✔ **Diferenciação entre transações de crédito e débito**.  
✔ **Header fixo**, contendo:  
   - Logo clicável para voltar ao **Dashboard**.  
   - Ícone do usuário com opções de navegação.  

## 🔄 Fluxo de Funcionamento  
1️⃣ O sistema busca os dados do usuário autenticado e exibe seu **saldo atual**.  
2️⃣ Em seguida, recupera todas as **transações** associadas ao e-mail do usuário.  
3️⃣ Caso o usuário ainda **não tenha transações**, a página exibe a mensagem **"Você ainda não realizou nenhuma transação."**.  
4️⃣ Caso existam transações, são listadas em ordem cronológica.  
5️⃣ Para cada transação, são exibidos:  
   - **Data**  
   - **Descrição da transação**  
   - **Quantidade de Dotz movimentados**  

## 📌 Melhorias Futuras  
🔄 Implementar **filtros** para que o usuário possa visualizar apenas créditos ou débitos.  
🔄 Adicionar opção de **exportação do extrato** em PDF ou CSV.  
🔄 Implementar **paginação**, evitando carregamento excessivo de transações antigas.  



