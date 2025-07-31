// Application State
let appState = {
    currentView: 'dashboard',
    tasks: [],
    projects: [],
    team: [],
    loading: false
};

// DOM Elements
const elements = {
    navItems: document.querySelectorAll('.nav-item'),
    views: document.querySelectorAll('.view'),
    loading: document.getElementById('loading'),
    taskModal: document.getElementById('task-modal'),
    taskForm: document.getElementById('task-form'),
    toastContainer: document.getElementById('toast-container')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
    try {
        showLoading(true);
        await loadData();
        initializeEventListeners();
        renderDashboard();
        lucide.createIcons();
        showLoading(false);
        showToast('Application loaded successfully!', 'success');
    } catch (error) {
        console.error('Failed to initialize application:', error);
        showToast('Failed to load application data', 'error');
        showLoading(false);
    }
});

// Data Loading Functions
async function loadData() {
    try {
        const [tasksData, projectsData, teamData] = await Promise.all([
            loadJSON('data/tasks.json'),
            loadJSON('data/projects.json'),
            loadJSON('data/team.json')
        ]);

        appState.tasks = tasksData.tasks || [];
        appState.projects = projectsData.projects || [];
        appState.team = teamData.members || [];
    } catch (error) {
        console.error('Error loading data:', error);
        // Use fallback data if JSON files fail to load
        appState.tasks = getFallbackTasks();
        appState.projects = getFallbackProjects();
        appState.team = getFallbackTeam();
    }
}

async function loadJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn(`Failed to load ${url}, using fallback data`);
        throw error;
    }
}

// Fallback Data
function getFallbackTasks() {
    return [
        {
            id: 1,
            title: "Design new landing page",
            description: "Create a modern and responsive landing page for the new product launch",
            status: "in-progress",
            priority: "high",
            projectId: 1,
            assigneeId: 1,
            createdAt: "2025-01-15T10:00:00Z",
            dueDate: "2025-01-20T17:00:00Z"
        },
        {
            id: 2,
            title: "Implement user authentication",
            description: "Add login and registration functionality with JWT tokens",
            status: "pending",
            priority: "high",
            projectId: 1,
            assigneeId: 2,
            createdAt: "2025-01-14T14:30:00Z",
            dueDate: "2025-01-25T17:00:00Z"
        },
        {
            id: 3,
            title: "Write API documentation",
            description: "Document all REST API endpoints with examples",
            status: "completed",
            priority: "medium",
            projectId: 2,
            assigneeId: 3,
            createdAt: "2025-01-10T09:00:00Z",
            dueDate: "2025-01-15T17:00:00Z"
        },
        {
            id: 4,
            title: "Set up CI/CD pipeline",
            description: "Configure automated testing and deployment",
            status: "pending",
            priority: "medium",
            projectId: 2,
            assigneeId: 1,
            createdAt: "2025-01-12T11:00:00Z",
            dueDate: "2025-01-30T17:00:00Z"
        },
        {
            id: 5,
            title: "Mobile app testing",
            description: "Test mobile application on various devices",
            status: "in-progress",
            priority: "low",
            projectId: 3,
            assigneeId: 4,
            createdAt: "2025-01-13T16:00:00Z",
            dueDate: "2025-02-05T17:00:00Z"
        }
    ];
}

function getFallbackProjects() {
    return [
        {
            id: 1,
            name: "E-commerce Platform",
            description: "Modern e-commerce solution with advanced features",
            status: "active",
            progress: 75,
            teamMembers: [1, 2, 3],
            createdAt: "2025-01-01T00:00:00Z",
            dueDate: "2025-03-01T00:00:00Z"
        },
        {
            id: 2,
            name: "API Development",
            description: "RESTful API for mobile and web applications",
            status: "active",
            progress: 60,
            teamMembers: [2, 3],
            createdAt: "2025-01-05T00:00:00Z",
            dueDate: "2025-02-15T00:00:00Z"
        },
        {
            id: 3,
            name: "Mobile App",
            description: "Cross-platform mobile application",
            status: "active",
            progress: 30,
            teamMembers: [4, 1],
            createdAt: "2025-01-10T00:00:00Z",
            dueDate: "2025-04-01T00:00:00Z"
        }
    ];
}

function getFallbackTeam() {
    return [
        {
            id: 1,
            name: "John Doe",
            role: "Frontend Developer",
            email: "john@example.com",
            avatar: "JD",
            tasksCompleted: 24,
            tasksActive: 3
        },
        {
            id: 2,
            name: "Sarah Wilson",
            role: "Backend Developer",
            email: "sarah@example.com",
            avatar: "SW",
            tasksCompleted: 18,
            tasksActive: 2
        },
        {
            id: 3,
            name: "Mike Johnson",
            role: "DevOps Engineer",
            email: "mike@example.com",
            avatar: "MJ",
            tasksCompleted: 15,
            tasksActive: 4
        },
        {
            id: 4,
            name: "Emily Chen",
            role: "UI/UX Designer",
            email: "emily@example.com",
            avatar: "EC",
            tasksCompleted: 22,
            tasksActive: 1
        }
    ];
}

