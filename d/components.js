// Components.js - UI Components Generator
class Components {
  constructor() {
    this.dummyData = {
      stats: {
        contacts: 1203,
        activeBots: 4,
        agents: 3,
        knowledge: 76,
        todayChats: 120,
        weekChats: 340,
        failedChats: 15
      },
      activities: [
        { message: 'Bot "Layanan Pelanggan" berhasil dijalankan', time: '10 detik lalu', type: 'success' },
        { message: 'Agen GPT-4 berhasil dikonfigurasi', time: '2 menit lalu', type: 'primary' },
        { message: 'Knowledge "FAQ Pembayaran" ditambahkan', time: '5 menit lalu', type: 'warning' },
        { message: 'Webhook WhatsApp tersambung', time: '10 menit lalu', type: 'info' }
      ],
      chatLogs: [
        { time: '31 Jul 2025 09:32', sender: '+62 812-xxxx', message: 'Pagi, saya ingin bertanya...', status: 'success' },
        { time: '31 Jul 2025 09:28', sender: '+62 821-xxxx', message: 'Tolong bantu reset akun saya', status: 'success' },
        { time: '31 Jul 2025 09:20', sender: '+62 813-xxxx', message: 'Test kirim', status: 'danger' },
        { time: '31 Jul 2025 09:15', sender: '+62 856-xxxx', message: 'Terima kasih atas bantuannya', status: 'success' }
      ],
      knowledge: [
        { title: 'FAQ Produk', category: 'Penjualan', tags: ['faq', 'produk'], priority: 'high' },
        { title: 'Teknis Instalasi', category: 'Dukungan', tags: ['instalasi'], priority: 'medium' },
        { title: 'Panduan Pembayaran', category: 'Keuangan', tags: ['pembayaran', 'guide'], priority: 'high' },
        { title: 'Troubleshooting', category: 'Teknis', tags: ['error', 'fix'], priority: 'low' }
      ]
    };
  }

