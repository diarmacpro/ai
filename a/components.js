// components.js
class Components {
  constructor() {
    this.data = {
      knowledge: [
        {
          id: 1,
          title: "Cara Reset Password",
          content: "Langkah-langkah untuk mereset password akun pengguna:\n1. Masuk ke halaman login\n2. Klik 'Lupa Password'\n3. Masukkan email terdaftar\n4. Cek inbox untuk link reset\n5. Ikuti petunjuk di email"
        },
        {
          id: 2,
          title: "Penanganan Akun Terblokir",
          content: "Informasi mengenai proses verifikasi jika akun terblokir:\n1. Hubungi customer service\n2. Siapkan dokumen identitas\n3. Tunggu proses verifikasi 1-3 hari\n4. Akun akan diaktifkan kembali"
        },
        {
          id: 3,
          title: "Panduan Menggunakan API",
          content: "Dokumentasi lengkap penggunaan API:\n1. Dapatkan API key dari dashboard\n2. Gunakan header Authorization\n3. Format request dalam JSON\n4. Periksa response status code"
        }
      ],
      whatsappAccounts: [
        { id: 1, name: "Customer Support", number: "6281234567890", status: "connected", webhook: "https://example.com/webhook1" },
        { id: 2, name: "Admin Sales", number: "6289876543210", status: "disconnected", webhook: "" },
        { id: 3, name: "Marketing Bot", number: "6285555123456", status: "connected", webhook: "https://example.com/webhook2" }
      ],
      bots: [
        { id: 1, name: "Bot Customer Care", knowledge: "knowledge-customer-support", prompt: "Anda adalah asisten ramah untuk customer service..." },
        { id: 2, name: "Bot Bantuan Mahasiswa", knowledge: "knowledge-akademik", prompt: "Jawablah sebagai dosen pembimbing akademik..." },
        { id: 3, name: "Bot Sales", knowledge: "knowledge-sales", prompt: "Anda adalah sales profesional yang membantu pelanggan..." }
      ],
      agents: [
        { id: 1, name: "ChatBot Admin", model: "gpt-4-turbo", endpoint: "https://api.example.com/chat", payload: '{ "prompt": "...", "max_tokens": 100 }' },
        { id: 2, name: "Asisten Respon Cepat", model: "gemini-pro", endpoint: "https://api.example.com/respond", payload: '{ "text": "...", "context": "..." }' },
        { id: 3, name: "AI Translator", model: "claude-3", endpoint: "https://api.example.com/translate", payload: '{ "source": "...", "target": "id" }' }
      ],
      contacts: [
        { id: 1, name: "John Doe", phone: "6281234567890", email: "john@example.com", status: "active" },
        { id: 2, name: "Jane Smith", phone: "6289876543210", email: "jane@example.com", status: "active" },
        { id: 3, name: "Bob Johnson", phone: "6285555123456", email: "bob@example.com", status: "inactive" }
      ],
      stats: {
        totalContacts: 1240,
        totalAgents: 32,
        activeBots: 12,
        apiUsage: 8520,
        monthlyStats: {
          newContacts: 340,
          messagesSent: 12560,
          totalApiCalls: 22314
        }
      }
    };
  }

  showToast(message, type = 'info') {
    const toastHtml = `
      <div class="toast align-items-center text-bg-${type} border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">${message}</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>
    `;
    const toastContainer = document.getElementById('toastContainer');
    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    const toastElement = toastContainer.lastElementChild;
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
    
    setTimeout(() => {
      toastElement.remove();
    }, 5000);
  }

