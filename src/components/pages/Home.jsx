import React, { Component } from 'react'
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'


export class Home extends Component {
  render() {
    return (
      <section className={styles.home_container}>
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
        <img src={savings} alt="savings svg"></img>
      </section>
    )
  }
}

export default Home
