import { FileText } from 'lucide-react';
import styles from './Empty.module.css'

const Empty = () => {
    return (
        <div className={styles.content}>
            <FileText size={56} color='#808080'/>
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong><br></br>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    );
}

export default Empty;