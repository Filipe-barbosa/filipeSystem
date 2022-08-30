import React from 'react';
import Styles from './login-styles.scss';
import Spinner from '@/presentation/components/spinner/spinner';

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img src="data:image/png;base64,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" />
        <h1>Filipe Barbosa </h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input
            type="email"
            name="email"
            placeholder="digite seu email"
          ></input>
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="digite sua senha"
          ></input>
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>

      <footer className={Styles.footer} />
    </div>
  );
};
export default Login;
