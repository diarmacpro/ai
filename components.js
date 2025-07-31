// components.js
class Components {
	dashboard() {
		return `
		<div class="container py-4">
			<h2 class="mb-4">Dashboard</h2>

			<div class="row g-4 mb-4">
				<div class="col-md-3">
					<div class="card text-bg-primary shadow-sm">
						<div class="card-body">
							<h5 class="card-title">Kontak</h5>
							<p class="card-text fs-4">1.240</p>
						</div>
					</div>
				</div>

				<div class="col-md-3">
					<div class="card text-bg-success shadow-sm">
						<div class="card-body">
							<h5 class="card-title">Agen</h5>
							<p class="card-text fs-4">32</p>
						</div>
					</div>
				</div>

				<div class="col-md-3">
					<div class="card text-bg-warning shadow-sm">
						<div class="card-body">
							<h5 class="card-title">Bot Aktif</h5>
							<p class="card-text fs-4">12</p>
						</div>
					</div>
				</div>

				<div class="col-md-3">
					<div class="card text-bg-danger shadow-sm">
						<div class="card-body">
							<h5 class="card-title">API Digunakan</h5>
							<p class="card-text fs-4">8.520</p>
						</div>
					</div>
				</div>
			</div>

			<div class="row g-4">
				<div class="col-md-6">
					<div class="card shadow-sm">
						<div class="card-header bg-light">
							Aktivitas Terakhir
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Login dari IP 192.168.1.11</li>
							<li class="list-group-item">Update profil pengguna</li>
							<li class="list-group-item">Menambahkan 10 kontak</li>
							<li class="list-group-item">Menghapus 1 agen</li>
						</ul>
					</div>
				</div>

				<div class="col-md-6">
					<div class="card shadow-sm">
						<div class="card-header bg-light">
							Statistik Bulanan
						</div>
						<div class="card-body">
							<p><strong>Kontak Baru:</strong> 340</p>
							<p><strong>Pesan Terkirim:</strong> 12.560</p>
							<p><strong>Total API Call:</strong> 22.314</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		`;
	}


	whatsapp() {
		return `
		<div class="container py-4">
			<h4 class="mb-4">Manajemen Akun WhatsApp</h4>
			
			<!-- Tombol Tambah Akun -->
			<div class="d-flex justify-content-end mb-3">
				<button class="btn btn-primary" id="btnAddWhatsapp">
					<i class="bi bi-plus-circle"></i> Tambah Akun WhatsApp
				</button>
			</div>

			<!-- Tabel Akun WhatsApp -->
			<div class="table-responsive">
				<table class="table table-bordered align-middle">
					<thead class="table-light">
						<tr>
							<th>#</th>
							<th>Nama Akun</th>
							<th>Nomor</th>
							<th>Status</th>
							<th>Webhook</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						${[
							{ id: 1, name: "Customer Support", number: "6281234567890", status: "connected", webhook: "https://example.com/webhook" },
							{ id: 2, name: "Admin Sales", number: "6289876543210", status: "disconnected", webhook: "" }
						].map((acc, i) => `
							<tr>
								<td>${i + 1}</td>
								<td>${acc.name}</td>
								<td>${acc.number}</td>
								<td>
									<span class="badge bg-${acc.status === 'connected' ? 'success' : 'secondary'}">
										${acc.status}
									</span>
								</td>
								<td>
									${acc.webhook || '<em class="text-muted">Belum diatur</em>'}
								</td>
								<td>
									<div class="btn-group btn-group-sm">
										<button class="btn btn-outline-primary" title="Edit" data-action="edit" data-id="${acc.id}">
											<i class="bi bi-pencil"></i>
										</button>
										<button class="btn btn-outline-danger" title="Hapus" data-action="delete" data-id="${acc.id}">
											<i class="bi bi-trash"></i>
										</button>
										<button class="btn btn-outline-success" title="Monitor" data-action="monitor" data-id="${acc.id}">
											<i class="bi bi-graph-up"></i>
										</button>
									</div>
								</td>
							</tr>
						`).join("")}
					</tbody>
				</table>
			</div>
		</div>
		`;
	}


