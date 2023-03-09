import styles from "./ProjectForm.module.css"
import Input from "../forms/Input"
import Select from "../forms/Select"
import SubmitBtn from "../forms/SubmitBtn"


function ProjectForm({btnText}) {
    return(
        <form className={styles.form}>
                <Input type="text"
                    text="Nome do Projeto"
                    name="name"
                    placeholder="Insira o nome do projeto" />
            
                <Input type="number"
                    text="Orçamento do Projeto" 
                    name="budget"
                    placeholder="Insira o orçamento total" />

                <Select name="category_id" text="Selecione a Categoria">
                <option disabled>Selecione a Categoria</option> </Select>
            
                <SubmitBtn text={btnText}/>
        </form>
    )
}

export default ProjectForm