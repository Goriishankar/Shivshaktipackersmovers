"use client";

export default function FormPendingWrapper({ action, className, children }) {
  const handleSubmit = async (e) => {
    e.preventDefault(); // 🚫 page redirect stop

    const form = e.currentTarget;
    const btn = form.querySelector("button[type='submit']");

    if (btn) {
      btn.disabled = true;
      btn.innerText = "Pending...";
    }

    try {
      const res = await fetch(action, {
        method: "POST",
        body: new FormData(form),
      });

      const text = await res.text();

      if (text.trim() === "success") {
        form.reset(); // ✅ form reset
      } else {
        console.error("Mail error:", text);
      }
    } catch (err) {
      console.error("Submit failed", err);
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerText = "Submit";
      }
    }
  };

  return (
    <form
      className={className}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
