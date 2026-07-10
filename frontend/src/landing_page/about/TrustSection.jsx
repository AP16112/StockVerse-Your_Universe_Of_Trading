import "./TrustSection.css";

export default function TrustSection() {
  return (
    <section className="trust-section container py-5">
      <h1 className="trust-title">Trust with confidence</h1>

      <div className="trust-grid">
        <div className="trust-card">
          <h2>Customer‑first always</h2>
          <p>
            StockVerse is a student-built learning webapp inspired by real trading platforms (like Zerodha). It prioritises clean user experience while demonstrating common trading workflows.
          </p>
        </div>

        <div className="trust-card">
          <h2>Demo & learning only</h2>
          <p>
            This project is for education and demo purposes only. It is not affiliated with or endorsed by any brokerage. Do not use it with real funds — it’s intended to explore UI, data flows, and learning scenarios.
          </p>
        </div>
      </div>
    </section>
  );
}