	bot() {
		return `
		<div class="container py-4">
			<h4 class="mb-4">Bot Builder</h4>

			<div class="d-flex justify-content-between mb-3">
				<h5 class="mb-0">Daftar Bot</h5>
				<button class="btn btn-primary btn-sm" id="btnAddBot">+ Tambah Bot</button>
			</div>

			<div class="table-responsive">
				<table class="table table-bordered align-middle">
					<thead class="table-light">
						<tr>
							<th>Nama Bot</th>
							<th>Knowledge Digunakan</th>
							<th>Prompt Awal</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						<!-- Dummy Bot -->
						<tr>
							<td>Bot Customer Care</td>
							<td>knowledge-customer-support</td>
							<td><code>Anda adalah asisten ramah...</code></td>
							<td>
								<button class="btn btn-sm btn-warning me-1">Edit</button>
								<button class="btn btn-sm btn-danger">Hapus</button>
							</td>
						</tr>
						<tr>
							<td>Bot Bantuan Mahasiswa</td>
							<td>knowledge-akademik</td>
							<td><code>Jawablah sebagai dosen pembimbing...</code></td>
							<td>
								<button class="btn btn-sm btn-warning me-1">Edit</button>
								<button class="btn btn-sm btn-danger">Hapus</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- Modal Tambah/Edit Bot -->
			<div class="modal fade" id="botModal" tabindex="-1">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<form id="botForm">
							<div class="modal-header">
								<h5 class="modal-title">Konfigurasi Bot</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
							</div>
							<div class="modal-body">
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
									<label class="form-label">Prompt Awal (Prompt Base)</label>
									<textarea class="form-control" rows="3" name="promptBase" placeholder="Contoh: Anda adalah asisten AI profesional..."></textarea>
								</div>
								<div class="mb-3">
									<label class="form-label">Instruksi Khusus / Perilaku</label>
									<textarea class="form-control" rows="2" name="customBehavior" placeholder="Misalnya: Jawab dengan gaya sopan dan tidak melebih-lebihkan..."></textarea>
								</div>
								<div class="mb-3">
									<label class="form-label">Aktifkan Webhook Output</label>
									<input type="url" class="form-control" name="webhookUrl" placeholder="https://domainmu.com/webhook-bot">
								</div>
							</div>
							<div class="modal-footer">
								<button type="submit" class="btn btn-primary">Simpan</button>
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
							</div>
						</form>
					</div>
				</div>
			</div>

		</div>
		`;
	}


	agent() {
		return `
		<div class="container py-4">
			<h4 class="mb-4">Manajemen Agen</h4>

			<div class="d-flex justify-content-between mb-3">
				<h5 class="mb-0">Daftar Agen</h5>
				<button class="btn btn-primary btn-sm" id="btnAddAgent">+ Tambah Agen</button>
			</div>

			<div class="table-responsive">
				<table class="table table-bordered table-hover align-middle">
					<thead class="table-light">
						<tr>
							<th>Nama Agen</th>
							<th>Model API</th>
							<th>Endpoint</th>
							<th>Payload</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<tbody>
						<!-- Dummy Data Agen -->
						<tr>
							<td>ChatBot Admin</td>
							<td>gpt-4-turbo</td>
							<td>https://api.example.com/chat</td>
							<td>
								<pre class="mb-0">{ "prompt": "...", "max_tokens": 100 }</pre>
							</td>
							<td>
								<button class="btn btn-sm btn-warning me-1">Edit</button>
								<button class="btn btn-sm btn-danger">Hapus</button>
							</td>
						</tr>
						<tr>
							<td>Asisten Respon Cepat</td>
							<td>gemini-pro</td>
							<td>https://api.example.com/respond</td>
							<td>
								<pre class="mb-0">{ "text": "...", "context": "..." }</pre>
							</td>
							<td>
								<button class="btn btn-sm btn-warning me-1">Edit</button>
								<button class="btn btn-sm btn-danger">Hapus</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- Modal Tambah/Edit Agen (Opsional Ditambahkan via JS) -->
			<div id="modalAgentForm"></div>
		</div>
		`;
	}