// Event Listeners
function initializeEventListeners() {
    // Navigation
    elements.navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const view = e.currentTarget.dataset.view;
            switchView(view);
        });
    });

    // Modal controls
    document.getElementById('add-task-btn').addEventListener('click', openTaskModal);
    document.getElementById('close-task-modal').addEventListener('click', closeTaskModal);
    document.getElementById('cancel-task').addEventListener('click', closeTaskModal);
    
    // Form submission
    elements.taskForm.addEventListener('submit', handleTaskSubmit);

    // Task filters
    document.getElementById('status-filter').addEventListener('change', filterTasks);
    document.getElementById('priority-filter').addEventListener('change', filterTasks);

    // Close modal on backdrop click
    elements.taskModal.addEventListener('click', (e) => {
        if (e.target === elements.taskModal) {
            closeTaskModal();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTaskModal();
        }
    });
}

// View Management
function switchView(viewName) {
    // Update navigation
    elements.navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewName);
    });

    // Update views
    elements.views.forEach(view => {
        view.classList.toggle('active', view.id === viewName);
    });

    appState.currentView = viewName;

    // Render view content
    switch (viewName) {
        case 'dashboard':
            renderDashboard();
            break;
        case 'projects':
            renderProjects();
            break;
        case 'tasks':
            renderTasks();
            break;
        case 'team':
            renderTeam();
            break;
    }

    // Recreate icons after content update
    setTimeout(() => lucide.createIcons(), 100);
}

// Dashboard Rendering
function renderDashboard() {
    updateStats();
    renderRecentTasks();
    renderProjectOverview();
}

function updateStats() {
    const completedTasks = appState.tasks.filter(task => task.status === 'completed').length;
    const pendingTasks = appState.tasks.filter(task => task.status === 'pending').length;
    const activeProjects = appState.projects.filter(project => project.status === 'active').length;
    const teamMembers = appState.team.length;

    document.getElementById('completed-tasks').textContent = completedTasks;
    document.getElementById('pending-tasks').textContent = pendingTasks;
    document.getElementById('active-projects').textContent = activeProjects;
    document.getElementById('team-members').textContent = teamMembers;
}

function renderRecentTasks() {
    const recentTasks = appState.tasks
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

    const container = document.getElementById('recent-tasks-list');
    container.innerHTML = recentTasks.map(task => createTaskItem(task)).join('');

    // Add click handlers for task checkboxes
    container.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleTaskStatus(parseInt(e.target.dataset.taskId));
        });
    });
}

function renderProjectOverview() {
    const container = document.getElementById('project-overview-list');
    container.innerHTML = appState.projects.map(project => createProjectOverviewItem(project)).join('');
}

// Projects Rendering
function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = appState.projects.map(project => createProjectCard(project)).join('');
}

// Tasks Rendering
function renderTasks() {
    const statusFilter = document.getElementById('status-filter').value;
    const priorityFilter = document.getElementById('priority-filter').value;

    let filteredTasks = appState.tasks;

    if (statusFilter !== 'all') {
        filteredTasks = filteredTasks.filter(task => task.status === statusFilter);
    }

    if (priorityFilter !== 'all') {
        filteredTasks = filteredTasks.filter(task => task.priority === priorityFilter);
    }

    const container = document.getElementById('tasks-container');
    container.innerHTML = filteredTasks.map(task => createTaskCard(task)).join('');
}

// Team Rendering
function renderTeam() {
    const container = document.getElementById('team-grid');
    container.innerHTML = appState.team.map(member => createTeamCard(member)).join('');
}

// HTML Template Functions
function createTaskItem(task) {
    const assignee = appState.team.find(member => member.id === task.assigneeId);
    const project = appState.projects.find(project => project.id === task.projectId);
    
    return `
        <div class="task-item">
            <div class="task-checkbox ${task.status === 'completed' ? 'completed' : ''}" 
                 data-task-id="${task.id}"></div>
            <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-meta">
                    <span class="priority-badge priority-${task.priority}">${task.priority}</span>
                    <span>${project ? project.name : 'No Project'}</span>
                    <span>${assignee ? assignee.name : 'Unassigned'}</span>
                </div>
            </div>
        </div>
    `;
}

function createProjectOverviewItem(project) {
    const taskCount = appState.tasks.filter(task => task.projectId === project.id).length;
    const completedTasks = appState.tasks.filter(task => 
        task.projectId === project.id && task.status === 'completed'
    ).length;

    return `
        <div class="project-item">
            <div class="project-name">${project.name}</div>
            <div class="project-progress">
                <div class="project-progress-bar" style="width: ${project.progress}%"></div>
            </div>
            <div class="project-stats">
                <span>${project.progress}% Complete</span>
                <span>${completedTasks}/${taskCount} Tasks</span>
            </div>
        </div>
    `;
}

