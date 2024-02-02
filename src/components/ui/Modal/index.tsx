import { ModalProps } from "@/services/data";
import styles from "./Modal.module.css";

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  newTaskName,
  setNewTaskName,
  isDeleteTaskModal,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {isDeleteTaskModal ? (
          <>
            <h2 className={styles.newTaskTitle}>Deletar tarefa</h2>
            <p className={styles.description}>Você tem certeza que deseja deletar esta tarefa?</p>
            <div className={styles.modalButtons}>
              <button onClick={onClose} className={styles.buttonToCloseModal}>
                Cancelar
              </button>
              <button
                onClick={onSubmit}
                className={`${styles.buttonToCloseModal} ${styles.buttonToDeleteTask}`}
              >
                Deletar
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.newTaskTitle}>Nova tarefa</h2>
            <div className={styles.labelAndInputTaskName}>
              <label htmlFor="taskName" className={styles.inputLabel}>
                Título
              </label>
              <input
                type="text"
                id="taskName"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="Digite"
                className={styles.inputTaskName}
              />
            </div>
            <div className={styles.modalButtons}>
              <button onClick={onClose} className={styles.buttonToCloseModal}>
                Cancelar
              </button>
              <button
                onClick={onSubmit}
                className={`${styles.buttonToCloseModal} ${styles.buttonToAddNewTask}`}
              >
                Adicionar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
