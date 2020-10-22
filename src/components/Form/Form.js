import React from "react";
import styles from "./Form.module.scss";
import Title from "../Title/Title";
import AppContext from "../../context";
import Button from "../Button/Button";

class Form extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>New task you must add</Title>
            <form
              className={styles.form}
              autoComplete="off"
              onSubmit={(e) => context.addItem(e)}
            >
              <div className={styles.formItem}>
                <input
                  type="text"
                  id="title"
                  placeholder=" "
                  className={styles.input}
                  required
                />
                <label htmlFor="title" className={styles.label}>
                  Title
                </label>
                <div className={styles.formItemBar} />
              </div>

              <div className={styles.formItem}>
                <input
                  type="textarea"
                  id="description"
                  placeholder=" "
                  className={styles.textarea}
                  required
                />
                <label htmlFor="description" className={styles.label}>
                  Description
                </label>
                <div className={styles.formItemBar} />
              </div>

              <div className={styles.formItem}>
                <label htmlFor="isImportant" className={styles.checkbox}>
                  <input type="checkbox" id="isImportant" />
                  <div className={styles.checkboxButton} />
                  If important you must choose
                </label>
              </div>

              <div className={styles.formItem}>
                <select
                  id="type"
                  className={styles.select}
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Time select you must
                  </option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              <Button>Use the force</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