  dashboard() {
    const stats = this.data.stats;
    return `
      <div class="container-fluid">
        <div class="row mb-4">
          <div class="col">
            <h2 class="mb-0">Dashboard</h2>
            <p class="text-muted">Selamat datang di AI Dashboard</p>
          </div>
        </div>

        <div class="row g-4 mb-4">
          <div class="col-xl-3 col-md-6">
            <div class="card bg-primary text-white shadow-sm">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div>
                    <h6 class="card-title text-white-50">Total Kontak</h6>
                    <h3 class="mb-0">${stats.totalContacts.toLocaleString()}</h3>
                  </div>
                  <div class="align-self-center">
                    <i class="bi bi-people fs-1 opacity-50"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6">
            <div class="card bg-success text-white shadow-sm">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div>
                    <h6 class="card-title text-white-50">Total Agen</h6>
                    <h3 class="mb-0">${stats.totalAgents}</h3>
                  </div>
                  <div class="align-self-center">
                    <i class="bi bi-cpu fs-1 opacity-50"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6">
            <div class="card bg-warning text-white shadow-sm">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div>
                    <h6 class="card-title text-white-50">Bot Aktif</h6>
                    <h3 class="mb-0">${stats.activeBots}</h3>
                  </div>
                  <div class="align-self-center">
                    <i class="bi bi-robot fs-1 opacity-50"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6">
            <div class="card bg-danger text-white shadow-sm">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div>
                    <h6 class="card-title text-white-50">API Digunakan</h6>
                    <h3 class="mb-0">${stats.apiUsage.toLocaleString()}</h3>
                  </div>
                  <div class="align-self-center">
                    <i class="bi bi-graph-up fs-1 opacity-50"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-lg-6">
            <div class="card shadow-sm h-100">
              <div class="card-header bg-light">
                <h5 class="mb-0">Aktivitas Terakhir</h5>
              </div>
              <div class="card-body">
                <div class="activity-item">
                  <div class="activity-icon bg-primary">
                    <i class="bi bi-box-arrow-in-right text-white"></i>
                  </div>
                  <div class="activity-content">
                    <p class="mb-1">Login dari IP 192.168.1.11</p>
                    <small class="text-muted">2 jam yang lalu</small>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-icon bg-success">
                    <i class="bi bi-person-check text-white"></i>
                  </div>
                  <div class="activity-content">
                    <p class="mb-1">Update profil pengguna</p>
                    <small class="text-muted">4 jam yang lalu</small>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-icon bg-info">
                    <i class="bi bi-person-plus text-white"></i>
                  </div>
                  <div class="activity-content">
                    <p class="mb-1">Menambahkan 10 kontak baru</p>
                    <small class="text-muted">1 hari yang lalu</small>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-icon bg-warning">
                    <i class="bi bi-trash text-white"></i>
                  </div>
                  <div class="activity-content">
                    <p class="mb-1">Menghapus 1 agen</p>
                    <small class="text-muted">2 hari yang lalu</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card shadow-sm h-100">
              <div class="card-header bg-light">
                <h5 class="mb-0">Statistik Bulanan</h5>
              </div>
              <div class="card-body">
                <div class="row text-center">
                  <div class="col-4">
                    <div class="mb-3">
                      <h4 class="text-primary">${stats.monthlyStats.newContacts}</h4>
                      <small class="text-muted">Kontak Baru</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="mb-3">
                      <h4 class="text-success">${stats.monthlyStats.messagesSent.toLocaleString()}</h4>
                      <small class="text-muted">Pesan Terkirim</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="mb-3">
                      <h4 class="text-info">${stats.monthlyStats.totalApiCalls.toLocaleString()}</h4>
                      <small class="text-muted">Total API Call</small>
                    </div>
                  </div>
                </div>
                <div class="progress-stacked mb-3">
                  <div class="progress" role="progressbar" style="width: 40%">
                    <div class="progress-bar bg-primary"></div>
                  </div>
                  <div class="progress" role="progressbar" style="width: 35%">
                    <div class="progress-bar bg-success"></div>
                  </div>
                  <div class="progress" role="progressbar" style="width: 25%">
                    <div class="progress-bar bg-info"></div>
                  </div>
                </div>
                <div class="text-center">
                  <small class="text-muted">Distribusi aktivitas bulan ini</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  whatsapp() {
    const accounts = this.data.whatsappAccounts;
    return `
      <div class="container-fluid">
        <div class="row mb-4">
          <div class="col">
            <h4 class="mb-0">Manajemen Akun WhatsApp</h4>
            <p class="text-muted">Kelola semua akun WhatsApp Anda</p>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary" onclick="ui.showAddWhatsappModal()">
              <i class="bi bi-plus-circle me-2"></i>Tambah Akun
            </button>
          </div>
        </div>

        <div class="card shadow-sm">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead class="table-light">
                  <tr>
                    <th>No</th>
                    <th>Nama Akun</th>
                    <th>Nomor</th>
                    <th>Status</th>
                    <th>Webhook</th>
                    <th class="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  ${accounts.map((acc, i) => `
                    <tr>
                      <td>${i + 1}</td>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar-sm bg-primary rounded-circle d-flex align-items-center justify-content-center me-2">
                            <i class="bi bi-whatsapp text-white"></i>
                          </div>
                          <span class="fw-medium">${acc.name}</span>
                        </div>
                      </td>
                      <td>
                        <span class="font-monospace">${acc.number}</span>
                      </td>
                      <td>
                        <span class="badge bg-${acc.status === 'connected' ? 'success' : 'secondary'} rounded-pill">
                          <i class="bi bi-${acc.status === 'connected' ? 'check-circle' : 'x-circle'} me-1"></i>
                          ${acc.status === 'connected' ? 'Terhubung' : 'Terputus'}
                        </span>
                      </td>
                      <td>
                        ${acc.webhook ? `<small class="text-muted font-monospace">${acc.webhook}</small>` : '<em class="text-muted">Belum diatur</em>'}
                      </td>
                      <td class="text-center">
                        <div class="btn-group btn-group-sm">
                          <button class="btn btn-outline-primary" title="Edit" onclick="ui.editWhatsapp(${acc.id})">
                            <i class="bi bi-pencil"></i>
                          </button>
                          <button class="btn btn-outline-info" title="Monitor" onclick="ui.monitorWhatsapp(${acc.id})">
                            <i class="bi bi-graph-up"></i>
                          </button>
                          <button class="btn btn-outline-danger" title="Hapus" onclick="ui.deleteWhatsapp(${acc.id})">
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  bot() {
    const bots = this.data.bots;
    return `
      <div class="container-fluid">
        <div class="row mb-4">
          <div class="col">
            <h4 class="mb-0">Bot Builder</h4>
            <p class="text-muted">Buat dan kelola bot AI Anda</p>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#botModal">
              <i class="bi bi-plus-circle me-2"></i>Tambah Bot
            </button>
          </div>
        </div>

        <div class="card shadow-sm">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead class="table-light">
                  <tr>
                    <th>Nama Bot</th>
                    <th>Knowledge Base</th>
                    <th>Prompt</th>
                    <th class="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  ${bots.map(bot => `
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar-sm bg-success rounded-circle d-flex align-items-center justify-content-center me-2">
                            <i class="bi bi-robot text-white"></i>
                          </div>
                          <span class="fw-medium">${bot.name}</span>
                        </div>
                      </td>
                      <td>
                        <span class="badge bg-light text-dark border">${bot.knowledge}</span>
                      </td>
                      <td>
                        <small class="text-muted font-monospace">${bot.prompt.substring(0, 50)}...</small>
                      </td>
                      <td class="text-center">
                        <div class="btn-group btn-group-sm">
                          <button class="btn btn-outline-primary" title="Edit" onclick="ui.editBot(${bot.id})">
                            <i class="bi bi-pencil"></i>
                          </button>
                          <button class="btn btn-outline-success" title="Test" onclick="ui.testBot(${bot.id})">
                            <i class="bi bi-play"></i>
                          </button>
                          <button class="btn btn-outline-danger" title="Hapus" onclick="ui.deleteBot(${bot.id})">
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Modal Tambah/Edit Bot -->
        <div class="modal fade" id="botModal" tabindex="-1">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Konfigurasi Bot</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <form id="botForm">
                  <div class="mb-3">
                    <label class="form-label">Nama Bot</label>
                    <input type="text" class="form-control" name="botName" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Pilih Knowledge Base</label>
                    <select class="form-select" name="knowledge" required>
                      <option value="">-- Pilih --</option>
                      <option value="knowledge-customer-support">Customer Support</option>
                      <option value="knowledge-akademik">Akademik</option>
                      <option value="knowledge-ecommerce">E-Commerce</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Prompt Awal</label>
                    <textarea class="form-control" rows="3" name="promptBase" placeholder="Contoh: Anda adalah asisten AI profesional..."></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Instruksi Khusus</label>
                    <textarea class="form-control" rows="2" name="customBehavior" placeholder="Perilaku khusus bot..."></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Webhook URL</label>
                    <input type="url" class="form-control" name="webhookUrl" placeholder="https://domain.com/webhook">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary" onclick="ui.saveBot()">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  agent() {
    const agents = this.data.agents;
    return `
      <div class="container-fluid">
        <div class="row mb-4">
          <div class="col">
            <h4 class="mb-0">Manajemen Agen</h4>
            <p class="text-muted">Konfigurasi agen AI dan API endpoints</p>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary" onclick="ui.showAddAgentModal()">
              <i class="bi bi-plus-circle me-2"></i>Tambah Agen
            </button>
          </div>
        </div>

        <div class="card shadow-sm">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead class="table-light">
                  <tr>
                    <th>Nama Agen</th>
                    <th>Model API</th>
                    <th>Endpoint</th>
                    <th>Payload</th>
                    <th class="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  ${agents.map(agent => `
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar-sm bg-info rounded-circle d-flex align-items-center justify-content-center me-2">
                            <i class="bi bi-cpu text-white"></i>
                          </div>
                          <span class="fw-medium">${agent.name}</span>
                        </div>
                      </td>
                      <td>
                        <span class="badge bg-primary rounded-pill">${agent.model}</span>
                      </td>
                      <td>
                        <small class="text-muted font-monospace">${agent.endpoint}</small>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-outline-secondary" onclick="ui.showPayload('${agent.payload}')">
                          <i class="bi bi-code"></i> Lihat
                        </button>
                      </td>
                      <td class="text-center">
                        <div class="btn-group btn-group-sm">
                          <button class="btn btn-outline-primary" title="Edit" onclick="ui.editAgent(${agent.id})">
                            <i class="bi bi-pencil"></i>
                          </button>
                          <button class="btn btn-outline-success" title="Test" onclick="ui.testAgent(${agent.id})">
                            <i class="bi bi-play"></i>
                          </button>
                          <button class="btn btn-outline-danger" title="Hapus" onclick="ui.deleteAgent(${agent.id})">
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  knowledge() {
    const data = this.data.knowledge;
    return `
      <div class="container-fluid">
        <div class="row mb-4">
          <div class="col">
            <h4 class="mb-0">Knowledge Base</h4>
            <p class="text-muted">Kelola basis pengetahuan untuk bot AI</p>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalKnowledge" onclick="ui.clearKnowledgeForm()">
              <i class="bi bi-plus-circle me-2"></i>Tambah Knowledge
            </button>
          </div>
        </div>

        <div class="row g-4" id="knowledgeList">
          ${data.map(item => `
            <div class="col-lg-4 col-md-6" data-id="${item.id}">
              <div class="card shadow-sm h-100">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <h5 class="card-title">${item.title}</h5>
                    <div class="dropdown">
                      <button class="btn btn-sm btn-light" data-bs-toggle="dropdown">
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li><a href="#" class="dropdown-item" onclick="ui.editKnowledge(${item.id})"><i class="bi bi-pencil me-2"></i>Edit</a></li>
                        <li><a href="#" class="dropdown-item text-danger" onclick="ui.deleteKnowledge(${item.id})"><i class="bi bi-trash me-2"></i>Hapus</a></li>
                      </ul>
                    </div>
                  </div>
                  <p class="card-text text-muted small">${item.content.substring(0, 150)}...</p>
                  <div class="text-end">
                    <small class="text-muted">ID: ${item.id}</small>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Modal Tambah/Edit Knowledge -->
        <div class="modal fade" id="modalKnowledge" tabindex="-1">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content shadow">
              <div class="modal-header">
                <h5 class="modal-title" id="modalKnowledgeLabel">Tambah Knowledge</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <form id="knowledgeForm">
                  <input type="hidden" id="knowledgeId">
                  <div class="mb-3">
                    <label for="knowledgeTitle" class="form-label">Judul</label>
                    <input type="text" class="form-control" id="knowledgeTitle" required>
                  </div>
                  <div class="mb-3">
                    <label for="knowledgeContent" class="form-label">Konten</label>
                    <textarea class="form-control" id="knowledgeContent" rows="8" required></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary" onclick="ui.saveKnowledge()">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  contact() {
    const contacts = this.data.contacts;
    return `
      <div class="container-fluid">
        <div class="row mb-4">
          <div class="col">
            <h4 class="mb-0">Manajemen Kontak</h4>
            <p class="text-muted">Kelola semua kontak pelanggan</p>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary">
              <i class="bi bi-plus-circle me-2"></i>Tambah Kontak
            </button>
          </div>
        </div>

        <div class="card shadow-sm">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead class="table-light">
                  <tr>
                    <th>Nama</th>
                    <th>Telepon</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th class="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  ${contacts.map(contact => `
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="avatar-sm bg-secondary rounded-circle d-flex align-items-center justify-content-center me-2">
                            <i class="bi bi-person text-white"></i>
                          </div>
                          <span class="fw-medium">${contact.name}</span>
                        </div>
                      </td>
                      <td><span class="font-monospace">${contact.phone}</span></td>
                      <td>${contact.email}</td>
                      <td>
                        <span class="badge bg-${contact.status === 'active' ? 'success' : 'secondary'} rounded-pill">
                          ${contact.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                        </span>
                      </td>
                      <td class="text-center">
                        <div class="btn-group btn-group-sm">
                          <button class="btn btn-outline-primary" title="Edit">
                            <i class="bi bi-pencil"></i>
                          </button>
                          <button class="btn btn-outline-info" title="Chat">
                            <i class="bi bi-chat"></i>
                          </button>
                          <button class="btn btn-outline-danger" title="Hapus">
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  setting() {
    return `
      <div class="container-fluid">
        <h4 class="mb-4">Pengaturan Aplikasi</h4>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">Pengaturan Umum</h5>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <label class="form-label">Nama Aplikasi</label>
                  <input type="text" class="form-control" value="AI Dashboard">
                </div>
                <div class="mb-3">
                  <label class="form-label">Zona Waktu</label>
                  <select class="form-select">
                    <option>Asia/Jakarta</option>
                    <option>Asia/Singapore</option>
                    <option>UTC</option>
                  </select>
                </div>
                <button class="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">Notifikasi</h5>
              </div>
              <div class="card-body">
                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" id="emailNotif" checked>
                  <label class="form-check-label" for="emailNotif">
                    Notifikasi Email
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" id="pushNotif">
                  <label class="form-check-label" for="pushNotif">
                    Push Notification
                  </label>
                </div>
                <button class="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  profile(id) {
    return `
      <div class="container-fluid" data-user-id="${id}">
        <div class="row mb-4">
          <div class="col">
            <h4 class="mb-0">Profil Pengguna</h4>
            <p class="text-muted">Informasi akun Anda</p>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-lg-4">
            <div class="card shadow-sm text-center">
              <div class="card-body">
                <div class="mb-3">
                  <img src="https://via.placeholder.com/120x120?text=User" alt="Foto Profil" class="rounded-circle mb-3" width="120" height="120">
                </div>
                <h5 class="mb-1">John Doe</h5>
                <p class="text-muted mb-0">admin@example.com</p>
                <p class="text-muted small">ID: ${id}</p>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="row g-3 mb-4">
              <div class="col-md-4">
                <div class="card bg-primary text-white">
                  <div class="card-body text-center">
                    <h4 class="mb-1">${this.data.stats.totalContacts}</h4>
                    <small>Total Kontak</small>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-success text-white">
                  <div class="card-body text-center">
                    <h4 class="mb-1">${this.data.stats.totalAgents}</h4>
                    <small>Total Agen</small>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-info text-white">
                  <div class="card-body text-center">
                    <h4 class="mb-1">${this.data.stats.activeBots}</h4>
                    <small>Bot Aktif</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">Informasi Akun</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Nama Lengkap</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">John Doe</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">admin@example.com</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Terdaftar</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">15 Januari 2024</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Status</p>
                  </div>
                  <div class="col-sm-9">
                    <span class="badge bg-success">Aktif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  pengaturan(id) {
    return `
      <div class="container-fluid" data-user-id="${id}">
        <h4 class="mb-4">Pengaturan Profil</h4>

        <div class="row g-4">
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">Informasi Pribadi</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <label for="fullName" class="form-label">Nama Lengkap</label>
                      <input type="text" class="form-control" id="fullName" value="John Doe">
                    </div>
                    <div class="col-md-6">
                      <label for="username" class="form-label">Username</label>
                      <input type="text" class="form-control" id="username" value="johndoe">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="admin@example.com">
                  </div>
                  <button type="button" class="btn btn-primary" onclick="ui.updateProfile()">Simpan Perubahan</button>
                </form>
              </div>
            </div>

            <div class="card shadow-sm mt-4">
              <div class="card-header">
                <h5 class="mb-0">Ubah Password</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label for="currentPassword" class="form-label">Password Saat Ini</label>
                    <input type="password" class="form-control" id="currentPassword">
                  </div>
                  <div class="mb-3">
                    <label for="newPassword" class="form-label">Password Baru</label>
                    <input type="password" class="form-control" id="newPassword">
                  </div>
                  <div class="mb-3">
                    <label for="confirmPassword" class="form-label">Konfirmasi Password Baru</label>
                    <input type="password" class="form-control" id="confirmPassword">
                  </div>
                  <button type="button" class="btn btn-warning" onclick="ui.changePassword()">Ubah Password</button>
                </form>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">Foto Profil</h5>
              </div>
              <div class="card-body text-center">
                <img src="https://via.placeholder.com/150x150?text=User" alt="Foto Profil" class="rounded-circle mb-3" width="150" height="150" id="profilePhotoPreview">
                <div>
                  <input type="file" class="form-control mb-3" id="profilePhotoInput" accept="image/*">
                  <button type="button" class="btn btn-outline-primary" onclick="ui.uploadPhoto()">Upload Foto</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  api() {
    return `
      <div class="container-fluid">
        <h4 class="mb-4">API Management</h4>
        
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">API Keys</h5>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <label class="form-label">API Key Aktif</label>
                  <div class="input-group">
                    <input type="password" class="form-control font-monospace" value="sk-1234567890abcdef" readonly>
                    <button class="btn btn-outline-secondary" type="button" onclick="ui.toggleApiKey(this)">
                      <i class="bi bi-eye"></i>
                    </button>
                    <button class="btn btn-outline-primary" type="button" onclick="ui.copyApiKey()">
                      <i class="bi bi-copy"></i>
                    </button>
                  </div>
                </div>
                <div class="d-flex gap-2">
                  <button class="btn btn-warning" onclick="ui.regenerateApiKey()">
                    <i class="bi bi-arrow-clockwise me-2"></i>Regenerate Key
                  </button>
                  <button class="btn btn-danger" onclick="ui.revokeApiKey()">
                    <i class="bi bi-trash me-2"></i>Revoke Key
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">API Usage</h5>
              </div>
              <div class="card-body">
                <div class="text-center">
                  <h3 class="text-primary">${this.data.stats.apiUsage.toLocaleString()}</h3>
                  <p class="text-muted">Calls bulan ini</p>
                </div>
                <div class="progress mb-2">
                  <div class="progress-bar" style="width: 75%"></div>
                </div>
                <small class="text-muted">75% dari limit bulanan</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  billing() {
    return `
      <div class="container-fluid">
        <h4 class="mb-4">Billing & Subscription</h4>
        
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">Paket Saat Ini</h5>
              </div>
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="mb-1">Premium Plan</h6>
                    <p class="text-muted mb-0">$29/bulan • Berlaku hingga: 15 Feb 2024</p>
                  </div>
                  <div class="col-auto">
                    <span class="badge bg-success rounded-pill">Aktif</span>
                  </div>
                </div>
                <hr>
                <div class="row text-center">
                  <div class="col-md-4">
                    <h5>∞</h5>
                    <small class="text-muted">API Calls</small>
                  </div>
                  <div class="col-md-4">
                    <h5>50</h5>
                    <small class="text-muted">Max Bots</small>
                  </div>
                  <div class="col-md-4">
                    <h5>24/7</h5>
                    <small class="text-muted">Support</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="card shadow-sm mt-4">
              <div class="card-header">
                <h5 class="mb-0">Riwayat Pembayaran</h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Tanggal</th>
                        <th>Deskripsi</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>15 Jan 2024</td>
                        <td>Premium Plan - Monthly</td>
                        <td>$29.00</td>
                        <td><span class="badge bg-success">Paid</span></td>
                      </tr>
                      <tr>
                        <td>15 Dec 2023</td>
                        <td>Premium Plan - Monthly</td>
                        <td>$29.00</td>
                        <td><span class="badge bg-success">Paid</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">Upgrade Plan</h5>
              </div>
              <div class="card-body">
                <div class="text-center">
                  <h6>Enterprise Plan</h6>
                  <h3 class="text-primary">$99<small class="text-muted">/month</small></h3>
                  <ul class="list-unstyled small">
                    <li>✓ Unlimited API Calls</li>
                    <li>✓ Unlimited Bots</li>
                    <li>✓ Priority Support</li>
                    <li>✓ Custom Features</li>
                  </ul>
                  <button class="btn btn-primary w-100">Upgrade Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  bantuan() {
    return `
      <div class="container-fluid">
        <h4 class="mb-4">Pusat Bantuan</h4>
        
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">FAQ (Frequently Asked Questions)</h5>
              </div>
              <div class="card-body">
                <div class="accordion" id="faqAccordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                        Bagaimana cara menambahkan bot baru?
                      </button>
                    </h2>
                    <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        Untuk menambahkan bot baru, masuk ke menu Bot > klik Tambah Bot > isi konfigurasi yang diperlukan > simpan.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                        Bagaimana cara mengatur webhook WhatsApp?
                      </button>
                    </h2>
                    <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        Masuk ke menu WhatsApp > pilih akun > klik Edit > masukkan URL webhook > simpan konfigurasi.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                        Bagaimana cara mendapatkan API key?
                      </button>
                    </h2>
                    <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        API key dapat ditemukan di menu API Management. Anda dapat melihat, menyalin, atau regenerate key sesuai kebutuhan.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header">
                <h5 class="mb-0">Hubungi Support</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label class="form-label">Subjek</label>
                    <input type="text" class="form-control" placeholder="Masukkan subjek">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Pesan</label>
                    <textarea class="form-control" rows="4" placeholder="Deskripsikan masalah Anda"></textarea>
                  </div>
                  <button type="button" class="btn btn-primary w-100" onclick="ui.sendSupportMessage()">
                    <i class="bi bi-send me-2"></i>Kirim Pesan
                  </button>
                </form>
                
                <hr>
                
                <div class="text-center">
                  <h6>Kontak Langsung</h6>
                  <p class="mb-1"><i class="bi bi-envelope me-2"></i>support@aidashboard.com</p>
                  <p class="mb-0"><i class="bi bi-telephone me-2"></i>+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  logout() {
    return `
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-sm">
              <div class="card-body text-center py-5">
                <i class="bi bi-box-arrow-right fs-1 text-muted mb-3"></i>
                <h4>Logout Berhasil</h4>
                <p class="text-muted">Terima kasih telah menggunakan AI Dashboard</p>
                <button class="btn btn-primary" onclick="ui.redirectToLogin()">
                  <i class="bi bi-box-arrow-in-left me-2"></i>Login Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Helper methods untuk interaksi
  editKnowledge(id) {
    const item = this.data.knowledge.find(k => k.id === id);
    if (item) {
      document.getElementById('knowledgeId').value = item.id;
      document.getElementById('knowledgeTitle').value = item.title;
      document.getElementById('knowledgeContent').value = item.content;
      document.getElementById('modalKnowledgeLabel').textContent = 'Edit Knowledge';
      const modal = new bootstrap.Modal(document.getElementById('modalKnowledge'));
      modal.show();
    }
  }

  deleteKnowledge(id) {
    if (confirm("Yakin ingin menghapus knowledge ini?")) {
      this.data.knowledge = this.data.knowledge.filter(k => k.id !== id);
      this.showToast('Knowledge berhasil dihapus', 'success');
      // Refresh tampilan
      document.getElementById('main').innerHTML = this.knowledge();
    }
  }

  saveKnowledge() {
    const id = document.getElementById('knowledgeId').value;
    const title = document.getElementById('knowledgeTitle').value;
    const content = document.getElementById('knowledgeContent').value;

    if (!title || !content) {
      this.showToast('Mohon isi semua field', 'warning');
      return;
    }

    if (id) {
      // Edit existing
      const index = this.data.knowledge.findIndex(k => k.id == id);
      if (index !== -1) {
        this.data.knowledge[index] = { id: parseInt(id), title, content };
        this.showToast('Knowledge berhasil diupdate', 'success');
      }
    } else {
      // Add new
      const newId = Math.max(...this.data.knowledge.map(k => k.id)) + 1;
      this.data.knowledge.push({ id: newId, title, content });
      this.showToast('Knowledge berhasil ditambahkan', 'success');
    }

    // Close modal and refresh
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalKnowledge'));
    modal.hide();
    document.getElementById('main').innerHTML = this.knowledge();
  }

  clearKnowledgeForm() {
    document.getElementById('knowledgeId').value = '';
    document.getElementById('knowledgeTitle').value = '';
    document.getElementById('knowledgeContent').value = '';
    document.getElementById('modalKnowledgeLabel').textContent = 'Tambah Knowledge';
  }

  // Placeholder methods untuk fitur lainnya
  showAddWhatsappModal() { this.showToast('Fitur dalam pengembangan', 'info'); }
  editWhatsapp(id) { this.showToast(`Edit WhatsApp ID: ${id}`, 'info'); }
  deleteWhatsapp(id) { this.showToast(`Hapus WhatsApp ID: ${id}`, 'warning'); }
  monitorWhatsapp(id) { this.showToast(`Monitor WhatsApp ID: ${id}`, 'info'); }
  saveBot() { this.showToast('Bot berhasil disimpan', 'success'); }
  editBot(id) { this.showToast(`Edit Bot ID: ${id}`, 'info'); }
  deleteBot(id) { this.showToast(`Hapus Bot ID: ${id}`, 'warning'); }
  testBot(id) { this.showToast(`Test Bot ID: ${id}`, 'info'); }
  showAddAgentModal() { this.showToast('Fitur dalam pengembangan', 'info'); }
  editAgent(id) { this.showToast(`Edit Agent ID: ${id}`, 'info'); }
  deleteAgent(id) { this.showToast(`Hapus Agent ID: ${id}`, 'warning'); }
  testAgent(id) { this.showToast(`Test Agent ID: ${id}`, 'info'); }
  showPayload(payload) { alert(payload); }
  updateProfile() { this.showToast('Profil berhasil diupdate', 'success'); }
  changePassword() { this.showToast('Password berhasil diubah', 'success'); }
  uploadPhoto() { this.showToast('Foto berhasil diupload', 'success'); }
  toggleApiKey(btn) { 
    const input = btn.parentElement.querySelector('input');
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
      input.type = 'text';
      icon.className = 'bi bi-eye-slash';
    } else {
      input.type = 'password';
      icon.className = 'bi bi-eye';
    }
  }
  copyApiKey() { this.showToast('API Key disalin ke clipboard', 'success'); }
  regenerateApiKey() { this.showToast('API Key berhasil di-regenerate', 'warning'); }
  revokeApiKey() { this.showToast('API Key berhasil di-revoke', 'danger'); }
  sendSupportMessage() { this.showToast('Pesan berhasil dikirim', 'success'); }
  redirectToLogin() { this.showToast('Redirect ke halaman login', 'info'); }
}