function createProjectCard(project) {
    const teamAvatars = project.teamMembers
        .map(memberId => {
            const member = appState.team.find(m => m.id === memberId);
            return member ? `<div class="team-avatar">${member.avatar}</div>` : '';
        })
        .join('');

    const taskCount = appState.tasks.filter(task => task.projectId === project.id).length;

    return `
        <div class="project-card">
            <div class="project-header">
                <div class="project-title">${project.name}</div>
                <button class="project-menu">
                    <i data-lucide="more-horizontal"></i>
                </button>
            </div>
            <div class="project-description">${project.description}</div>
            <div class="project-team">
                <i data-lucide="users"></i>
                <span>Team</span>
                <div class="team-avatars">${teamAvatars}</div>
            </div>
            <div class="project-progress">
                <div class="project-progress-bar" style="width: ${project.progress}%"></div>
            </div>
            <div class="project-stats">
                <span>${project.progress}% Complete</span>
                <span>${taskCount} Tasks</span>
            </div>
        </div>
    `;
}

function createTaskCard(task) {
    const assignee = appState.team.find(member => member.id === task.assigneeId);
    const project = appState.projects.find(project => project.id === task.projectId);

    return `
        <div class="task-card">
            <div class="task-card-header">
                <div>
                    <div class="task-card-title">${task.title}</div>
                    <span class="priority-badge priority-${task.priority}">${task.priority}</span>
                </div>
                <button class="project-menu">
                    <i data-lucide="more-horizontal"></i>
                </button>
            </div>
            <div class="task-card-description">${task.description}</div>
            <div class="task-card-footer">
                <div class="task-assignee">
                    <div class="assignee-avatar">${assignee ? assignee.avatar : '?'}</div>
                    <span>${assignee ? assignee.name : 'Unassigned'}</span>
                </div>
                <div class="task-meta">
                    <span>${project ? project.name : 'No Project'}</span>
                </div>
            </div>
        </div>
    `;
}

function createTeamCard(member) {
    return `
        <div class="team-card">
            <div class="team-avatar-large">${member.avatar}</div>
            <div class="team-name">${member.name}</div>
            <div class="team-role">${member.role}</div>
            <div class="team-stats">
                <div class="team-stat">
                    <div class="team-stat-number">${member.tasksCompleted}</div>
                    <div class="team-stat-label">Completed</div>
                </div>
                <div class="team-stat">
                    <div class="team-stat-number">${member.tasksActive}</div>
                    <div class="team-stat-label">Active</div>
                </div>
            </div>
        </div>
    `;
}

// Modal Functions
function openTaskModal() {
    elements.taskModal.classList.add('active');
    populateTaskFormSelects();
    document.body.style.overflow = 'hidden';
}

function closeTaskModal() {
    elements.taskModal.classList.remove('active');
    elements.taskForm.reset();
    document.body.style.overflow = '';
}

function populateTaskFormSelects() {
    // Populate project select
    const projectSelect = document.getElementById('task-project');
    projectSelect.innerHTML = '<option value="">Select Project</option>' +
        appState.projects.map(project => 
            `<option value="${project.id}">${project.name}</option>`
        ).join('');

    // Populate assignee select
    const assigneeSelect = document.getElementById('task-assignee');
    assigneeSelect.innerHTML = '<option value="">Select Assignee</option>' +
        appState.team.map(member => 
            `<option value="${member.id}">${member.name}</option>`
        ).join('');
}

// Task Management
function handleTaskSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newTask = {
        id: Date.now(), // Simple ID generation
        title: document.getElementById('task-title').value,
        description: document.getElementById('task-description').value,
        priority: document.getElementById('task-priority').value,
        projectId: parseInt(document.getElementById('task-project').value) || null,
        assigneeId: parseInt(document.getElementById('task-assignee').value) || null,
        status: 'pending',
        createdAt: new Date().toISOString(),
        dueDate: null
    };

    appState.tasks.unshift(newTask);
    closeTaskModal();
    
    // Refresh current view
    if (appState.currentView === 'dashboard') {
        renderDashboard();
    } else if (appState.currentView === 'tasks') {
        renderTasks();
    }
    
    lucide.createIcons();
    showToast('Task created successfully!', 'success');
}

function toggleTaskStatus(taskId) {
    const task = appState.tasks.find(t => t.id === taskId);
    if (task) {
        task.status = task.status === 'completed' ? 'pending' : 'completed';
        
        // Refresh current view
        if (appState.currentView === 'dashboard') {
            renderDashboard();
        } else if (appState.currentView === 'tasks') {
            renderTasks();
        }
        
        lucide.createIcons();
        showToast(`Task ${task.status === 'completed' ? 'completed' : 'reopened'}!`, 'success');
    }
}

function filterTasks() {
    renderTasks();
    lucide.createIcons();
}

// Utility Functions
function showLoading(show) {
    elements.loading.classList.toggle('active', show);
    appState.loading = show;
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'x-circle' : 'info';
    
    toast.innerHTML = `
        <i data-lucide="${icon}"></i>
        <span>${message}</span>
    `;
    
    elements.toastContainer.appendChild(toast);
    lucide.createIcons();
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Error Handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    showToast('An unexpected error occurred', 'error');
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    showToast('Failed to load data', 'error');
});