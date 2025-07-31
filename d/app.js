// Main Application Logic
class App {
  constructor() {
    this.ui = new Components();
    this.currentMenu = 'dashboard';
    this.init();
  }

  init() {
    // Initialize Lucide icons
    document.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons();
    });

    // Setup menu handlers
    this.setupMenuHandlers();
    
    // Load initial content
    this.loadFromUrlQuery();
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.loadFromUrlQuery();
    });

    // Setup event listeners
    this.setupEventListeners();
  }

  setupMenuHandlers() {
    const menuHandlers = {
      dashboard: () => this.ui.dashboard(),
      agent: () => this.ui.agent(),
      database: () => this.ui.database(),
      setting: () => this.ui.setting(),
      pengaturan: () => this.ui.pengaturan(),
      bantuan: () => this.ui.bantuan(),
      logout: () => this.ui.logout(),
    };

    // Handle menu clicks
    $(document).on('click', '[data-menu]', (e) => {
      e.preventDefault();
      const key = $(e.currentTarget).data('menu');
      const handler = menuHandlers[key];
      
      if (typeof handler === 'function') {
        this.showLoading();
        
        // Simulate loading delay for better UX
        setTimeout(() => {
          const content = handler();
          this.loadContent(content);
          this.updateActiveMenu(key);
          this.updateUrl(key);
          this.hideLoading();
        }, 300);
      } else {
        console.warn(`Handler tidak ditemukan untuk menu: "${key}"`);
      }
    });
  }

  setupEventListeners() {
    // QR Code scan button
    $(document).on('click', '#btn-scan-qr', () => {
      this.showQRModal();
    });

    // Search functionality
    $(document).on('input', '#faqSearch', (e) => {
      this.filterFAQ(e.target.value);
    });

    // Form submissions
    $(document).on('submit', 'form', (e) => {
      e.preventDefault();
      this.handleFormSubmit(e.target);
    });

    // Auto-save for settings
    $(document).on('change', '.form-control, .form-select, .form-check-input', (e) => {
      if ($(e.target).closest('.card-header').find('h5').text().includes('Pengaturan')) {
        this.autoSave();
      }
    });
  }

  loadFromUrlQuery() {
    const query = window.location.search.substring(1) || 'dashboard';
    const validMenus = ['dashboard', 'agent', 'database', 'setting', 'pengaturan', 'bantuan'];
    
    if (validMenus.includes(query)) {
      this.currentMenu = query;
      const content = this.ui[query]();
      this.loadContent(content);
      this.updateActiveMenu(query);
    } else {
      // Default to dashboard
      this.currentMenu = 'dashboard';
      this.loadContent(this.ui.dashboard());
      this.updateActiveMenu('dashboard');
    }
  }

  loadContent(content) {
    const main = $('#main');
    main.fadeOut(200, () => {
      main.html(content).fadeIn(300, () => {
        // Reinitialize Lucide icons for new content
        lucide.createIcons();
      });
    });
  }

  updateActiveMenu(activeKey) {
    $('.menu-item').removeClass('active');
    $(`.menu-item[data-menu="${activeKey}"]`).addClass('active');
  }

  updateUrl(key) {
    const newUrl = `${window.location.pathname}?${key}`;
    history.pushState(null, '', newUrl);
  }

  showLoading() {
    $('#loading').removeClass('d-none');
  }

  hideLoading() {
    $('#loading').addClass('d-none');
  }

  showQRModal() {
    // Create modal dynamically
    const modalHtml = `
      <div class="modal fade" id="qrModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                <i data-lucide="qr-code" class="me-2"></i>Scan QR WhatsApp
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center">
              <div class="qr-placeholder bg-light p-4 rounded mb-3" style="height: 200px; display: flex; align-items: center; justify-content: center;">
                <div>
                  <i data-lucide="qr-code" style="width: 64px; height: 64px;" class="text-muted mb-2"></i>
                  <p class="text-muted">QR Code akan muncul di sini</p>
                </div>
              </div>
              <p class="text-muted small">Scan QR code ini dengan WhatsApp untuk menghubungkan bot</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
              <button type="button" class="btn btn-primary">Refresh QR</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Remove existing modal if any
    $('#qrModal').remove();
    
    // Add modal to body
    $('body').append(modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('qrModal'));
    modal.show();
    
    // Reinitialize icons
    lucide.createIcons();
  }

  filterFAQ(searchTerm) {
    const faqItems = $('.accordion-item');
    
    if (!searchTerm) {
      faqItems.show();
      return;
    }
    
    faqItems.each(function() {
      const text = $(this).text().toLowerCase();
      if (text.includes(searchTerm.toLowerCase())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  handleFormSubmit(form) {
    const formData = new FormData(form);
    const formType = $(form).closest('.card').find('.card-header h5').text();
    
    // Show success message
    this.showToast(`${formType} berhasil disimpan!`, 'success');
    
    // Log form data (in real app, send to server)
    console.log('Form submitted:', Object.fromEntries(formData));
  }

  autoSave() {
    // Debounce auto-save
    clearTimeout(this.autoSaveTimeout);
    this.autoSaveTimeout = setTimeout(() => {
      this.showToast('Pengaturan otomatis tersimpan', 'info');
    }, 1000);
  }

  showToast(message, type = 'info') {
    // Create toast dynamically
    const toastHtml = `
      <div class="toast align-items-center text-white bg-${type} border-0" role="alert">
        <div class="d-flex">
          <div class="toast-body">
            <i data-lucide="check-circle" class="me-2"></i>${message}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>
    `;
    
    // Create toast container if not exists
    if (!$('#toastContainer').length) {
      $('body').append('<div id="toastContainer" class="toast-container position-fixed top-0 end-0 p-3"></div>');
    }
    
    // Add toast
    const $toast = $(toastHtml);
    $('#toastContainer').append($toast);
    
    // Show toast
    const toast = new bootstrap.Toast($toast[0]);
    toast.show();
    
    // Reinitialize icons
    lucide.createIcons();
    
    // Remove toast after it's hidden
    $toast.on('hidden.bs.toast', function() {
      $(this).remove();
    });
  }
}

// Initialize app when DOM is ready
$(document).ready(() => {
  window.app = new App();
});