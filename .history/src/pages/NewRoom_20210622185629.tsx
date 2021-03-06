import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom(){
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask"></img>
                    <button className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        <h2>Criar uma nova sala</h2>
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form action="">
                        <input type="text" placeholder="Nome da sala"></input>
                        <Button type="submit">Criar Sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <a href="#">clique aqui</a></p>
                </div>
            </main>
        </div>
    );
}