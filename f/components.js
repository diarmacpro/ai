// Enhanced Components Class
class Components {
  constructor() {
    this.dummyData = {
      stats: {
        totalChats: 1247,
        activeAgents: 3,
        successRate: 94.5,
        todayMessages: 156
      },
      agents: [
        { id: 1, name: "Customer Support Bot", model: "GPT-4", status: "online", apiKey: "sk-***" },
        { id: 2, name: "Sales Assistant", model: "Claude-3", status: "online", apiKey: "sk-***" },
        { id: 3, name: "Technical Helper", model: "Gemini Pro", status: "offline", apiKey: "sk-***" }
      ],
      chats: [
        { id: 1, time: "31 Jul 2025 09:32", sender: "John Doe", message: "Pagi, saya ingin bertanya tentang produk...", status: "success" },
        { id: 2, time: "31 Jul 2025 09:28", sender: "Jane Smith", message: "Tolong bantu reset akun saya", status: "success" },
        { id: 3, time: "31 Jul 2025 09:20", sender: "Bob Wilson", message: "Test kirim pesan", status: "failed" },
        { id: 4, time: "31 Jul 2025 09:15", sender: "Alice Brown", message: "Bagaimana cara upgrade akun?", status: "success" },
        { id: 5, time: "31 Jul 2025 09:10", sender: "Charlie Davis", message: "Saya butuh bantuan teknis", status: "pending" }
      ],
      knowledge: [
        { id: 1, title: "FAQ Umum", content: "Kumpulan pertanyaan yang sering ditanyakan pelanggan", updated: "2 jam lalu" },
        { id: 2, title: "Panduan Produk", content: "Informasi lengkap tentang fitur dan cara penggunaan", updated: "1 hari lalu" },
        { id: 3, title: "Troubleshooting", content: "Solusi untuk masalah teknis yang umum terjadi", updated: "3 hari lalu" }
      ]
    };
  }

