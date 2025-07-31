// components.js
class Components {
	dashboard() {
		return `
		<div class="container py-4">
			<div class="d-flex justify-content-between align-items-center mb-4">
				<h2 class="mb-0">Dashboard</h2>
				<button class="btn btn-success d-flex align-items-center gap-1" id="btn-scan-qr">
					<i data-lucide="qr-code" class="lucide"></i> Scan QR WhatsApp
				</button>
			</div>

			<div class="row g-3 mb-4">
				<div class="col-md-3">
					<div class="card shadow-sm border-0">
						<div class="card-body d-flex align-items-center gap-3">
							<i data-lucide="users" class="lucide text-primary" style="width: 32px; height: 32px;"></i>
							<div>
								<div class="fw-bold fs-5">1.203</div>
								<small class="text-muted">Kontak Tersimpan</small>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card shadow-sm border-0">
						<div class="card-body d-flex align-items-center gap-3">
							<i data-lucide="bot" class="lucide text-success" style="width: 32px; height: 32px;"></i>
							<div>
								<div class="fw-bold fs-5">4 Bot Aktif</div>
								<small class="text-muted">Bot Berjalan</small>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card shadow-sm border-0">
						<div class="card-body d-flex align-items-center gap-3">
							<i data-lucide="settings" class="lucide text-warning" style="width: 32px; height: 32px;"></i>
							<div>
								<div class="fw-bold fs-5">3 Agen</div>
								<small class="text-muted">Model Digunakan</small>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card shadow-sm border-0">
						<div class="card-body d-flex align-items-center gap-3">
							<i data-lucide="book-open" class="lucide text-danger" style="width: 32px; height: 32px;"></i>
							<div>
								<div class="fw-bold fs-5">76</div>
								<small class="text-muted">Knowledge Terdaftar</small>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="card shadow-sm border-0">
				<div class="card-header bg-light d-flex justify-content-between align-items-center">
					<h5 class="mb-0">Aktivitas Terbaru</h5>
					<button class="btn btn-outline-secondary btn-sm">
						<i data-lucide="refresh-ccw" class="lucide me-1" style="width: 16px; height: 16px;"></i> Segarkan
					</button>
				</div>
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Bot “Layanan Pelanggan” berhasil dijalankan.
							<span class="badge bg-success">10 detik lalu</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Agen GPT-4 berhasil dikonfigurasi.
							<span class="badge bg-primary">2 menit lalu</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Knowledge “FAQ Pembayaran” ditambahkan.
							<span class="badge bg-warning text-dark">5 menit lalu</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		`;
	}

