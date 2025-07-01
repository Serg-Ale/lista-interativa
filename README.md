# 🧠 Desafio: Lista de Tarefas Interativa - DOM e JavaScript

## 📋 Sobre o Desafio

Este é um projeto prático para aplicar conhecimentos de **manipulação do DOM** e **JavaScript**. O objetivo é criar uma lista de tarefas interativa completa que demonstra conceitos fundamentais de desenvolvimento web front-end.

### 🎯 Objetivos de Aprendizagem

Ao completar este desafio, você será capaz de:

- ✅ Selecionar e manipular elementos do DOM
- ✅ Gerenciar eventos de usuário (cliques, entradas de texto)
- ✅ Controlar estado da aplicação com JavaScript
- ✅ Implementar operações CRUD (Criar, Ler, Atualizar, Deletar)
- ✅ Criar feedback visual dinâmico
- ✅ Estruturar código JavaScript de forma organizada
- ✅ Trabalhar com filtros e estados condicionais

---

## 🚀 Funcionalidades da Lista de Tarefas

### ✨ Recursos Implementados

1. **Adicionar Tarefas**: Interface para inserir novas tarefas
2. **Marcar como Concluída**: Checkbox para indicar tarefas finalizadas
3. **Editar Tarefas**: Duplo clique para modificar o texto de uma tarefa
4. **Excluir Tarefas**: Botão para remover tarefas individualmente
5. **Filtrar Tarefas**: Visualizar todas, pendentes ou concluídas
6. **Limpar Concluídas**: Remover todas as tarefas finalizadas de uma vez
7. **Contador de Tarefas**: Exibe quantas tarefas ainda estão pendentes

### 🎨 Interface Visual

- Design responsivo e moderno
- Feedback visual para interações do usuário
- Cores personalizadas para diferentes estados
- Ícones intuitivos para ações

---

## 📁 Estrutura do Projeto

```
lista-tarefas/
├── index.html          # Estrutura HTML da aplicação
├── style.css           # Estilos e design visual
├── script.js           # Lógica JavaScript
└── README.md           # Documentação do projeto
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização com Flexbox e transições
- **JavaScript (ES6+)**: Lógica de programação e manipulação do DOM
- **Font Awesome**: Biblioteca de ícones
- **Google Fonts**: Tipografia personalizada

---

## 🔍 Conceitos de DOM Aplicados

### 1. **Seleção de Elementos**
```javascript
// Exemplos do projeto
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');
```

### 2. **Manipulação de Conteúdo**
```javascript
// Alterando texto dinamicamente
taskText.textContent = task.text;
tasksCounter.textContent = `${remainingTasks} tarefa${remainingTasks !== 1 ? 's' : ''} restante${remainingTasks !== 1 ? 's' : ''}`;
```

### 3. **Manipulação de Classes CSS**
```javascript
// Controlando estados visuais
taskItem.classList.add('completed');
btn.classList.remove('active');
```

### 4. **Criação Dinâmica de Elementos**
```javascript
// Gerando elementos de tarefa
const taskItem = document.createElement('li');
const checkbox = document.createElement('input');
const taskText = document.createElement('span');
const deleteBtn = document.createElement('button');
```

### 5. **Gerenciamento de Eventos**
```javascript
// Eventos de interação
addTaskBtn.addEventListener('click', addTask);
taskText.addEventListener('dblclick', startEditing);
checkbox.addEventListener('change', toggleTaskStatus);
```

---

## 🎮 Como Funciona

### Fluxo da Aplicação

1. **Entrada**: Usuário digita uma tarefa e pressiona Enter ou clica em "Adicionar"
2. **Visualização**: A tarefa aparece na lista com opções de interação
3. **Interação**: Usuário pode marcar como concluída, editar ou excluir
4. **Filtragem**: Pode alternar entre diferentes visualizações (todas, pendentes, concluídas)
5. **Gerenciamento**: Pode limpar todas as tarefas concluídas de uma vez

### Estados da Aplicação

- **Estado das Tarefas**: Array de objetos com id, texto e status
- **Estado de Filtro**: Controla quais tarefas são exibidas
- **Estado de Edição**: Controla quando uma tarefa está sendo editada

---

## 🏗️ Implementação Técnica

### Estrutura de Dados

```javascript
// Array de tarefas
let tasks = [
  {
    id: 1625046000000,
    text: 'Exemplo de tarefa',
    completed: false
  },
  // ... mais tarefas
];

