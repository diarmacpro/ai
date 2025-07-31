// main.js - Application initialization and event handlers
$(document).ready(function() {
  // Initialize components
  window.ui = new Components();
  const main = $('#main');
  const idUser = "4a34f";

  // Menu handlers mapping
  const menuHandlers = {
    dashboard: () => ui.dashboard(),
    whatsapp: () => ui.whatsapp(),
    bot: () => ui.bot(),
    agent: () => ui.agent(),
    knowledge: () => ui.knowledge(),
    contact: () => ui.contact(),
    setting: () => ui.setting(),
    profile: () => ui.profile(idUser),
    pengaturan: () => ui.pengaturan(idUser),
    api: () => ui.api(),
    billing: () => ui.billing(),
    bantuan: () => ui.bantuan(),
    logout: () => ui.logout()
  };

  // Load content based on URL query
  function loadFromUrlQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.keys().next().value || 'dashboard';
    const handler = menuHandlers[page];
    
    if (handler) {
      main.html(handler()).addClass('fade-in');
      // Update active menu item
      updateActiveMenuItem(page);
    } else {
      main.html(menuHandlers.dashboard()).addClass('fade-in');
      updateActiveMenuItem('dashboard');
    }
  }

  // Update active menu item visual state
  function updateActiveMenuItem(activePage) {
    $('[data-menu]').removeClass('active');
    $(`[data-menu="${activePage}"]`).addClass('active');
  }

  // Handle menu clicks
  $(document).on('click', '[data-menu]', function(e) {
    e.preventDefault();
    const key = $(this).data('menu');
    const handler = menuHandlers[key];
    
    if (handler) {
      // Add loading state
      main.html(`
        <div class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-2 text-muted">Memuat ${key}...</p>
        </div>
      `);
      
      // Simulate loading delay for better UX
      setTimeout(() => {
        main.html(handler()).addClass('fade-in');
        updateActiveMenuItem(key);
        
        // Update URL without page reload
        const newUrl = `${window.location.pathname}?${key}`;
        history.pushState({ page: key }, '', newUrl);
      }, 300);
    } else {
      ui.showToast(`Menu "${key}" tidak ditemukan`, 'warning');
    }
  });

  // Handle browser back/forward buttons
  window.onpopstate = function(event) {
    loadFromUrlQuery();
  };

  // Knowledge management event handlers
  $(document).on('click', '.btn-edit-knowledge', function(e) {
    e.preventDefault();
    const id = $(this).data('id');
    ui.editKnowledge(id);
  });

  $(document).on('click', '.btn-delete-knowledge', function(e) {
    e.preventDefault();
    const id = $(this).data('id');
    ui.deleteKnowledge(id);
  });

  // Knowledge form submission
  $(document).on('click', '#formKnowledge', function(e) {
    e.preventDefault();
    ui.saveKnowledge();
  });

  // Bot form submission
  $(document).on('submit', '#botForm', function(e) {
    e.preventDefault();
    ui.saveBot();
    ui.showToast('Bot berhasil disimpan', 'success');
  });

  // Initialize tooltips
  $(document).on('mouseenter', '[title]', function() {
    $(this).tooltip();
  });

  // Auto-dismiss alerts
  $(document).on('click', '.alert .btn-close', function() {
    $(this).closest('.alert').fadeOut();
  });

  // Form validation helpers
  $(document).on('blur', '.form-control[required]', function() {
    const $this = $(this);
    if (!$this.val().trim()) {
      $this.addClass('is-invalid');
    } else {
      $this.removeClass('is-invalid').addClass('is-valid');
    }
  });

  // Search functionality (if needed)
  $(document).on('input', '[data-search]', function() {
    const query = $(this).val().toLowerCase();
    const target = $(this).data('search');
    $(target).each(function() {
      const text = $(this).text().toLowerCase();
      $(this).toggle(text.includes(query));
    });
  });

  // Keyboard shortcuts
  $(document).on('keydown', function(e) {
    // Ctrl+K for quick search
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      $('[data-search]').first().focus();
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
      $('.modal.show').modal('hide');
    }
  });

  // Auto-save drafts (for forms)
  let autoSaveTimeout;
  $(document).on('input', '.auto-save', function() {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
      const formData = $(this).closest('form').serialize();
      localStorage.setItem('draft_' + $(this).closest('form').attr('id'), formData);
      ui.showToast('Draft disimpan otomatis', 'info');
    }, 2000);
  });

  // Load drafts on form open
  $(document).on('show.bs.modal', function(e) {
    const modal = $(e.target);
    const form = modal.find('form');
    if (form.length) {
      const draft = localStorage.getItem('draft_' + form.attr('id'));
      if (draft) {
        // Parse and populate form with draft data
        // Implementation depends on specific form structure
      }
    }
  });

  // Clear drafts on successful submission
  $(document).on('submit', 'form', function() {
    localStorage.removeItem('draft_' + $(this).attr('id'));
  });

  // Initialize the application
  loadFromUrlQuery();
  
  // Show welcome message on first load
  if (!sessionStorage.getItem('welcomed')) {
    setTimeout(() => {
      ui.showToast('Selamat datang di AI Dashboard!', 'success');
      sessionStorage.setItem('welcomed', 'true');
    }, 1000);
  }

  // Performance monitoring
  window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Application loaded in ${Math.round(loadTime)}ms`);
  });

  // Error handling for AJAX requests (if any)
  $(document).ajaxError(function(event, xhr, settings, error) {
    ui.showToast('Terjadi kesalahan koneksi', 'danger');
    console.error('AJAX Error:', error);
  });

  // Cleanup on page unload
  $(window).on('beforeunload', function() {
    // Save any pending data
    $('.auto-save').trigger('input');
  });
});

// Global utility functions
window.utils = {
  formatDate: function(date) {
    return new Date(date).toLocaleDateString('id-ID');
  },
  
  formatCurrency: function(amount) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(amount);
  },
  
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  generateId: function() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
};