  dashboard() {
    return `
    <div class="container py-4 fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="mb-0"><i data-lucide="chart-no-axes-combined" class="me-2"></i>Dashboard</h2>
        <button class="btn btn-success d-flex align-items-center gap-2" id="btn-scan-qr">
          <i data-lucide="qr-code"></i> Scan QR WhatsApp
        </button>
      </div>

      <div class="row g-3 mb-4">
        <div class="col-md-3">
          <div class="stats-card">
            <div class="d-flex align-items-center gap-3">
              <i data-lucide="users" style="width: 32px; height: 32px;"></i>
              <div>
                <div class="fw-bold fs-4">${this.dummyData.stats.contacts.toLocaleString()}</div>
                <small class="opacity-75">Kontak Tersimpan</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stats-card success">
            <div class="d-flex align-items-center gap-3">
              <i data-lucide="bot" style="width: 32px; height: 32px;"></i>
              <div>
                <div class="fw-bold fs-4">${this.dummyData.stats.activeBots} Bot Aktif</div>
                <small class="opacity-75">Bot Berjalan</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stats-card warning">
            <div class="d-flex align-items-center gap-3">
              <i data-lucide="settings" style="width: 32px; height: 32px;"></i>
              <div>
                <div class="fw-bold fs-4">${this.dummyData.stats.agents} Agen</div>
                <small class="opacity-75">Model Digunakan</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stats-card info">
            <div class="d-flex align-items-center gap-3">
              <i data-lucide="book-open" style="width: 32px; height: 32px;"></i>
              <div>
                <div class="fw-bold fs-4">${this.dummyData.stats.knowledge}</div>
                <small class="opacity-75">Knowledge Terdaftar</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card shadow-sm">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="mb-0"><i data-lucide="activity" class="me-2"></i>Aktivitas Terbaru</h5>
          <button class="btn btn-outline-secondary btn-sm" onclick="this.refreshActivities()">
            <i data-lucide="refresh-ccw" class="me-1"></i> Segarkan
          </button>
        </div>
        <div class="card-body">
          <div class="list-group list-group-flush">
            ${this.dummyData.activities.map(activity => `
              <div class="list-group-item d-flex justify-content-between align-items-center border-0">
                <div class="d-flex align-items-center">
                  <i data-lucide="circle" class="me-2 text-${activity.type}" style="width: 8px; height: 8px;"></i>
                  ${activity.message}
                </div>
                <span class="badge bg-${activity.type}">${activity.time}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
    `;
  }

  agent() {
    return `
    <div class="container py-4 fade-in">
      <h4 class="mb-4"><i data-lucide="brain" class="me-2"></i>Manajemen Agen & Knowledge Base</h4>

      <div class="row g-4">
        <!-- Konfigurasi Agen -->
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-header">
              <h5 class="mb-0"><i data-lucide="settings" class="me-2"></i>Konfigurasi Agen</h5>
            </div>
            <div class="card-body">
              <p class="text-muted small mb-3">Atur kredensial dan perilaku dasar agen AI Anda.</p>

              <div class="mb-3">
                <label class="form-label">Model</label>
                <input type="text" class="form-control" placeholder="Contoh: gpt-4.5-turbo" value="gpt-4-turbo">
              </div>

              <div class="mb-3">
                <label class="form-label">API Key</label>
                <input type="password" class="form-control" placeholder="API Key pribadi" value="sk-...">
              </div>

              <div class="mb-3">
                <label class="form-label">Endpoint</label>
                <input type="text" class="form-control" placeholder="https://api.example.com/agent" value="https://api.openai.com/v1/chat/completions">
              </div>

              <div class="mb-3">
                <label class="form-label">Skema Payload (JSON)</label>
                <textarea class="form-control" rows="4" placeholder='{"model": "...", "prompt": "..."}'>{
  "model": "gpt-4-turbo",
  "messages": [],
  "temperature": 0.7
}</textarea>
              </div>

              <div class="mb-3">
                <label class="form-label">Prompt Sistem</label>
                <textarea class="form-control" rows="3" placeholder="Instruksi dasar untuk agen">Anda adalah asisten AI yang membantu pelanggan dengan ramah dan profesional.</textarea>
              </div>

              <div class="mb-3">
                <label class="form-label">Intonasi / Gaya Bahasa</label>
                <select class="form-select">
                  <option>Formal</option>
                  <option selected>Kasual</option>
                  <option>Netral</option>
                  <option>Ramah</option>
                </select>
              </div>

              <div class="d-flex gap-2">
                <button class="btn btn-primary"><i data-lucide="save" class="me-1"></i> Simpan</button>
                <button class="btn btn-outline-secondary"><i data-lucide="refresh-ccw" class="me-1"></i> Reset</button>
                <button class="btn btn-danger"><i data-lucide="x-circle" class="me-1"></i> Batal</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Tambah Knowledge -->
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-header">
              <h5 class="mb-0"><i data-lucide="plus-circle" class="me-2"></i>Tambah Knowledge</h5>
            </div>
            <div class="card-body">
              <p class="text-muted small mb-3">Pengetahuan yang ditambahkan akan digunakan sebagai referensi oleh agen.</p>

              <div class="mb-3">
                <label class="form-label">Judul</label>
                <input type="text" class="form-control" placeholder="Judul pengetahuan">
              </div>

              <div class="mb-3">
                <label class="form-label">Isi</label>
                <textarea class="form-control" rows="4" placeholder="Deskripsi atau informasi penting"></textarea>
              </div>

              <div class="mb-3">
                <label class="form-label">Kategori</label>
                <input type="text" class="form-control" placeholder="Contoh: Penjualan, Teknologi">
              </div>

              <div class="mb-3">
                <label class="form-label">Tag</label>
                <input type="text" class="form-control" placeholder="pisahkan dengan koma, contoh: faq,produk">
              </div>

              <div class="mb-3">
                <label class="form-label">Prioritas</label>
                <select class="form-select">
                  <option value="high">Tinggi</option>
                  <option value="medium" selected>Sedang</option>
                  <option value="low">Rendah</option>
                </select>
              </div>

              <div class="d-flex justify-content-end">
                <button class="btn btn-success"><i data-lucide="plus-circle" class="me-1"></i> Tambah Knowledge</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Daftar Knowledge -->
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-header">
              <h5 class="mb-0"><i data-lucide="database" class="me-2"></i>Daftar Knowledge</h5>
            </div>
            <div class="card-body">
              <p class="text-muted small mb-3">Knowledge yang tersedia dan bisa dipakai oleh agen.</p>

              <div class="table-responsive">
                <table class="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Judul</th>
                      <th>Kategori</th>
                      <th>Tag</th>
                      <th>Prioritas</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${this.dummyData.knowledge.map(item => `
                      <tr>
                        <td><strong>${item.title}</strong></td>
                        <td>${item.category}</td>
                        <td>
                          ${item.tags.map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join('')}
                        </td>
                        <td>
                          <span class="badge bg-${item.priority === 'high' ? 'danger' : item.priority === 'medium' ? 'warning' : 'success'}">
                            ${item.priority === 'high' ? 'Tinggi' : item.priority === 'medium' ? 'Sedang' : 'Rendah'}
                          </span>
                        </td>
                        <td>
                          <button class="btn btn-sm btn-warning me-1"><i data-lucide="pencil"></i></button>
                          <button class="btn btn-sm btn-danger"><i data-lucide="trash-2"></i></button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  database() {
    return `
    <div class="container py-4 fade-in">
      <h4 class="mb-4"><i data-lucide="database-zap" class="me-2"></i>Database & Chat Logs</h4>
      
      <div class="row g-4">
        <!-- Supabase Info -->
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-header">
              <h5 class="mb-0"><i data-lucide="server" class="me-2"></i>Supabase API</h5>
            </div>
            <div class="card-body">
              <p class="text-muted mb-3">Informasi koneksi dengan Supabase untuk pengambilan dan penyimpanan data.</p>
              <div class="list-group list-group-flush">
                <div class="list-group-item d-flex justify-content-between">
                  <strong>URL:</strong> 
                  <code>https://your-project.supabase.co</code>
                </div>
                <div class="list-group-item d-flex justify-content-between">
                  <strong>Anon Key:</strong> 
                  <code>xxxxxx-xxxxxxxxxxxxxx</code>
                </div>
                <div class="list-group-item d-flex justify-content-between">
                  <strong>Table Chat:</strong> 
                  <code>tb_chat</code>
                </div>
                <div class="list-group-item d-flex justify-content-between">
                  <strong>Status:</strong> 
                  <span class="badge bg-success">Tersambung</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Statistik Chat -->
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-header">
              <h5 class="mb-0"><i data-lucide="message-square" class="me-2"></i>Statistik Chat</h5>
            </div>
            <div class="card-body">
              <div class="row text-center">
                <div class="col-4">
                  <div class="stats-card mb-0">
                    <h3 class="mb-1">${this.dummyData.stats.todayChats}</h3>
                    <p class="mb-0 small opacity-75">Chat Hari Ini</p>
                  </div>
                </div>
                <div class="col-4">
                  <div class="stats-card success mb-0">
                    <h3 class="mb-1">${this.dummyData.stats.weekChats}</h3>
                    <p class="mb-0 small opacity-75">Minggu Ini</p>
                  </div>
                </div>
                <div class="col-4">
                  <div class="stats-card warning mb-0">
                    <h3 class="mb-1">${this.dummyData.stats.failedChats}</h3>
                    <p class="mb-0 small opacity-75">Gagal Kirim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Log Chat Terbaru -->
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="mb-0"><i data-lucide="history" class="me-2"></i>Riwayat Chat Terbaru</h5>
              <button class="btn btn-outline-secondary btn-sm">
                <i data-lucide="refresh-cw" class="me-1"></i>Refresh
              </button>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Waktu</th>
                      <th>Pengirim</th>
                      <th>Pesan</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${this.dummyData.chatLogs.map(log => `
                      <tr>
                        <td><small class="text-muted">${log.time}</small></td>
                        <td><strong>${log.sender}</strong></td>
                        <td>${log.message}</td>
                        <td>
                          <span class="badge bg-${log.status}">
                            ${log.status === 'success' ? 'Masuk' : 'Gagal'}
                          </span>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  setting() {
    return `
    <div class="container py-4 fade-in">
      <h2 class="mb-4"><i data-lucide="sliders-vertical" class="me-2"></i>Pengaturan Aplikasi AI Bot</h2>
      <div class="row g-4">

        <!-- General Settings -->
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-header">
              <h5 class="mb-0"><i data-lucide="settings" class="me-2"></i>Umum</h5>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Bahasa Default</label>
                <select class="form-select">
                  <option selected>Indonesia</option>
                  <option>English</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div class="form-check form-switch mb-3">
                <input class="form-check-input" type="checkbox" id="autoReply" checked>
                <label class="form-check-label" for="autoReply">Aktifkan Auto Reply</label>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="typingSim">
                <label class="form-check-label" for="typingSim">Simulasikan Ketikan</label>
              </div>
            </div>
          </div>
        </div>

        <!-- Response Settings -->
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-header">
              <h5 class="mb-0"><i data-lucide="message-circle" class="me-2"></i>Respon Bot</h5>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Tingkat Formalitas</label>
                <select class="form-select">
                  <option value="formal">Formal</option>
                  <option value="semi" selected>Semi Formal</option>
                  <option value="santai">Santai</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Tingkat Keacakan (Temperature)</label>
                <input type="range" class="form-range" min="0" max="1" step="0.1" value="0.7">
                <div class="d-flex justify-content-between">
                  <small class="text-muted">0</small>
                  <small class="text-muted">1</small>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Panjang Respon Maksimum</label>
                <input type="number" class="form-control" value="300">
              </div>
            </div>
          </div>
        </div>

        <!-- System Prompt -->
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-header">
              <h5 class="mb-0"><i data-lucide="file-text" class="me-2"></i>Prompt Sistem</h5>
            </div>
            <div class="card-body">
              <textarea class="form-control mb-3" rows="4" placeholder="Contoh: Kamu adalah asisten cerdas yang siap membantu pelanggan dengan ramah dan cepat.">Anda adalah asisten AI yang membantu pelanggan dengan ramah dan profesional. Selalu berikan jawaban yang akurat dan membantu.</textarea>
              <div class="d-flex gap-2">
                <button class="btn btn-primary"><i data-lucide="save" class="me-1"></i> Simpan</button>
                <button class="btn btn-secondary"><i data-lucide="refresh-ccw" class="me-1"></i> Reset ke Default</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Advanced Settings -->
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-header">
              <h5 class="mb-0"><i data-lucide="cog" class="me-2"></i>Pengaturan Lanjutan</h5>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Batasan Waktu Respons (ms)</label>
                  <input type="number" class="form-control" value="5000">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Frekuensi Cek Update</label>
                  <select class="form-select">
                    <option value="5">Setiap 5 detik</option>
                    <option value="10" selected>Setiap 10 detik</option>
                    <option value="30">Setiap 30 detik</option>
                  </select>
                </div>
                <div class="col-12">
                  <label class="form-label">URL Callback (Webhook)</label>
                  <input type="url" class="form-control" placeholder="https://example.com/webhook">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    `;
  }

  pengaturan() {
    return `
    <div class="container py-4 fade-in">
      <h4 class="mb-4"><i data-lucide="user-cog" class="me-2"></i>Pengaturan Akun</h4>
      <div class="card shadow-sm">
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email Akun</label>
              <input type="email" class="form-control" id="email" value="user@example.com" readonly>
            </div>
            <div class="mb-3">
              <label for="namaLengkap" class="form-label">Nama Lengkap</label>
              <input type="text" class="form-control" id="namaLengkap" value="Nama Pengguna">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Ubah Password</label>
              <input type="password" class="form-control" id="password" placeholder="••••••••">
            </div>
            <div class="mb-3">
              <label class="form-label">Tema Tampilan</label>
              <select class="form-select" id="tema">
                <option value="light">Terang</option>
                <option value="dark">Gelap</option>
                <option value="system" selected>Ikuti Sistem</option>
              </select>
            </div>
            <div class="form-check form-switch mb-3">
              <input class="form-check-input" type="checkbox" id="notif" checked>
              <label class="form-check-label" for="notif">Aktifkan Notifikasi</label>
            </div>
            <div class="d-flex gap-2">
              <button type="submit" class="btn btn-primary"><i data-lucide="save" class="me-1"></i> Simpan Perubahan</button>
              <button type="button" class="btn btn-danger"><i data-lucide="x" class="me-1"></i> Batal</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    `;
  }

  bantuan() {
    return `
    <div class="container py-4 fade-in">
      <h4 class="mb-3"><i data-lucide="help-circle" class="me-2"></i>Pusat Bantuan</h4>

      <div class="mb-4">
        <div class="input-group">
          <span class="input-group-text"><i data-lucide="search"></i></span>
          <input type="text" class="form-control" placeholder="Cari pertanyaan umum..." id="faqSearch">
        </div>
      </div>

      <div class="card shadow-sm mb-4">
        <div class="card-header">
          <h5 class="mb-0"><i data-lucide="message-circle-question" class="me-2"></i>FAQ - Pertanyaan Umum</h5>
        </div>
        <div class="card-body" id="faqList">
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  Bagaimana cara menambahkan agen AI?
                </button>
              </h2>
              <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Masuk ke menu <strong>Agent</strong> lalu isi informasi model, endpoint, dan konfigurasi lainnya. Tekan "Simpan".
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Apakah saya bisa mengganti prompt dasar untuk agen?
                </button>
              </h2>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Ya, Anda bisa mengatur <strong>prompt dasar</strong> di menu <strong>Setting</strong> > Prompt Sistem.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Dimana saya bisa melihat webhook WhatsApp?
                </button>
              </h2>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Webhook dapat dikelola melalui menu <strong>Database</strong>, di mana Anda bisa melihat log dan status koneksi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card shadow-sm mb-4">
        <div class="card-header">
          <h5 class="mb-0"><i data-lucide="send" class="me-2"></i>Kirim Pertanyaan Anda</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="userEmail" class="form-label">Email Anda</label>
              <input type="email" class="form-control" id="userEmail" placeholder="nama@email.com">
            </div>
            <div class="mb-3">
              <label for="userMessage" class="form-label">Pertanyaan</label>
              <textarea class="form-control" id="userMessage" rows="3" placeholder="Tulis pertanyaan Anda di sini..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary"><i data-lucide="send" class="me-1"></i>Kirim Pertanyaan</button>
          </form>
        </div>
      </div>

      <div class="card shadow-sm">
        <div class="card-header">
          <h5 class="mb-0"><i data-lucide="phone" class="me-2"></i>Kontak Support</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-4">
              <a href="mailto:support@aibot.id" class="btn btn-outline-secondary w-100">
                <i data-lucide="mail" class="me-2"></i>Email Support
              </a>
            </div>
            <div class="col-md-4">
              <a href="https://wa.me/6281234567890?text=Halo%20saya%20butuh%20bantuan" target="_blank" class="btn btn-outline-success w-100">
                <i data-lucide="message-square" class="me-2"></i>WhatsApp
              </a>
            </div>
            <div class="col-md-4">
              <button class="btn btn-outline-primary w-100">
                <i data-lucide="message-circle" class="me-2"></i>Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
      alert('Logout berhasil! Anda akan diarahkan ke halaman login.');
      // In a real app, you would redirect to login page
      window.location.reload();
    }
  }

  refreshActivities() {
    // Simulate refresh with loading
    const button = event.target.closest('button');
    const icon = button.querySelector('i');
    icon.style.animation = 'spin 1s linear infinite';
    
    setTimeout(() => {
      icon.style.animation = '';
      alert('Data aktivitas berhasil diperbarui!');
    }, 1000);
  }
}

// Add CSS for spin animation
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);