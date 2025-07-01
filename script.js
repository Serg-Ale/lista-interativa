// Espera o DOM (Document Object Model) ser completamente carregado antes de executar o código
// Isso garante que todos os elementos HTML estejam disponíveis para manipulação
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== SELEÇÃO DE ELEMENTOS DOM ====================
    // Aqui selecionamos os elementos HTML usando seus IDs e classes para manipulá-los depois
    
    // Elementos do formulário
    const taskInput = document.getElementById('task-input'); // Campo de entrada de texto
    const addTaskBtn = document.getElementById('add-task-btn'); // Botão de adicionar tarefa
    
    // Lista de tarefas
    const taskList = document.getElementById('task-list'); // Lista onde as tarefas serão exibidas
    
    // Elementos de estatísticas e filtros
    const tasksCounter = document.getElementById('tasks-counter'); // Contador de tarefas restantes
    const clearCompletedBtn = document.getElementById('clear-completed'); // Botão para limpar tarefas concluídas
    const filterBtns = document.querySelectorAll('.filter-btn'); // Botões de filtro (Todas, Pendentes, Concluídas)
    
    // ==================== VARIÁVEIS DE ESTADO ====================
    // Estas variáveis controlam o estado atual da aplicação
    
    // Array para armazenar todas as tarefas
    // Cada tarefa é um objeto com: id, texto e status (concluída ou não)
    let tasks = [];
    
    // Filtro atual (all, active, completed)
    let currentFilter = 'all';
    
    // ==================== FUNÇÕES PRINCIPAIS ====================
    
    // Função para adicionar uma nova tarefa
    function addTask() {
        // Obtém o texto da tarefa do campo de entrada e remove espaços extras
        const taskText = taskInput.value.trim();
        
        // Verifica se o texto não está vazio
        if (taskText === '') {
            // Alerta o usuário se o campo estiver vazio
            alert('Por favor, digite uma tarefa!');
            return; // Sai da função sem adicionar tarefa
        }
        
        // Cria um objeto para a nova tarefa
        const newTask = {
            id: Date.now(), // Usa o timestamp atual como ID único
            text: taskText, // Texto da tarefa
            completed: false // Inicialmente, a tarefa não está concluída
        };
        
        // Adiciona a nova tarefa ao array de tarefas
        tasks.push(newTask);
        
        // Limpa o campo de entrada
        taskInput.value = '';
        
        // Atualiza a interface do usuário
        renderTasks();
        updateTasksCounter();
    }
    
    // Função para remover uma tarefa
    function deleteTask(taskId) {
        // Filtra o array de tarefas, mantendo apenas as que não têm o ID especificado
        tasks = tasks.filter(task => task.id !== taskId);
        
        // Atualiza a interface do usuário
        renderTasks();
        updateTasksCounter();
    }
    
    // Função para alternar o status de uma tarefa (concluída/pendente)
    function toggleTaskStatus(taskId) {
        // Percorre o array de tarefas
        tasks = tasks.map(task => {
            // Se encontrar a tarefa com o ID especificado
            if (task.id === taskId) {
                // Inverte o status de completed (true -> false ou false -> true)
                return { ...task, completed: !task.completed };
            }
            return task; // Mantém as outras tarefas inalteradas
        });
        
        // Atualiza a interface do usuário
        renderTasks();
        updateTasksCounter();
    }
    
    // Função para editar o texto de uma tarefa
    function editTask(taskId, newText) {
        // Verifica se o novo texto não está vazio
        if (newText.trim() === '') {
            alert('O texto da tarefa não pode estar vazio!');
            renderTasks(); // Re-renderiza para cancelar a edição
            return;
        }
        
        // Atualiza o texto da tarefa com o ID especificado
        tasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, text: newText.trim() };
            }
            return task;
        });
        
        // Atualiza a interface do usuário
        renderTasks();
    }
    
    // Função para limpar todas as tarefas concluídas
    function clearCompletedTasks() {
        // Filtra o array, mantendo apenas as tarefas não concluídas
        tasks = tasks.filter(task => !task.completed);
        
        // Atualiza a interface do usuário
        renderTasks();
        updateTasksCounter();
    }
    
    // Função para atualizar o contador de tarefas restantes
    function updateTasksCounter() {
        // Conta quantas tarefas não estão concluídas
        const remainingTasks = tasks.filter(task => !task.completed).length;
        
        // Atualiza o texto do contador
        // Usa singular ou plural dependendo da quantidade
        tasksCounter.textContent = `${remainingTasks} tarefa${remainingTasks !== 1 ? 's' : ''} restante${remainingTasks !== 1 ? 's' : ''}`;
    }
    
    // Função para mudar o filtro atual
    function changeFilter(filter) {
        // Atualiza a variável de filtro
        currentFilter = filter;
        
        // Remove a classe 'active' de todos os botões de filtro
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe 'active' ao botão do filtro selecionado
        document.querySelector(`.filter-btn[data-filter="${filter}"]`).classList.add('active');
        
        // Atualiza a interface do usuário com o novo filtro
        renderTasks();
    }
    
    // ==================== FUNÇÕES DE RENDERIZAÇÃO ====================
    
    // Função para renderizar as tarefas na interface
    function renderTasks() {
        // Limpa a lista de tarefas atual
        taskList.innerHTML = '';
        
        // Filtra as tarefas de acordo com o filtro atual
        let filteredTasks = tasks;
        
        if (currentFilter === 'active') {
            // Mostra apenas tarefas não concluídas
            filteredTasks = tasks.filter(task => !task.completed);
        } else if (currentFilter === 'completed') {
            // Mostra apenas tarefas concluídas
            filteredTasks = tasks.filter(task => task.completed);
        }
        
        // Se não houver tarefas para mostrar
        if (filteredTasks.length === 0) {
            // Cria um elemento para mostrar mensagem
            const emptyMessage = document.createElement('li');
            emptyMessage.className = 'task-item empty-message';
            
            // Define a mensagem de acordo com o filtro
            if (currentFilter === 'all') {
                emptyMessage.textContent = 'Nenhuma tarefa adicionada. Adicione sua primeira tarefa!';
            } else if (currentFilter === 'active') {
                emptyMessage.textContent = 'Nenhuma tarefa pendente. Bom trabalho!';
            } else {
                emptyMessage.textContent = 'Nenhuma tarefa concluída ainda.';
            }
            
            // Adiciona a mensagem à lista
            taskList.appendChild(emptyMessage);
            return;
        }
        
        // Para cada tarefa filtrada, cria um elemento na lista
        filteredTasks.forEach(task => {
            // Cria um item de lista para a tarefa
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.dataset.id = task.id; // Armazena o ID da tarefa como atributo de dados
            
            // Adiciona a classe 'completed' se a tarefa estiver concluída
            if (task.completed) {
                taskItem.classList.add('completed');
            }
            
            // Cria o checkbox para marcar a tarefa como concluída
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-check';
            checkbox.checked = task.completed;
            
            // Adiciona evento de clique ao checkbox
            checkbox.addEventListener('change', () => {
                toggleTaskStatus(task.id);
            });
            
            // Cria o elemento de texto da tarefa
            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = task.text;
            
            // Adiciona evento de duplo clique para editar a tarefa
            taskText.addEventListener('dblclick', () => {
                // Adiciona a classe 'editing' ao item da tarefa
                taskItem.classList.add('editing');
                
                // Cria um campo de entrada para editar o texto
                const editInput = document.createElement('input');
                editInput.type = 'text';
                editInput.className = 'edit-input';
                editInput.value = task.text;
                
                // Insere o campo de entrada após o texto
                taskItem.insertBefore(editInput, taskText.nextSibling);
                
                // Foca no campo de entrada
                editInput.focus();
                
                // Função para finalizar a edição
                const finishEditing = () => {
                    const newText = editInput.value;
                    editTask(task.id, newText);
                };
                
                // Adiciona eventos para finalizar a edição
                editInput.addEventListener('blur', finishEditing); // Quando o campo perde o foco
                editInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        finishEditing();
                    }
                });
            });
            
            // Cria o botão de excluir
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'; // Ícone de lixeira
            
            // Adiciona evento de clique ao botão de excluir
            deleteBtn.addEventListener('click', () => {
                deleteTask(task.id);
            });
            
            // Adiciona todos os elementos ao item da tarefa
            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskText);
            taskItem.appendChild(deleteBtn);
            
            // Adiciona o item da tarefa à lista
            taskList.appendChild(taskItem);
        });
    }
    
    // ==================== EVENTOS ====================
    
    // Evento de clique no botão de adicionar tarefa
    addTaskBtn.addEventListener('click', addTask);
    
    // Evento de tecla pressionada no campo de entrada
    taskInput.addEventListener('keypress', (e) => {
        // Se a tecla pressionada for Enter
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // Evento de clique no botão de limpar tarefas concluídas
    clearCompletedBtn.addEventListener('click', clearCompletedTasks);
    
    // Eventos de clique nos botões de filtro
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Obtém o valor do filtro do atributo data-filter
            const filter = btn.dataset.filter;
            changeFilter(filter);
        });
    });
    
    // ==================== INICIALIZAÇÃO ====================
    
    // Renderiza as tarefas iniciais (vazio no começo)
    renderTasks();
    
    // Atualiza o contador de tarefas
    updateTasksCounter();
});