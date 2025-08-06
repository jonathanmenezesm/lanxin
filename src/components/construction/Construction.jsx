import { useNavigate } from 'react-router-dom';
import styles from "./Construction.module.scss"

function Construction() {
    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate(-1); // Volta para a página anterior
    };

    return (
        <section className={styles.constructionContainer}>
            <img 
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png" 
                alt="Man Technologist Light Skin Tone" 
                width="25" 
                height="25"
            />
            <img 
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Construction.png" 
                alt="Construction Sign" 
                width="50" 
                height="50"
            />
            <p className={styles.constructionText}>
               Esta seção ainda está em construção. Em breve teremos novidades!
            </p>
            <button 
                className={styles.constructionText} 
                style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#0844C4', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
                onClick={handleVoltar}
            >
                Voltar
            </button>
        </section>
        // <h1>Teste</h1>
    )
}
export default Construction