	agent() {
		return `
		<div class="container py-4">
			<h4 class="mb-4">🤖 Manajemen Agen & Knowledge Base</h4>

			<div class="row g-4">
				<!-- Konfigurasi Agen -->
				<div class="col-md-6">
					<div class="card shadow-sm border-0">
						<div class="card-body">
							<h5 class="card-title">Konfigurasi Agen</h5>
							<p class="text-muted small">Atur kredensial dan perilaku dasar agen AI Anda.</p>

							<div class="mb-3">
								<label class="form-label">Model</label>
								<input type="text" class="form-control" placeholder="Contoh: gpt-4.5-turbo">
							</div>

							<div class="mb-3">
								<label class="form-label">API Key</label>
								<input type="password" class="form-control" placeholder="API Key pribadi">
							</div>

							<div class="mb-3">
								<label class="form-label">Endpoint</label>
								<input type="text" class="form-control" placeholder="https://api.example.com/agent">
							</div>

							<div class="mb-3">
								<label class="form-label">Skema Payload (JSON)</label>
								<textarea class="form-control" rows="4" placeholder='{"model": "...", "prompt": "..."}'></textarea>
							</div>

							<div class="mb-3">
								<label class="form-label">Prompt Sistem</label>
								<textarea class="form-control" rows="3" placeholder="Instruksi dasar untuk agen"></textarea>
							</div>

							<div class="mb-3">
								<label class="form-label">Intonasi / Gaya Bahasa</label>
								<select class="form-select">
									<option>Formal</option>
									<option>Kasual</option>
									<option>Netral</option>
									<option>Ramah</option>
								</select>
							</div>

							<div class="d-flex gap-2">
								<button class="btn btn-primary"><i class="lucide lucide-save"></i> Simpan</button>
								<button class="btn btn-outline-secondary"><i class="lucide lucide-refresh-ccw"></i> Reset Default</button>
								<button class="btn btn-danger"><i class="lucide lucide-x-circle"></i> Batal</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Form Tambah Knowledge -->
				<div class="col-md-6">
					<div class="card shadow-sm border-0">
						<div class="card-body">
							<h5 class="card-title">Tambah Knowledge</h5>
							<p class="text-muted small">Pengetahuan yang ditambahkan akan digunakan sebagai referensi oleh agen.</p>

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
									<option value="medium">Sedang</option>
									<option value="low">Rendah</option>
								</select>
							</div>

							<div class="d-flex justify-content-end">
								<button class="btn btn-success"><i class="lucide lucide-plus-circle"></i> Tambah Knowledge</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Daftar Knowledge -->
				<div class="col-12">
					<div class="card shadow-sm border-0">
						<div class="card-body">
							<h5 class="card-title">Daftar Knowledge</h5>
							<p class="text-muted small">Knowledge yang tersedia dan bisa dipakai oleh agen.</p>

							<div class="table-responsive">
								<table class="table table-bordered align-middle">
									<thead class="table-light">
										<tr>
											<th>Judul</th>
											<th>Kategori</th>
											<th>Tag</th>
											<th>Prioritas</th>
											<th>Aksi</th>
										</tr>
									</thead>
									<tbody>
										<!-- Contoh baris dummy -->
										<tr>
											<td>FAQ Produk</td>
											<td>Penjualan</td>
											<td><span class="badge text-bg-secondary">faq</span>, <span class="badge text-bg-secondary">produk</span></td>
											<td><span class="badge bg-danger">Tinggi</span></td>
											<td>
												<button class="btn btn-sm btn-warning"><i class="lucide lucide-pencil"></i></button>
												<button class="btn btn-sm btn-danger"><i class="lucide lucide-trash-2"></i></button>
											</td>
										</tr>
										<tr>
											<td>Teknis Instalasi</td>
											<td>Dukungan</td>
											<td><span class="badge text-bg-secondary">instalasi</span></td>
											<td><span class="badge bg-warning text-dark">Sedang</span></td>
											<td>
												<button class="btn btn-sm btn-warning"><i class="lucide lucide-pencil"></i></button>
												<button class="btn btn-sm btn-danger"><i class="lucide lucide-trash-2"></i></button>
											</td>
										</tr>
										<!-- Tambahkan baris lain dari JS atau backend -->
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
		<div class="container-fluid py-4">
			<h4 class="mb-4"><i class="lucide-database me-2"></i>Database & Chat Logs</h4>
			
			<div class="row g-4">

				<!-- Supabase Info -->
				<div class="col-md-6">
					<div class="card shadow-sm">
						<div class="card-body">
							<h5 class="card-title"><i class="lucide-server me-2"></i>Supabase API</h5>
							<p class="text-muted">Informasi koneksi dengan Supabase untuk pengambilan dan penyimpanan data.</p>
							<ul class="list-group list-group-flush">
								<li class="list-group-item"><strong>URL:</strong> https://your-project.supabase.co</li>
								<li class="list-group-item"><strong>Anon Key:</strong> xxxxxx-xxxxxxxxxxxxxx</li>
								<li class="list-group-item"><strong>Table Chat:</strong> <code>tb_chat</code></li>
								<li class="list-group-item"><strong>Status:</strong> <span class="badge bg-success">Tersambung</span></li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Statistik Chat -->
				<div class="col-md-6">
					<div class="card shadow-sm">
						<div class="card-body">
							<h5 class="card-title"><i class="lucide-message-square me-2"></i>Statistik Chat</h5>
							<div class="row text-center">
								<div class="col-4">
									<h3 class="text-primary">120</h3>
									<p class="mb-0 text-muted">Chat Hari Ini</p>
								</div>
								<div class="col-4">
									<h3 class="text-success">340</h3>
									<p class="mb-0 text-muted">Minggu Ini</p>
								</div>
								<div class="col-4">
									<h3 class="text-danger">15</h3>
									<p class="mb-0 text-muted">Gagal Kirim</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Log Chat Terbaru -->
				<div class="col-12">
					<div class="card shadow-sm">
						<div class="card-body">
							<h5 class="card-title"><i class="lucide-history me-2"></i>Riwayat Chat Terbaru</h5>
							<table class="table table-hover align-middle">
								<thead class="table-light">
									<tr>
										<th>Waktu</th>
										<th>Pengirim</th>
										<th>Pesan</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>31 Jul 2025 09:32</td>
										<td>+62 812-xxxx</td>
										<td>Pagi, saya ingin bertanya...</td>
										<td><span class="badge bg-success">Masuk</span></td>
									</tr>
									<tr>
										<td>31 Jul 2025 09:28</td>
										<td>+62 821-xxxx</td>
										<td>Tolong bantu reset akun saya</td>
										<td><span class="badge bg-success">Masuk</span></td>
									</tr>
									<tr>
										<td>31 Jul 2025 09:20</td>
										<td>+62 813-xxxx</td>
										<td>Test kirim</td>
										<td><span class="badge bg-danger">Gagal</span></td>
									</tr>
								</tbody>
							</table>
							<div class="text-end">
								<button class="btn btn-outline-secondary btn-sm"><i class="lucide-refresh-cw me-1"></i>Refresh</button>
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
			<div class="container py-4">
				<h2 class="mb-4">Pengaturan Aplikasi AI Bot</h2>
				<div class="row g-4">

					<!-- General Settings -->
					<div class="col-md-6">
						<div class="card shadow-sm">
							<div class="card-header bg-light">
								<h5 class="mb-0">Umum</h5>
							</div>
							<div class="card-body">
								<div class="mb-3">
									<label class="form-label">Bahasa Default</label>
									<select class="form-select">
										<option>Indonesia</option>
										<option>English</option>
										<option>Spanish</option>
									</select>
								</div>
								<div class="form-check form-switch mb-2">
									<input class="form-check-input" type="checkbox" id="autoReply">
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
							<div class="card-header bg-light">
								<h5 class="mb-0">Respon Bot</h5>
							</div>
							<div class="card-body">
								<div class="mb-3">
									<label class="form-label">Tingkat Formalitas</label>
									<select class="form-select">
										<option value="formal">Formal</option>
										<option value="semi">Semi Formal</option>
										<option value="santai">Santai</option>
									</select>
								</div>
								<div class="mb-3">
									<label class="form-label">Tingkat Keacakan (Temperature)</label>
									<input type="range" class="form-range" min="0" max="1" step="0.1">
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
							<div class="card-header bg-light">
								<h5 class="mb-0">Prompt Sistem</h5>
							</div>
							<div class="card-body">
								<textarea class="form-control mb-3" rows="4" placeholder="Contoh: Kamu adalah asisten cerdas yang siap membantu pelanggan dengan ramah dan cepat."></textarea>
								<button class="btn btn-primary me-2">Simpan</button>
								<button class="btn btn-secondary">Reset ke Default</button>
							</div>
						</div>
					</div>

					<!-- Advanced Settings -->
					<div class="col-12">
						<div class="card shadow-sm">
							<div class="card-header bg-light">
								<h5 class="mb-0">Pengaturan Lanjutan</h5>
							</div>
							<div class="card-body row g-3">
								<div class="col-md-6">
									<label class="form-label">Batasan Waktu Respons (ms)</label>
									<input type="number" class="form-control" value="5000">
								</div>
								<div class="col-md-6">
									<label class="form-label">Frekuensi Cek Update</label>
									<select class="form-select">
										<option value="5">Setiap 5 detik</option>
										<option value="10">Setiap 10 detik</option>
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
		`;
	}

