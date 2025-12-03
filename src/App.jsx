import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>歡迎使用 e-Coop 系統</h1>
      <p>請選擇身份進入系統：</p>

      <div className="btn-group">
        <a className="btn student" href="https://e-coop-stu.github.io/stu/">
          進入學生端（Student）
        </a>

        <a className="btn admin" href="https://e-coop-stu.github.io/coop/">
          進入合作社端（Admin）
        </a>
      </div>
    </div>
  );
}
