# Global State Manager

## :zap: Sobre
Esta é uma aplicação para demonstração do funcionamento básico de um gerenciador de estados globais em react. O gerenciamento de estados é completamente feito usando os hooks useReducer e useContext

## :rocket: Como executar
1. Clonar repositório

<pre><code>git clone https://github.com/gabriel1997castro/react-global-state-manager.git</code></pre>

2. Instalar dependências da aplicação

<pre><code>
  # Instalar dependências
  $ yarn # ou npm install
</code></pre>

3. Executar
<pre><code>
  $  yarn start # ou npm start
</code></pre>

4. Testando aplicação
Basta executar o login fake usando o email gabriel1997.castro@gmail.com e a senha 123456. Ao logar há uma página exibindo olá {user.name}. O nome do usuário logado está em um contexto global que é salvo ao fazer login e pode ser atualizado no botão editar nome.