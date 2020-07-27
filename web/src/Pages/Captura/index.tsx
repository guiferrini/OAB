import React, {useRef, useCallback } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import RN from '../../Assets/Roberto_Nascimento_inteira.png';
import logo from '../../Assets/logosetesete.png';
import central from '../../Assets/oab_central.png';
// import faixa from '../../Assets/oab_faixa.png';

// import FormaAC from '../../Components/FormAC/index';
import api from '../../Components/ActiveCampaign/services';
import { ac, AC_Form, account_view } from '../../Components/ActiveCampaign/api';
// import { ac2 } from '../../Services/api';
import './styles.css';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import validationError from '../../Components/Erros/ValidationErrors';

interface SingInFormData {
  name: string;
  email: string;  
}

const Captura: React.FC = () => {
  const formRef = useRef<FormHandles>(null); // pego infos do meu input
  // console.log(formRef);
  

  const handleSubmit = useCallback(async(data: SingInFormData) => {
    try {
      // const response = await api.get('/');
      // console.log(response.data);

      // const vai = await ac2;
      const vai = await account_view;
      const responseii = await ac; 
      // const resp = await AC_Form;
      // console.log(responseii);

      formRef.current?.setErrors({}); //zerando erros
      
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('Email é obrigatório')
          .email('Digite um e-mail válido')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // singIn({
      //     email: data.email,
      //     password: data.password,
      //   });
        
      //   history.push('/UserPage');
      alert('vai p pagina de obrigado');

    } catch (err) {
      // console.log(err)
      const errors = validationError(err)

      formRef.current?.setErrors(errors)
    }

  }, []); 
   
  
  return (
    <Container>
      <Row > {/*Header*/}
        <Col className="cap_header">
          <h1 className="cap_header_h1">Você esta pronto para a 2ª Fase da OAB?</h1>  
          <h2 className="cap_header_h2">Nós temos as 5 principais dicas de um Examinador da Banca da OAB para você...</h2>
        </Col> 
      </Row>
      {/*faixa*/} 
      {/* <Row> 
        <Col className="faixa" xs={12} sm={12} md={12} lg={12}>
          <img className="faixa_img" src={faixa} alt=""/>
        </Col>
      </Row> */}
      <Row className="form_book"> {/*Formulario e infos e-book*/}
        <Col xs={12} sm={12} md={6} lg={6}>
          <Form ref={formRef} className="form" onSubmit={handleSubmit}>
            <Input
              icon={FiUser}
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
            />
            <Input
              icon={FiMail}
              type="text"
              name="email"
              id="email"
              placeholder="EMAIL"
            />
          <h2 className="form_h2"><FiLock className="form_lock"/>Sua informações estão seguras</h2>
          <Button className="form_button" type="submit">Quero Baixar meu E-Book!</Button>
          </Form>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <a id="ebook"></a>
          <h1 className="encontrar_h1">
            O que você vai encontrar em nosso E-book?
          </h1>
          <h2 className="encontrar_h2">
            ✔️ Como se preparar para um dos <strong>Exames mais 
            importantes do país</strong>.
          </h2>
          <h2 className="encontrar_h2">
            ✔️ Dividido em 5 dicas, ensinadas por um <strong>Examinador 
            da Banca</strong>.
          </h2>
          <h2 className="encontrar_h2">
            ✔️ <strong>Conteúdos Freqüentes</strong> e preparativos antes da prova.
          </h2>
          <h2 className="encontrar_h2">
            ✔️ Esteja a um passo mais perto de <strong>conseguir a 
            Carteirinha Vermelha</strong>.
          </h2>
        </Col>
      </Row>
      <Row> {/*Bio e foto*/}
        <Col className="cap_fotorn" xs={12} sm={4} md={4}>
          <img className="cap_fotorn_img" src={RN} alt="Roberto_Nascimento"/>
        </Col>
        <Col className="cap_bio" xs={12} sm={8} md={8}>
          <h1 className="cap_bio_h1">Olá, sou Roberto Nascimento</h1>
          <h1 className="cap_bio_h1_red">Examinador Licenciado OAB</h1>
          <span className="cap_bio_span">
            Advogado, mestre em direito, professor universitário, professor 
            de cursos preparatórios para a OAB trabalhista e <strong>examinador 
            licenciado da banca da OAB</strong>, Roberto Nascimento sempre foi muito 
            admirado por seus alunos. Em seus cursos preparatórios para a 
            OAB trabalhista, já teve <strong>mais de 2.000 alunos</strong> e uma <strong>taxa de 
            aprovação de 80%</strong>, agora trazendo o seu conhecimento para o 
            meio digital.
          </span>
        </Col>
      </Row>
      <Row> {/*Final*/}
        <Col>
          <h1 className="cap_final_h1">
            SAIA NA FRENTE DOS CONCORRENTES E FAÇA AGORA MESMO O DOWNLOAD GRATUITO DO NOSSO E-BOOK 
          </h1>
        </Col>
      </Row>
      <Row> {/*ebook*/}
        <Col>
          <a href="#ebook"> 
          <Button>Quero Baixar meu E-Book GRATUITAMENTE!</Button>
          </a>
        </Col>
      </Row>
      <Row> {/*Banner*/}
        <Col className="faixa" xs={12} sm={12} md={12} lg={12}>
          <img className="faixa_img" src={central} alt=""/>
        </Col>
      </Row>
      <Row> {/*Footer*/}
        <Col className="cap_setesete">
          <div>
            <a href='https://77digitalmarketing.com/' target='_blank'>
              <img className="cap_setesete_img" src={logo} alt="logo sete sete"/>
            </a>
            <h1>Copyright © 2020 - Criado e Desenvolvido por 77 Digital Marketing</h1>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default Captura;