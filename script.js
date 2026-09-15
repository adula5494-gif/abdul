// Script sederhana untuk halaman portofolio ini.
// Bagian bawah berisi contoh koneksi ke Supabase untuk form kontak,
// tapi baru aktif kalau kamu mengisi SUPABASE_URL dan SUPABASE_ANON_KEY.

const SUPABASE_URL = "https://jixhmqmsxpxqlomcfznx.supabase.co"
const SUPABASE_ANON_KEY = "sb_publishable_5EwM2ikxnKMx3_zYYx4nmA_2zGgOfm9"

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      status.textContent =
        "Supabase belum dihubungkan. Isi SUPABASE_URL dan SUPABASE_ANON_KEY di script.js dulu.";
      return;
    }

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    status.textContent = "Mengirim...";

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        status.textContent = "Terkirim, terima kasih!";
        form.reset();
      } else {
        const err = await res.text();
        status.textContent = "Gagal mengirim: " + err;
      }
    } catch (err) {
      status.textContent = "Terjadi kesalahan jaringan.";
    }
  });
}
