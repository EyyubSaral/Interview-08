import React, { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    const account = accounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (password.length < 6) {
      alert("Şifre kısa");
    } else {
      if (!account) {
        alert(
          "Kullanıcı adınız veya şifreniz doğru değil gibi görünüyor. Bu nedenle sizin için yeni bir hesap oluşturduk. Yeni hesabınızı kullanarak tekrar giriş yapmayı deneyebilirsiniz."
        );
        setAccounts((prev) => [
          ...prev,
          { username: username, password: password },
        ]);

        setPassword(""); // Şifre doğru uzunlukta olduğu için sıfırlanıyor.

        setUsername(""); // Kullanıcı adı da sıfırlanıyor.
      } else {
        alert(`Hoş geldiniz, ${username}!`);
        setPassword("");
        setUsername("");
      }
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid",
        padding: 10,
      }}
      onSubmit={onSubmit}
    >
      <h3>Login</h3>
      <input
        value={username}
        type="text"
        placeholder="Username"
        onChange={(e) => {
          if (e.target.value.length <= 20) {
            setUsername(e.target.value);
          } else {
            alert("İsim 20 karakterden daha uzun olamaz!");
          }
        }}
        className="border border-black my-[5px]"
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => {
          if (e.target.value.length <= 20) {
            setPassword(e.target.value);
          } else {
            alert("Şifre 20 karakterden daha uzun olamaz!");
          }
        }}
        className="border border-black my-[10px]"
      />
      <button
        style={{ alignSelf: "center" }}
        onClick={onSubmit}
        className="bg-gray-200 border border-black py-[1px] px-[5px] font-medium font-san"
      >
        Submit
      </button>
    </form>
  );
};

export default App;