	pengaturan() {
		return `
		<div class="container py-4">
			<h4 class="mb-4">Pengaturan Akun</h4>
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
				<button type="submit" class="btn btn-primary me-2">Simpan Perubahan</button>
				<button class="btn btn-danger">Batal</button>
			</form>
		</div>
		`;
	}

	bantuan() {
		return `
		<div class="container py-4">
			<h4 class="mb-3">Pusat Bantuan</h4>

			<div class="mb-4">
				<div class="input-group">
					<span class="input-group-text"><i class="lucide lucide-search"></i></span>
					<input type="text" class="form-control" placeholder="Cari pertanyaan umum..." id="faqSearch">
				</div>
			</div>

			<div id="faqList" class="mb-5">
				<div class="mb-3">
					<h6>Bagaimana cara menambahkan agen AI?</h6>
					<p class="text-muted">Masuk ke menu <strong>Agent</strong> lalu isi informasi model, endpoint, dan konfigurasi lainnya. Tekan "Simpan".</p>
				</div>
				<div class="mb-3">
					<h6>Apakah saya bisa mengganti prompt dasar untuk agen?</h6>
					<p class="text-muted">Ya, Anda bisa mengatur <strong>prompt dasar</strong> di menu <strong>Bot</strong> > Prompt Base.</p>
				</div>
				<div class="mb-3">
					<h6>Dimana saya bisa melihat webhook WhatsApp?</h6>
					<p class="text-muted">Webhook dapat dikelola melalui menu <strong>WhatsApp</strong>, di mana Anda bisa menambah atau mengedit endpoint.</p>
				</div>
				<div class="mb-3">
					<h6>Apakah platform ini mendukung multi-bot?</h6>
					<p class="text-muted">Ya, Anda dapat membuat beberapa bot dan mengaturnya sesuai dengan use-case masing-masing.</p>
				</div>
			</div>

			<hr class="my-4">
			<h5>Kirim Pertanyaan Anda</h5>
			<form class="mb-3">
				<div class="mb-3">
					<label for="userEmail" class="form-label">Email Anda</label>
					<input type="email" class="form-control" id="userEmail" placeholder="nama@email.com">
				</div>
				<div class="mb-3">
					<label for="userMessage" class="form-label">Pertanyaan</label>
					<textarea class="form-control" id="userMessage" rows="3" placeholder="Tulis pertanyaan Anda di sini..."></textarea>
				</div>
				<button type="submit" class="btn btn-primary"><i class="lucide lucide-send me-1"></i>Kirim Pertanyaan</button>
			</form>

			<div class="d-flex gap-3 mt-4">
				<a href="mailto:support@aibot.id" class="btn btn-outline-secondary">
					<i class="lucide lucide-mail me-1"></i>Email
				</a>
				<a href="https://wa.me/6281234567890?text=Halo%20saya%20butuh%20bantuan" target="_blank" class="btn btn-outline-success">
					<i class="lucide lucide-message-square-dashed me-1"></i>WhatsApp
				</a>
				<a href="/chat-support" class="btn btn-outline-primary">
					<i class="lucide lucide-message-circle me-1"></i>Direct Message
				</a>
			</div>
		</div>
		`;
	}


	logout() {
		alert('Logout');
	}
}
