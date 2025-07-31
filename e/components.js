// components.js
class Components {
login() {
  return `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card shadow">
            <div class="card-body">
              <h4 class="text-center mb-4">Login</h4>
              <form id="formLogin">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}



	dashboard() {
		return ``;
	}

	konektor() {
		return `
		<div class="container py-4">
			<div class="row">

				<div class="col-md-6">
					<div class="card shadow-sm">
						<div class="card-body">
							<h1>Agent</h1>
							<hr>
							<div class="container py-4">
								<div class="mb-3">
									<label class="form-label">Nama</label>
									<input type="text" class="form-control" placeholder="Nama Agen">
								</div>
								<div class="mb-3">
									<label class="form-label">AI Model</label>
									<input type="text" class="form-control" placeholder="AI Model">
								</div>
								<div class="mb-3">
									<label class="form-label">API Key</label>
									<input type="text" class="form-control" placeholder="API Key">
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="card shadow-sm">
						<div class="card-body">
							<h1>Supabase</h1>
							<hr>
							<div class="container py-4">
								<div class="mb-3">
									<label class="form-label">Nama</label>
									<input type="text" class="form-control" placeholder="Label">
								</div>
								<div class="mb-3">
									<label class="form-label">URL</label>
									<input type="text" class="form-control" placeholder="URL">
								</div>
								<div class="mb-3">
									<label class="form-label">Api Key</label>
									<input type="text" class="form-control" placeholder="API Key">
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="card shadow-sm">
						<div class="card-body">
							<h1>Whatsapp</h1>
							<hr>
							<div class="container py-4">
								<img >
								<h3>Scan Qr</h3>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		`;
	}


	data() {
		return `
		<div class="container-fluid py-4">
			<h4 class="mb-4"><i class="lucide-database me-2"></i> Knowledge Base</h4>

						<div class="container py-4">
								<div class="mb-3">
									<label class="form-label">Judul</label>
									<input type="text" class="form-control" placeholder="Judul">
								</div>
								<div class="mb-3">
									<label class="form-label">Isi</label>
									<textarea type="text" class="form-control" placeholder="Isi">
									</textarea>
								</div>
							</div>


			<div class="row g-4">

				<!-- Log Chat Terbaru -->
				<div class="col-12">
					<div class="card shadow-sm">
						<div class="card-body">
							<h5 class="card-title"><i class="lucide-history me-2"></i>Riwayat Chat Terbaru</h5>
							<table class="table table-hover align-middle">
								<thead class="table-light">
									<tr>
										<th>Waktu</th>
										<th>Judul</th>
										<th>Isi</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>31 Jul 2025 09:32</td>
										<td>Aaaa</td>
										<td>Pagi, saya ingin bertanya...</td>
										<td><span class="badge bg-success">Masuk</span></td>
									</tr>
									<tr>
										<td>31 Jul 2025 09:28</td>
										<td>Bbbb</td>
										<td>Tolong bantu reset akun saya</td>
										<td><span class="badge bg-success">Masuk</span></td>
									</tr>
									<tr>
										<td>31 Jul 2025 09:20</td>
										<td>Cccc</td>
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
								<div class="form-check form-switch">
									<input class="form-check-input" type="checkbox" id="typingSim">
									<label class="form-check-label" for="typingSim">Tampilkan mengetik</label>
								</div>
								<div class="mb-3">
									<label class="form-label">Panjang Respon Maksimum</label>
									<input type="number" class="form-control" value="300">
								</div>

							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="card shadow-sm">
							<div class="card-header bg-light">
								<h5 class="mb-0">Umum</h5>
							</div>
							<div class="card-body">
								<textarea class="form-control mb-3" rows="4" placeholder="Contoh: Kamu adalah asisten cerdas yang siap membantu pelanggan dengan ramah dan cepat."></textarea>


									<label class="form-label">Batasan Waktu Respons (ms)</label>
									<input type="number" class="form-control" value="5000">

									<label class="form-label">Frekuensi Cek Update</label>
									<select class="form-select">
										<option value="5">Setiap 5 detik</option>
										<option value="10">Setiap 10 detik</option>
										<option value="30">Setiap 30 detik</option>
									</select>
									<label class="form-label">URL Callback (Webhook)</label>
									<input type="url" class="form-control" placeholder="https://example.com/webhook">

							</div>
						</div>
					</div>
								<button class="btn btn-primary me-2">Simpan</button>
								<button class="btn btn-secondary">Reset ke Default</button>
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
					<label for="nowa" class="form-label">Nomor WhatsApp</label>
					<input class="form-control" id="nowa" placeholder="6289-123-456">
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
