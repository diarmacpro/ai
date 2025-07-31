// Enhanced Main Application Logic
class App {
  constructor() {
    this.ui = new Components();
    this.currentUser = null;
    this.isLoggedIn = false;
    
    this.init();
  }

  init() {
    // Initialize Lucide icons
    this.initIcons();
    
    // Check login status
    this.checkLoginStatus();
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Load initial content
    this.loadFromUrl();
    
    // Setup popstate handler
    window.addEventListener('popstate', () => this.loadFromUrl());
  }

  initIcons() {
    // Initialize Lucide icons when DOM is ready
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    } else {
      // Retry after a short delay if lucide is not loaded yet
      setTimeout(() => this.initIcons(), 100);
    }
  }

  checkLoginStatus() {
    this.isLoggedIn = localStorage.getItem('login') === 'true';
    const navbar = document.getElementById('mainNavbar');
    
    if (this.isLoggedIn) {
      navbar.style.display = 'block';
      this.currentUser = {
        name: 'John Doe',
        email: 'john.doe@example.com'
      };
    } else {
      navbar.style.display = 'none';
    }
  }

  setupEventListeners() {
    const main = document.getElementById('main');
    
    // Login form handler
    main.addEventListener('submit', (e) => {
      if (e.target.id === 'formLogin') {
        e.preventDefault();
        this.handleLogin(e.target);
      }
    });

    // Menu navigation handler
    document.addEventListener('click', (e) => {
      const menuItem = e.target.closest('[data-menu]');
      if (menuItem) {
        e.preventDefault();
        const menu = menuItem.getAttribute('data-menu');
        this.navigateToMenu(menu);
      }
    });

    // Temperature slider handler
    main.addEventListener('input', (e) => {
      if (e.target.id === 'temperature') {
        const tempValue = document.getElementById('tempValue');
        if (tempValue) {
          tempValue.textContent = e.target.value;
        }
      }
    });

    // Search functionality
    main.addEventListener('input', (e) => {
      if (e.target.id === 'faqSearch') {
        this.handleFaqSearch(e.target.value);
      }
    });
  }

  handleLogin(form) {
    const username = form.querySelector('#username').value;
    const password = form.querySelector('#password').value;
    
    this.showLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (username === 'abc' && password === 'abc123') {
        localStorage.setItem('login', 'true');
        this.isLoggedIn = true;
        this.currentUser = {
          name: 'John Doe',
          email: 'john.doe@example.com'
        };
        
        document.getElementById('mainNavbar').style.display = 'block';
        this.navigateToMenu('dashboard');
        this.showNotification('Login berhasil!', 'success');
      } else {
        this.showNotification('Username atau password salah!', 'error');
      }
      this.showLoading(false);
    }, 1000);
  }

  navigateToMenu(menu) {
    if (!this.isLoggedIn && menu !== 'login') {
      this.loadContent(this.ui.login());
      return;
    }

    const menuHandlers = {
      dashboard: () => this.ui.dashboard(),
      konektor: () => this.ui.konektor(),
      data: () => this.ui.data(),
      setting: () => this.ui.setting(),
      pengaturan: () => this.ui.pengaturan(),
      bantuan: () => this.ui.bantuan(),
      logout: () => this.handleLogout()
    };

    const handler = menuHandlers[menu];
    if (handler) {
      if (menu === 'logout') {
        handler();
      } else {
        this.loadContent(handler());
        this.updateUrl(menu);
      }
    }
  }

  handleLogout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
      localStorage.removeItem('login');
      this.isLoggedIn = false;
      this.currentUser = null;
      document.getElementById('mainNavbar').style.display = 'none';
      this.loadContent(this.ui.login());
      this.updateUrl('');
      this.showNotification('Logout berhasil!', 'info');
    }
  }

  loadFromUrl() {
    const query = window.location.search.substring(1);
    
    if (!query && !this.isLoggedIn) {
      this.loadContent(this.ui.login());
      return;
    }
    
    if (!query && this.isLoggedIn) {
      this.navigateToMenu('dashboard');
      return;
    }
    
    this.navigateToMenu(query);
  }

  loadContent(content) {
    const main = document.getElementById('main');
    main.innerHTML = content;
    main.classList.add('fade-in');
    
    // Reinitialize icons after content load
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }

  updateUrl(menu) {
    const newUrl = menu ? `${window.location.pathname}?${menu}` : window.location.pathname;
    history.pushState(null, '', newUrl);
  }

  showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = show ? 'block' : 'none';
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${this.getAlertClass(type)} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    
    const icon = this.getNotificationIcon(type);
    notification.innerHTML = `
      <i data-lucide="${icon}" class="me-2" style="width: 16px; height: 16px;"></i>
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Initialize icons for the notification
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 5000);
  }

  getAlertClass(type) {
    const classes = {
      'success': 'success',
      'error': 'danger',
      'warning': 'warning',
      'info': 'info'
    };
    return classes[type] || 'info';
  }

  getNotificationIcon(type) {
    const icons = {
      'success': 'check-circle',
      'error': 'x-circle',
      'warning': 'alert-triangle',
      'info': 'info'
    };
    return icons[type] || 'info';
  }

  handleFaqSearch(query) {
    // Simple FAQ search implementation
    const faqItems = document.querySelectorAll('.accordion-item');
    const searchTerm = query.toLowerCase();
    
    faqItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      const shouldShow = !query || text.includes(searchTerm);
      item.style.display = shouldShow ? 'block' : 'none';
    });
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});

// Global utility functions
window.utils = {
  formatDate: (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  },
  
  formatNumber: (num) => {
    return new Intl.NumberFormat('id-ID').format(num);
  },
  
  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      window.app.showNotification('Berhasil disalin ke clipboard!', 'success');
    } catch (err) {
      window.app.showNotification('Gagal menyalin ke clipboard', 'error');
    }
  }
};