// Estado de filtro
let currentFilter = 'all'; // 'all', 'active', 'completed'
```

### Funções Principais

- `addTask()`: Adiciona uma nova tarefa ao array
- `deleteTask(id)`: Remove uma tarefa específica
- `toggleTaskStatus(id)`: Alterna o estado de conclusão
- `editTask(id, newText)`: Atualiza o texto de uma tarefa
- `clearCompletedTasks()`: Remove todas as tarefas concluídas
- `changeFilter(filter)`: Altera o filtro de visualização
- `renderTasks()`: Atualiza a interface com base no estado atual
- `updateTasksCounter()`: Atualiza o contador de tarefas pendentes

---

## 🎯 Desafios para Praticar

### Nível Iniciante
- [ ] Adicionar data de criação às tarefas
- [ ] Modificar cores e estilos do CSS
- [ ] Adicionar confirmação antes de excluir

### Nível Intermediário
- [ ] Implementar armazenamento local (localStorage)
- [ ] Adicionar categorias ou etiquetas às tarefas
- [ ] Criar sistema de prioridades (alta, média, baixa)

### Nível Avançado
- [ ] Implementar arrastar e soltar para reordenar tarefas
- [ ] Adicionar datas de vencimento e notificações
- [ ] Criar sincronização com uma API externa

---

## 💡 Conceitos Importantes Demonstrados

### 1. **Manipulação do DOM**
O projeto demonstra como:
- Selecionar elementos por ID e classe
- Modificar conteúdo e atributos
- Adicionar/remover classes CSS
- Criar elementos dinamicamente

### 2. **Gerenciamento de Estado**
- Armazenamento de dados em arrays
- Sincronização entre estado e interface
- Filtragem de dados baseada em critérios

### 3. **Eventos e Interatividade**
- Event listeners para diferentes ações
- Manipulação de eventos de teclado e mouse
- Edição inline de conteúdo

### 4. **Programação Funcional**
- Métodos de array (map, filter, forEach)
- Funções de ordem superior
- Operações imutáveis em dados

---

## 📚 Recursos para Estudar

### Documentação Oficial
- [MDN - Document Object Model](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)
- [MDN - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [MDN - Array Methods](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Conceitos Essenciais
- Manipulação do DOM
- Event handling
- Métodos de array
- Template literals
- Arrow functions

---

## 🚀 Como Executar o Projeto

1. **Clone ou baixe os arquivos**
2. **Abra o arquivo `index.html` em um navegador**
3. **Comece a adicionar, editar e gerenciar suas tarefas**

### Estrutura Mínima Necessária

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Lista de Tarefas</title>
</head>
<body>
    <!-- Estrutura da lista de tarefas aqui -->
    <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 Personalização e Melhorias

### Ideias de Customização

1. **Visual**
   - Alterar esquema de cores
   - Adicionar animações CSS
   - Implementar modo escuro

2. **Funcionalidades**
   - Sistema de subtarefas
   - Opção de favoritar tarefas importantes
   - Histórico de tarefas concluídas

3. **Usabilidade**
   - Atalhos de teclado
   - Opções de ordenação
   - Exportar/importar tarefas

---

## 🏆 Objetivos do Desafio

### ✅ Critérios de Conclusão

- [ ] Adição de tarefas funciona corretamente
- [ ] Marcação de tarefas como concluídas está implementada
- [ ] Edição e exclusão de tarefas funcionam
- [ ] Filtros mostram as tarefas corretas
- [ ] Contador de tarefas é atualizado adequadamente
- [ ] Código está organizado e comentado

### 🌟 Pontos Extras

- [ ] Implementar persistência de dados (localStorage)
- [ ] Melhorar design visual e responsividade
- [ ] Adicionar animações e transições
- [ ] Implementar funcionalidades adicionais criativas

---

## 🤝 Suporte e Dicas

### Erros Comuns
- Elementos não encontrados (verifique IDs)
- Event listeners não funcionando (aguarde DOM carregar)
- Problemas com escopo de variáveis
- Erros ao manipular arrays

### Dicas de Debugging
- Use `console.log()` para verificar valores
- Inspecione elementos com as ferramentas do navegador
- Teste uma funcionalidade por vez
- Verifique o console para mensagens de erro

---

## 📝 Conclusão

Este projeto de Lista de Tarefas é uma excelente oportunidade para praticar conceitos fundamentais de desenvolvimento web front-end. Ele combina manipulação do DOM, gerenciamento de estado e interatividade do usuário em uma aplicação prática e útil.

A lista de tarefas é um projeto clássico para aprender JavaScript porque abrange muitos conceitos essenciais em um contexto familiar e intuitivo. Ao concluir este desafio, você terá construído uma base sólida para projetos mais complexos no futuro.

**Lembre-se**: A prática constante é a chave para dominar o desenvolvimento web. Não tenha medo de experimentar, modificar o código e adicionar suas próprias funcionalidades!

---

**Boa sorte com o desafio! 🚀**

*Desenvolvido como material didático para aprendizado de DOM e JavaScript.*