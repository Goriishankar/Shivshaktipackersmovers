"use client";

export default function FormPendingWrapper({ action, className, children }) {
  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload stop

    const form = e.currentTarget;

    // ✅ Terms checkbox check
    const termsCheckbox = form.querySelector(
      "input[type='checkbox'][name='save-for-next']"
    );

    if (termsCheckbox && !termsCheckbox.checked) {
      alert("Please agree to Terms & Conditions before submitting.");
      return; // ❌ stop submit
    }

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
        form.reset(); // ✅ reset after success
      }
    } catch (err) {
      console.error("Form submit failed", err);
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerText = "Get Started Now";
      }
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
