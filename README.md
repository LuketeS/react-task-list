#  React Task List

<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/tailwind%20css-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router">
</p>

<blockquote>
  Gerenciador de tarefas responsivo desenvolvido para consolidar conceitos fundamentais do ecossistema React, arquitetura de componentes e roteamento de páginas.
</blockquote>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-solucoes-tecnicas">Soluções Técnicas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como Executar</a>
</p>

---

## Sobre o Projeto

O **React Task List** foi desenvolvido como um projeto prático para estudo da manipulação de estados locais, componentização e roteamento dinâmico. A interface foi projetada utilizando **Tailwind CSS**.

---

## Funcionalidades

- [x] **Criação de Tarefas:** Adicione tarefas especificando título e descrição.
- [x] **Validação:** Sistema anti-campos em branco utilizando tratamento com `.trim()`.
- [x] **Conclusão Dinâmica:** Altere o estado de conclusão da tarefa com feedback visual imediato (efeito line-through).
- [x] **Roteamento e Detalhes:** Navegação dinâmica utilizando parâmetros de busca (`URLSearchParams`) para visualizar detalhes de cada tarefa isoladamente.
- [x] **Remoção de Itens:** Exclusão inteligente de tarefas filtrando o estado em tempo real.
- [x] **Carga Inicial Automatizada:** Consumo inteligente de dados fictícios via API externa caso o usuário não possua tarefas cadastradas.
- [x] **Persistência Local:** Armazenamento automático no histórico do navegador.

---

## Tecnologias e Bibliotecas

- **[React](https://react.dev/):** Biblioteca principal para a reatividade da interface.
- **[Vite](https://vitejs.dev/):** Ferramenta de build de alta performance.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework utilitário focado em estilização ágil.
- **[React Router DOM](https://reactrouter.com/):** Gerenciamento de rotas e navegação da SPA.
- **[Lucide React](https://lucide.dev/):** Pacote de ícones modernos e leves de alta qualidade.
- **[UUID](https://www.npmjs.com/package/uuid):** Geração de identificadores únicos universais (v4) para garantia de chaves seguras no React.

---

## Como Executar o Projeto Localmente

Certifique-se de ter o **Node.js** instalado em sua máquina.

1. Clone o repositório:
   ```bash
   git clone https://github.com/LuketeS/react-task-list.git

2. Acesse a pasta do projeto:
   ```bash
   cd react-task-list

3. Instale todas as dependências:
   ```bash
   npm install

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
