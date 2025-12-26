"use client";

export default function FormPendingWrapper({ action, className, children }) {
  const handleSubmit = (e) => {
    const btn = e.currentTarget.querySelector("button[type='submit']");
    if (btn) {
      btn.disabled = true;
      btn.innerText = "Pending...";
    }
  };

  return (
    <form
      action={action}
      method="POST"
      className={className}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
