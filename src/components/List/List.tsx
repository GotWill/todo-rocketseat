import { Trash } from 'lucide-react';
import { Task } from '../../types/List';
import styles from './List.module.css'

type ListProps = {
    task: Task;
    onDelete: (id: number) => void;
    onChangeStatus: (id: number) => void;
}

const List = ({ task, onDelete, onChangeStatus }: ListProps) => {


    return (
        <div className={styles.content}>
            <input
                type="checkbox"
                onChange={() => onChangeStatus(task.id)}
                checked={task.status}
            />
            <p>
                {task.content}
            </p>
            <button onClick={() => onDelete(task.id)}>
                <Trash />
            </button>
        </div>
    );
}

export default List;