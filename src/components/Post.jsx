import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src='https://github.com/Belzebu013.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Eduardo Daniel</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                <time title='17 de Julho às 00:18' dateTime='2024-07-15 00:18'>Publicado à 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Pega esse post maneiro no projetinho de React 🚀. Simples porém bem daooooora.</p>
                <p><a href='#'>https://github.com/Belzebu013/Social_Feed</a></p>
                <p>
                    <a href='#'>#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}