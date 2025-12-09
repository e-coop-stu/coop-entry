import React from "react";
import "./entry.css";

export default function EntryPage() {
  return (
    <div className="entry-root">
      <header className="entry-header">
        <div className="logo-circle">e</div>
        <div className="logo-text">
          <div className="logo-title">e-Coop 線上合作社</div>
          <div className="logo-subtitle">Smart Campus Store Portal</div>
        </div>
      </header>

      <main className="entry-main">
        <section className="entry-intro">
          <h1>選擇您的入口</h1>
          <p>請依身分選擇管理端或學生端系統。</p>
        </section>

        <section className="entry-cards">
          {/* Coop 管理端 */}
          <a
            className="entry-card coop-card"
            href="https://e-coop-stu.github.io/ecoop/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="entry-tag">For Staff</div>
            <h2>Coop 管理端</h2>
            <p>管理庫存、交易紀錄、Face Pay 設定與營收報表。</p>
            <ul>
              <li>📦 商品 / 庫存管理</li>
              <li>🧾 交易紀錄 / 報表</li>
              <li>💳 POS 收銀 / Face Pay</li>
            </ul>
          </a>

          {/* Student 學生端 */}
          <a
            className="entry-card stu-card"
            href="https://e-coop-stu.github.io/stu/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="entry-tag">For Students</div>
            <h2>Student 學生端</h2>
            <p>學生查看餘額、歷史消費，並註冊 / 管理 Face ID。</p>
            <ul>
              <li>👤 Face ID 註冊與綁定</li>
              <li>💰 餘額與儲值紀錄</li>
              <li>🧾 消費明細查詢</li>
            </ul>
          </a>
        </section>
      </main>

      <footer className="entry-footer">
        <span>© {new Date().getFullYear()} e-Coop Smart Store</span>
      </footer>
    </div>
  );
}