	knowledge() {
		const data = [
			{
				id: 1,
				title: "Cara Reset Password",
				content: "Langkah-langkah untuk mereset password akun pengguna."
			},
			{
				id: 2,
				title: "Penanganan Akun Terblokir",
				content: "Informasi mengenai proses verifikasi jika akun terblokir."
			},
			{
				id: 3,
				title: "Penanganan Akun Terblokir",
				content: "Informasi mengenai proses verifikasi jika akun terblokir."
			}
		];

		const cards = data.map(item => `
			<div class="col-md-6 mb-3" data-id="${item.id}">
				<div class="card shadow-sm position-relative">
					<div class="card-body">
						<h5 class="card-title">${item.title}</h5>
						<p class="card-text small">${item.content}</p>
						<div class="position-absolute top-0 end-0 p-2">
							<div class="dropdown">
								<button class="btn btn-sm btn-light border" data-bs-toggle="dropdown">
									<i class="bi bi-three-dots-vertical"></i>
								</button>
								<ul class="dropdown-menu dropdown-menu-end">
									<li><a href="#" class="dropdown-item btn-edit-knowledge" data-id="${item.id}">Edit</a></li>
									<li><a href="#" class="dropdown-item btn-delete-knowledge" data-id="${item.id}">Hapus</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		`).join("");

		return `
	<div class="container py-4">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h4 class="mb-0">Knowledge Base</h4>
			<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalKnowledge">
				Tambah Knowledge
			</button>
		</div>

		<div class="row" id="knowledgeList">
			${cards}
		</div>
	</div>

	<!-- Modal Tambah/Edit Knowledge -->
	<div class="modal fade" id="modalKnowledge" tabindex="-1" aria-labelledby="modalKnowledgeLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content shadow">
				<div class="modal-header">
					<h5 class="modal-title" id="modalKnowledgeLabel">Tambah Knowledge</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
				</div>
				<div class="modal-body">
						<input type="hidden" id="knowledgeId">
						<div class="mb-3">
							<label for="knowledgeTitle" class="form-label">Judul</label>
							<input type="text" class="form-control" id="knowledgeTitle" required>
						</div>
						<div class="mb-3">
							<label for="knowledgeContent" class="form-label">Isi</label>
							<textarea class="form-control" id="knowledgeContent" rows="6" required></textarea>
						</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
					<button type="submit" id="formKnowledge" class="btn btn-primary">Simpan</button>
				</div>
			</div>
		</div>
	</div>
		`;
	}




	setting(){
		return `<div>setting</div>`;
	}

	profile(id) {
  return `
  <div class="container py-4" data-user-id="${id}">
    <div class="row mb-4 align-items-center">
      <div class="col-auto">
        <img src="" alt="Foto Profil" class="rounded-circle" width="100" height="100">
      </div>
      <div class="col">
        <h4 class="mb-1">Nama Pengguna</h4>
        <p class="mb-0 text-muted">user@example.com</p>
      </div>
    </div>

    <!-- Statistik Pengguna -->
    <div class="row text-center mb-4">
      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-1">Kontak</h5>
            <p class="card-text fs-4 fw-bold" id="statKontak">0</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-1">Agen</h5>
            <p class="card-text fs-4 fw-bold" id="statAgen">0</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-1">Bot</h5>
            <p class="card-text fs-4 fw-bold" id="statBot">0</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Info Tambahan -->
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h5 class="card-title">Informasi Lainnya</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between">
            <span>Terdaftar sejak</span><span id="statTglDaftar">-</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Status Akun</span><span class="badge bg-success" id="statStatus">Aktif</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Peran</span><span id="statRole">User</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Tombol Aksi -->
    <div class="d-flex justify-content-end">
      <button class="btn btn-outline-primary" id="editProfileBtn">Edit Profil</button>
    </div>
  </div>
  `;
	}


	pengaturan(id){
		return `
		<div class="container py-4" data-user-id="${id}">
			<h3 class="mb-4">Pengaturan Profil</h3>

			<!-- Foto Profil -->
			<div class="mb-4">
				<label class="form-label">Foto Profil</label>
				<div class="d-flex align-items-center gap-3">
					<img src="" alt="Foto Profil" class="rounded-circle" id="profilePhotoPreview" width="100" height="100">
					<input type="file" class="form-control w-auto" id="profilePhotoInput" accept="image/*">
				</div>
			</div>

			<!-- Data Diri / Akun -->
			<div class="mb-4">
				<label for="fullName" class="form-label">Nama Lengkap</label>
				<input type="text" class="form-control" id="fullName" placeholder="Masukkan nama lengkap">

				<label for="email" class="form-label mt-3">Email</label>
				<input type="email" class="form-control" id="email" placeholder="Masukkan email">

				<label for="username" class="form-label mt-3">Username</label>
				<input type="text" class="form-control" id="username" placeholder="Masukkan username">
			</div>

			<!-- Ganti Password -->
			<div class="mb-4">
				<label for="currentPassword" class="form-label">Password Sekarang</label>
				<input type="password" class="form-control" id="currentPassword" placeholder="********">

				<label for="newPassword" class="form-label mt-3">Password Baru</label>
				<input type="password" class="form-control" id="newPassword" placeholder="********">

				<label for="confirmPassword" class="form-label mt-3">Ulangi Password Baru</label>
				<input type="password" class="form-control" id="confirmPassword" placeholder="********">
			</div>

			<!-- Tombol Aksi -->
			<div class="d-flex justify-content-end gap-2">
				<button type="button" class="btn btn-secondary" id="cancelBtn">Batal</button>
				<button type="button" class="btn btn-primary" id="saveBtn">Simpan</button>
			</div>
		</div>
		`;
	}

	api(){
		return `<div>api</div>`;
	}

	billing(){
		return `<div>billing</div>`;
	}

	bantuan(){
		return `<div>bantuan</div>`;
	}

	logout(){
		return `<div>logout</div>`;
	}
}