  login() {
    return `
      <div class="login-container">
        <div class="login-card fade-in">
          <div class="login-header">
            <i data-lucide="bot" style="width: 48px; height: 48px; margin-bottom: 1rem;"></i>
            <h3 class="mb-0">AI Bot Dashboard</h3>
            <p class="mb-0 opacity-75">Masuk ke akun Anda</p>
          </div>
          <div class="login-body">
            <form id="formLogin">
              <div class="mb-3">
                <label for="username" class="form-label">
                  <i data-lucide="user" class="me-2" style="width: 16px; height: 16px;"></i>
                  Username
                </label>
                <input type="text" class="form-control" id="username" placeholder="Masukkan username" required>
                <small class="text-muted">Demo: abc</small>
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">
                  <i data-lucide="lock" class="me-2" style="width: 16px; height: 16px;"></i>
                  Password
                </label>
                <input type="password" class="form-control" id="password" placeholder="Masukkan password" required>
                <small class="text-muted">Demo: abc123</small>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                <i data-lucide="log-in" class="me-2" style="width: 16px; height: 16px;"></i>
                Masuk
              </button>
            </form>
            <div class="text-center mt-3">
              <small class="text-muted">
                <i data-lucide="shield-check" class="me-1" style="width: 14px; height: 14px;"></i>
                Keamanan data terjamin
              </small>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  dashboard() {
    const { stats, chats } = this.dummyData;
    return `
      <div class="container-fluid fade-in">
        <div class="row mb-4">
          <div class="col-12">
            <h2 class="text-gradient mb-1">
              <i data-lucide="chart-no-axes-combined" class="me-2"></i>
              Dashboard
            </h2>
            <p class="text-muted">Ringkasan aktivitas AI Bot Anda</p>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="row g-4 mb-5">
          <div class="col-md-3">
            <div class="card stats-card">
              <div class="card-body text-center">
                <i data-lucide="message-circle" class="text-primary mb-3" style="width: 48px; height: 48px;"></i>
                <div class="stats-number">${stats.totalChats.toLocaleString()}</div>
                <div class="stats-label">Total Chat</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card stats-card">
              <div class="card-body text-center">
                <i data-lucide="bot" class="text-success mb-3" style="width: 48px; height: 48px;"></i>
                <div class="stats-number">${stats.activeAgents}</div>
                <div class="stats-label">Agent Aktif</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card stats-card">
              <div class="card-body text-center">
                <i data-lucide="trending-up" class="text-info mb-3" style="width: 48px; height: 48px;"></i>
                <div class="stats-number">${stats.successRate}%</div>
                <div class="stats-label">Success Rate</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card stats-card">
              <div class="card-body text-center">
                <i data-lucide="calendar" class="text-warning mb-3" style="width: 48px; height: 48px;"></i>
                <div class="stats-number">${stats.todayMessages}</div>
                <div class="stats-label">Pesan Hari Ini</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="activity" class="me-2"></i>
                  Aktivitas Terbaru
                </h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Waktu</th>
                        <th>Pengirim</th>
                        <th>Pesan</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${chats.slice(0, 5).map(chat => `
                        <tr>
                          <td>${chat.time}</td>
                          <td>${chat.sender}</td>
                          <td>${chat.message}</td>
                          <td>
                            <span class="badge ${this.getStatusBadgeClass(chat.status)}">
                              <i data-lucide="${this.getStatusIcon(chat.status)}" style="width: 12px; height: 12px;" class="me-1"></i>
                              ${this.getStatusText(chat.status)}
                            </span>
                          </td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
                <div class="text-end">
                  <button class="btn btn-outline-primary btn-sm" data-menu="data">
                    <i data-lucide="eye" class="me-1"></i>
                    Lihat Semua
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  konektor() {
    const { agents } = this.dummyData;
    return `
      <div class="container-fluid fade-in">
        <div class="row mb-4">
          <div class="col-12">
            <h2 class="text-gradient mb-1">
              <i data-lucide="cable" class="me-2"></i>
              Konektor
            </h2>
            <p class="text-muted">Kelola koneksi AI Agent, Database, dan WhatsApp</p>
          </div>
        </div>

        <div class="row g-4">
          <!-- AI Agents -->
          <div class="col-lg-6">
            <div class="card h-100">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="bot" class="me-2"></i>
                  AI Agents
                </h5>
              </div>
              <div class="card-body">
                <div class="mb-4">
                  <div class="row g-3">
                    <div class="col-12">
                      <label class="form-label">Nama Agent</label>
                      <input type="text" class="form-control" placeholder="Contoh: Customer Support Bot" id="agentName">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">AI Model</label>
                      <select class="form-select" id="aiModel">
                        <option value="">Pilih Model</option>
                        <option value="gpt-4">GPT-4</option>
                        <option value="gpt-3.5">GPT-3.5 Turbo</option>
                        <option value="claude-3">Claude-3</option>
                        <option value="gemini">Gemini Pro</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Status</label>
                      <select class="form-select" id="agentStatus">
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label class="form-label">API Key</label>
                      <input type="password" class="form-control" placeholder="sk-..." id="apiKey">
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary" onclick="this.addAgent()">
                        <i data-lucide="plus" class="me-1"></i>
                        Tambah Agent
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Existing Agents -->
                <div class="border-top pt-3">
                  <h6 class="mb-3">Agent Terdaftar</h6>
                  ${agents.map(agent => `
                    <div class="d-flex justify-content-between align-items-center p-3 border rounded mb-2">
                      <div>
                        <h6 class="mb-1">${agent.name}</h6>
                        <small class="text-muted">${agent.model}</small>
                      </div>
                      <div class="d-flex align-items-center gap-2">
                        <span class="badge ${agent.status === 'online' ? 'bg-success' : 'bg-secondary'}">
                          <i data-lucide="${agent.status === 'online' ? 'wifi' : 'wifi-off'}" style="width: 12px; height: 12px;" class="me-1"></i>
                          ${agent.status}
                        </span>
                        <button class="btn btn-sm btn-outline-danger">
                          <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Supabase Connection -->
          <div class="col-lg-6">
            <div class="card h-100">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="database" class="me-2"></i>
                  Supabase Database
                </h5>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-12">
                    <label class="form-label">Nama Koneksi</label>
                    <input type="text" class="form-control" placeholder="Contoh: Production DB" value="Main Database">
                  </div>
                  <div class="col-12">
                    <label class="form-label">Supabase URL</label>
                    <input type="url" class="form-control" placeholder="https://xxx.supabase.co" value="https://demo.supabase.co">
                  </div>
                  <div class="col-12">
                    <label class="form-label">API Key</label>
                    <input type="password" class="form-control" placeholder="eyJ..." value="eyJ***">
                  </div>
                  <div class="col-12">
                    <div class="d-flex gap-2">
                      <button class="btn btn-success">
                        <i data-lucide="check-circle" class="me-1"></i>
                        Test Koneksi
                      </button>
                      <button class="btn btn-primary">
                        <i data-lucide="save" class="me-1"></i>
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
                
                <div class="mt-4 p-3 bg-success bg-opacity-10 border border-success rounded">
                  <div class="d-flex align-items-center">
                    <i data-lucide="check-circle" class="text-success me-2"></i>
                    <span class="text-success fw-medium">Koneksi Berhasil</span>
                  </div>
                  <small class="text-muted">Terakhir ditest: 5 menit lalu</small>
                </div>
              </div>
            </div>
          </div>

          <!-- WhatsApp Connection -->
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="message-square" class="me-2"></i>
                  WhatsApp Integration
                </h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="qr-container">
                      <div class="qr-placeholder">
                        <i data-lucide="qr-code" style="width: 64px; height: 64px;"></i>
                      </div>
                      <h5>Scan QR Code</h5>
                      <p class="text-muted mb-3">Gunakan WhatsApp di ponsel Anda untuk memindai kode QR</p>
                      <button class="btn btn-outline-primary">
                        <i data-lucide="refresh-cw" class="me-1"></i>
                        Refresh QR
                      </button>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h6 class="mb-3">Status Koneksi</h6>
                    <div class="d-flex align-items-center mb-3">
                      <div class="status-indicator bg-warning rounded-circle me-3" style="width: 12px; height: 12px;"></div>
                      <span class="text-warning fw-medium">Menunggu Scan QR</span>
                    </div>
                    
                    <h6 class="mb-3">Pengaturan Webhook</h6>
                    <div class="mb-3">
                      <label class="form-label">Webhook URL</label>
                      <input type="url" class="form-control" placeholder="https://yourapp.com/webhook" value="https://demo.app/webhook">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Token Verifikasi</label>
                      <input type="text" class="form-control" placeholder="verify_token" value="demo_token_123">
                    </div>
                    <button class="btn btn-primary">
                      <i data-lucide="save" class="me-1"></i>
                      Simpan Webhook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  data() {
    const { chats, knowledge } = this.dummyData;
    return `
      <div class="container-fluid fade-in">
        <div class="row mb-4">
          <div class="col-12">
            <h2 class="text-gradient mb-1">
              <i data-lucide="database-zap" class="me-2"></i>
              Data Management
            </h2>
            <p class="text-muted">Kelola knowledge base dan riwayat chat</p>
          </div>
        </div>

        <!-- Knowledge Base Form -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="book-open" class="me-2"></i>
                  Tambah Knowledge Base
                </h5>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-md-4">
                    <label class="form-label">Judul</label>
                    <input type="text" class="form-control" placeholder="Contoh: FAQ Pembayaran" id="knowledgeTitle">
                  </div>
                  <div class="col-md-8">
                    <label class="form-label">Konten</label>
                    <textarea class="form-control" rows="3" placeholder="Masukkan informasi yang ingin disimpan..." id="knowledgeContent"></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary">
                      <i data-lucide="plus" class="me-1"></i>
                      Tambah ke Knowledge Base
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Knowledge Base List -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="card">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">
                  <i data-lucide="library" class="me-2"></i>
                  Knowledge Base
                </h5>
                <span class="badge bg-primary">${knowledge.length} items</span>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  ${knowledge.map(item => `
                    <div class="col-md-4">
                      <div class="card border">
                        <div class="card-body">
                          <h6 class="card-title">${item.title}</h6>
                          <p class="card-text text-muted small">${item.content}</p>
                          <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">
                              <i data-lucide="clock" style="width: 12px; height: 12px;" class="me-1"></i>
                              ${item.updated}
                            </small>
                            <div class="btn-group btn-group-sm">
                              <button class="btn btn-outline-primary">
                                <i data-lucide="edit" style="width: 12px; height: 12px;"></i>
                              </button>
                              <button class="btn btn-outline-danger">
                                <i data-lucide="trash-2" style="width: 12px; height: 12px;"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat History -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">
                  <i data-lucide="history" class="me-2"></i>
                  Riwayat Chat
                </h5>
                <div class="d-flex gap-2">
                  <button class="btn btn-outline-secondary btn-sm">
                    <i data-lucide="download" class="me-1"></i>
                    Export
                  </button>
                  <button class="btn btn-outline-primary btn-sm">
                    <i data-lucide="refresh-cw" class="me-1"></i>
                    Refresh
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Waktu</th>
                        <th>Pengirim</th>
                        <th>Pesan</th>
                        <th>Status</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${chats.map(chat => `
                        <tr>
                          <td>${chat.time}</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 32px; height: 32px;">
                                <i data-lucide="user" style="width: 16px; height: 16px;" class="text-white"></i>
                              </div>
                              ${chat.sender}
                            </div>
                          </td>
                          <td>
                            <div class="text-truncate" style="max-width: 300px;" title="${chat.message}">
                              ${chat.message}
                            </div>
                          </td>
                          <td>
                            <span class="badge ${this.getStatusBadgeClass(chat.status)}">
                              <i data-lucide="${this.getStatusIcon(chat.status)}" style="width: 12px; height: 12px;" class="me-1"></i>
                              ${this.getStatusText(chat.status)}
                            </span>
                          </td>
                          <td>
                            <div class="btn-group btn-group-sm">
                              <button class="btn btn-outline-primary" title="Lihat Detail">
                                <i data-lucide="eye" style="width: 12px; height: 12px;"></i>
                              </button>
                              <button class="btn btn-outline-secondary" title="Reply">
                                <i data-lucide="reply" style="width: 12px; height: 12px;"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
                
                <!-- Pagination -->
                <nav class="mt-3">
                  <ul class="pagination pagination-sm justify-content-center">
                    <li class="page-item disabled">
                      <span class="page-link">
                        <i data-lucide="chevron-left" style="width: 14px; height: 14px;"></i>
                      </span>
                    </li>
                    <li class="page-item active"><span class="page-link">1</span></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <i data-lucide="chevron-right" style="width: 14px; height: 14px;"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  setting() {
    return `
      <div class="container-fluid fade-in">
        <div class="row mb-4">
          <div class="col-12">
            <h2 class="text-gradient mb-1">
              <i data-lucide="sliders-vertical" class="me-2"></i>
              Pengaturan Aplikasi
            </h2>
            <p class="text-muted">Konfigurasi sistem AI Bot</p>
          </div>
        </div>

        <div class="row g-4">
          <!-- General Settings -->
          <div class="col-lg-6">
            <div class="card h-100">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="settings" class="me-2"></i>
                  Pengaturan Umum
                </h5>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-12">
                    <label class="form-label">Bahasa Default</label>
                    <select class="form-select">
                      <option value="id" selected>Bahasa Indonesia</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label class="form-label">Timezone</label>
                    <select class="form-select">
                      <option value="Asia/Jakarta" selected>Asia/Jakarta (WIB)</option>
                      <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
                      <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="typingSim" checked>
                      <label class="form-check-label" for="typingSim">
                        Tampilkan indikator mengetik
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="autoReply" checked>
                      <label class="form-check-label" for="autoReply">
                        Aktifkan auto-reply
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="form-label">Panjang Respon Maksimum</label>
                    <input type="number" class="form-control" value="300" min="50" max="1000">
                    <small class="text-muted">Karakter (50-1000)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- AI Configuration -->
          <div class="col-lg-6">
            <div class="card h-100">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="brain" class="me-2"></i>
                  Konfigurasi AI
                </h5>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-12">
                    <label class="form-label">System Prompt</label>
                    <textarea class="form-control" rows="4" placeholder="Contoh: Kamu adalah asisten cerdas yang siap membantu pelanggan dengan ramah dan cepat.">Anda adalah asisten AI yang membantu pelanggan dengan ramah dan profesional. Selalu berikan jawaban yang akurat dan membantu.</textarea>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Temperature</label>
                    <input type="range" class="form-range" min="0" max="1" step="0.1" value="0.7" id="temperature">
                    <small class="text-muted">Kreativitas: <span id="tempValue">0.7</span></small>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Max Tokens</label>
                    <input type="number" class="form-control" value="150" min="50" max="500">
                  </div>
                  <div class="col-12">
                    <label class="form-label">Batasan Waktu Respons (ms)</label>
                    <input type="number" class="form-control" value="5000" min="1000" max="30000">
                  </div>
                  <div class="col-12">
                    <label class="form-label">Frekuensi Cek Update</label>
                    <select class="form-select">
                      <option value="5">Setiap 5 detik</option>
                      <option value="10" selected>Setiap 10 detik</option>
                      <option value="30">Setiap 30 detik</option>
                      <option value="60">Setiap 1 menit</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Webhook Settings -->
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="webhook" class="me-2"></i>
                  Pengaturan Webhook
                </h5>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">URL Callback (Webhook)</label>
                    <input type="url" class="form-control" placeholder="https://example.com/webhook" value="https://demo.app/webhook">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Secret Token</label>
                    <input type="password" class="form-control" placeholder="webhook_secret_token" value="demo_secret_123">
                  </div>
                  <div class="col-12">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="webhookEnabled" checked>
                      <label class="form-check-label" for="webhookEnabled">
                        Aktifkan webhook notifications
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-outline-info">
                      <i data-lucide="send" class="me-1"></i>
                      Test Webhook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="col-12">
            <div class="card">
              <div class="card-body text-center">
                <button class="btn btn-primary me-2">
                  <i data-lucide="save" class="me-1"></i>
                  Simpan Semua Pengaturan
                </button>
                <button class="btn btn-outline-secondary me-2">
                  <i data-lucide="refresh-cw" class="me-1"></i>
                  Reset ke Default
                </button>
                <button class="btn btn-outline-info">
                  <i data-lucide="download" class="me-1"></i>
                  Export Konfigurasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  pengaturan() {
    return `
      <div class="container-fluid fade-in">
        <div class="row mb-4">
          <div class="col-12">
            <h2 class="text-gradient mb-1">
              <i data-lucide="user-cog" class="me-2"></i>
              Pengaturan Akun
            </h2>
            <p class="text-muted">Kelola profil dan keamanan akun Anda</p>
          </div>
        </div>

        <div class="row g-4">
          <!-- Profile Settings -->
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="user" class="me-2"></i>
                  Informasi Profil
                </h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="namaLengkap" class="form-label">Nama Lengkap</label>
                      <input type="text" class="form-control" id="namaLengkap" value="John Doe">
                    </div>
                    <div class="col-md-6">
                      <label for="email" class="form-label">Email Akun</label>
                      <input type="email" class="form-control" id="email" value="john.doe@example.com">
                    </div>
                    <div class="col-md-6">
                      <label for="phone" class="form-label">Nomor Telepon</label>
                      <input type="tel" class="form-control" id="phone" value="+62 812-3456-7890">
                    </div>
                    <div class="col-md-6">
                      <label for="company" class="form-label">Perusahaan</label>
                      <input type="text" class="form-control" id="company" value="Tech Solutions Inc.">
                    </div>
                    <div class="col-12">
                      <label for="bio" class="form-label">Bio</label>
                      <textarea class="form-control" id="bio" rows="3" placeholder="Ceritakan tentang diri Anda...">AI enthusiast dan developer yang passionate dalam mengembangkan solusi chatbot untuk bisnis.</textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Profile Picture -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="image" class="me-2"></i>
                  Foto Profil
                </h5>
              </div>
              <div class="card-body text-center">
                <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 120px; height: 120px;">
                  <i data-lucide="user" style="width: 48px; height: 48px;" class="text-white"></i>
                </div>
                <button class="btn btn-outline-primary btn-sm mb-2">
                  <i data-lucide="upload" class="me-1"></i>
                  Upload Foto
                </button>
                <br>
                <small class="text-muted">JPG, PNG max 2MB</small>
              </div>
            </div>
          </div>

          <!-- Security Settings -->
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="shield" class="me-2"></i>
                  Keamanan Akun
                </h5>
              </div>
              <div class="card-body">
                <div class="row g-4">
                  <div class="col-md-6">
                    <h6>Ubah Password</h6>
                    <div class="mb-3">
                      <label for="currentPassword" class="form-label">Password Saat Ini</label>
                      <input type="password" class="form-control" id="currentPassword" placeholder="••••••••">
                    </div>
                    <div class="mb-3">
                      <label for="newPassword" class="form-label">Password Baru</label>
                      <input type="password" class="form-control" id="newPassword" placeholder="••••••••">
                    </div>
                    <div class="mb-3">
                      <label for="confirmPassword" class="form-label">Konfirmasi Password Baru</label>
                      <input type="password" class="form-control" id="confirmPassword" placeholder="••••••••">
                    </div>
                    <button class="btn btn-warning">
                      <i data-lucide="key" class="me-1"></i>
                      Update Password
                    </button>
                  </div>
                  <div class="col-md-6">
                    <h6>Two-Factor Authentication</h6>
                    <div class="d-flex justify-content-between align-items-center p-3 border rounded mb-3">
                      <div>
                        <strong>2FA Status</strong>
                        <br>
                        <small class="text-muted">Keamanan tambahan untuk akun Anda</small>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="enable2FA">
                        <label class="form-check-label" for="enable2FA"></label>
                      </div>
                    </div>
                    
                    <h6>Login Sessions</h6>
                    <div class="border rounded p-3">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <div>
                          <strong>Current Session</strong>
                          <br>
                          <small class="text-muted">
                            <i data-lucide="monitor" style="width: 12px; height: 12px;" class="me-1"></i>
                            Chrome on Windows • Jakarta, Indonesia
                          </small>
                        </div>
                        <span class="badge bg-success">Active</span>
                      </div>
                      <button class="btn btn-outline-danger btn-sm">
                        <i data-lucide="log-out" class="me-1"></i>
                        Logout All Sessions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div>
                    <button class="btn btn-primary me-2">
                      <i data-lucide="save" class="me-1"></i>
                      Simpan Perubahan
                    </button>
                    <button class="btn btn-outline-secondary">
                      <i data-lucide="x" class="me-1"></i>
                      Batal
                    </button>
                  </div>
                  <button class="btn btn-outline-danger">
                    <i data-lucide="trash-2" class="me-1"></i>
                    Hapus Akun
                  </button>
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
      <div class="container-fluid fade-in">
        <div class="row mb-4">
          <div class="col-12">
            <h2 class="text-gradient mb-1">
              <i data-lucide="circle-question-mark" class="me-2"></i>
              Pusat Bantuan
            </h2>
            <p class="text-muted">Temukan jawaban dan dapatkan dukungan</p>
          </div>
        </div>

        <!-- Search FAQ -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="input-group input-group-lg">
                  <span class="input-group-text">
                    <i data-lucide="search"></i>
                  </span>
                  <input type="text" class="form-control" placeholder="Cari pertanyaan umum..." id="faqSearch">
                  <button class="btn btn-primary">
                    <i data-lucide="search" class="me-1"></i>
                    Cari
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-4">
          <!-- FAQ Section -->
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="help-circle" class="me-2"></i>
                  Pertanyaan yang Sering Diajukan
                </h5>
              </div>
              <div class="card-body">
                <div class="accordion" id="faqAccordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                        <i data-lucide="bot" class="me-2"></i>
                        Bagaimana cara menambahkan agen AI?
                      </button>
                    </h2>
                    <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        <p>Untuk menambahkan agen AI baru:</p>
                        <ol>
                          <li>Masuk ke menu <strong>Konektor</strong></li>
                          <li>Pilih bagian <strong>AI Agents</strong></li>
                          <li>Isi informasi nama agent, model AI, dan API key</li>
                          <li>Klik tombol <strong>Tambah Agent</strong></li>
                        </ol>
                        <p>Pastikan API key yang Anda masukkan valid dan memiliki akses yang diperlukan.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                        <i data-lucide="message-square" class="me-2"></i>
                        Bagaimana cara mengintegrasikan WhatsApp?
                      </button>
                    </h2>
                    <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        <p>Untuk mengintegrasikan WhatsApp:</p>
                        <ol>
                          <li>Buka menu <strong>Konektor</strong></li>
                          <li>Scroll ke bagian <strong>WhatsApp Integration</strong></li>
                          <li>Scan QR code menggunakan WhatsApp di ponsel Anda</li>
                          <li>Tunggu hingga status berubah menjadi "Connected"</li>
                          <li>Konfigurasi webhook URL jika diperlukan</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                        <i data-lucide="database" class="me-2"></i>
                        Bagaimana cara mengelola knowledge base?
                      </button>
                    </h2>
                    <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        <p>Knowledge base membantu AI memberikan jawaban yang lebih akurat:</p>
                        <ul>
                          <li>Masuk ke menu <strong>Data</strong></li>
                          <li>Tambahkan informasi dengan judul dan konten yang jelas</li>
                          <li>Gunakan kategori untuk mengorganisir informasi</li>
                          <li>Update secara berkala untuk menjaga relevansi</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                        <i data-lucide="settings" class="me-2"></i>
                        Bagaimana cara mengoptimalkan performa AI?
                      </button>
                    </h2>
                    <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">
                        <p>Tips untuk mengoptimalkan performa AI:</p>
                        <ul>
                          <li>Atur <strong>system prompt</strong> yang jelas dan spesifik</li>
                          <li>Sesuaikan <strong>temperature</strong> sesuai kebutuhan (0.1-0.9)</li>
                          <li>Batasi <strong>max tokens</strong> untuk respons yang efisien</li>
                          <li>Perbarui knowledge base secara berkala</li>
                          <li>Monitor dan analisis riwayat chat</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Support -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="headphones" class="me-2"></i>
                  Hubungi Support
                </h5>
              </div>
              <div class="card-body">
                <div class="d-grid gap-3">
                  <a href="mailto:support@aibot.id" class="btn btn-outline-primary">
                    <i data-lucide="mail" class="me-2"></i>
                    Email Support
                  </a>
                  <a href="https://wa.me/6281234567890?text=Halo%20saya%20butuh%20bantuan" target="_blank" class="btn btn-outline-success">
                    <i data-lucide="message-square" class="me-2"></i>
                    WhatsApp Support
                  </a>
                  <button class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#liveChatModal">
                    <i data-lucide="message-circle" class="me-2"></i>
                    Live Chat
                  </button>
                </div>
                
                <hr>
                
                <div class="text-center">
                  <h6>Jam Operasional</h6>
                  <p class="text-muted small mb-2">
                    <i data-lucide="clock" class="me-1"></i>
                    Senin - Jumat: 09:00 - 18:00 WIB
                  </p>
                  <p class="text-muted small">
                    <i data-lucide="calendar" class="me-1"></i>
                    Sabtu: 09:00 - 15:00 WIB
                  </p>
                </div>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="card mt-4">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="link" class="me-2"></i>
                  Link Berguna
                </h5>
              </div>
              <div class="card-body">
                <div class="list-group list-group-flush">
                  <a href="#" class="list-group-item list-group-item-action border-0 px-0">
                    <i data-lucide="book-open" class="me-2"></i>
                    Dokumentasi API
                  </a>
                  <a href="#" class="list-group-item list-group-item-action border-0 px-0">
                    <i data-lucide="video" class="me-2"></i>
                    Tutorial Video
                  </a>
                  <a href="#" class="list-group-item list-group-item-action border-0 px-0">
                    <i data-lucide="users" class="me-2"></i>
                    Komunitas
                  </a>
                  <a href="#" class="list-group-item list-group-item-action border-0 px-0">
                    <i data-lucide="newspaper" class="me-2"></i>
                    Blog & Updates
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <i data-lucide="send" class="me-2"></i>
                  Kirim Pertanyaan
                </h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="userEmail" class="form-label">Email Anda</label>
                      <input type="email" class="form-control" id="userEmail" placeholder="nama@email.com" value="john.doe@example.com">
                    </div>
                    <div class="col-md-6">
                      <label for="nowa" class="form-label">Nomor WhatsApp</label>
                      <input class="form-control" id="nowa" placeholder="+62 812-3456-7890" value="+62 812-3456-7890">
                    </div>
                    <div class="col-12">
                      <label for="subject" class="form-label">Subjek</label>
                      <select class="form-select" id="subject">
                        <option value="">Pilih kategori pertanyaan</option>
                        <option value="technical">Masalah Teknis</option>
                        <option value="billing">Billing & Pembayaran</option>
                        <option value="feature">Request Fitur</option>
                        <option value="general">Pertanyaan Umum</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label for="userMessage" class="form-label">Pertanyaan Detail</label>
                      <textarea class="form-control" id="userMessage" rows="4" placeholder="Jelaskan pertanyaan atau masalah Anda dengan detail..."></textarea>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">
                        <i data-lucide="send" class="me-1"></i>
                        Kirim Pertanyaan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Helper methods
  getStatusBadgeClass(status) {
    const classes = {
      'success': 'bg-success',
      'failed': 'bg-danger',
      'pending': 'bg-warning'
    };
    return classes[status] || 'bg-secondary';
  }

  getStatusIcon(status) {
    const icons = {
      'success': 'check-circle',
      'failed': 'x-circle',
      'pending': 'clock'
    };
    return icons[status] || 'help-circle';
  }

  getStatusText(status) {
    const texts = {
      'success': 'Berhasil',
      'failed': 'Gagal',
      'pending': 'Pending'
    };
    return texts[status] || 'Unknown';
  }
}