import React, { useState, } from 'react';
// import { 
//   FiFacebook, FiInstagram, FiAlertCircle, FiYoutube,  
// } from 'react-icons/fi'
// import AccordionContext from 'react-bootstrap/AccordionContext';
// import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';
import { Container, Row, Col, Collapse, CardBody, Card } from 'reactstrap';
 
import logo from '../../Assets/logosetesete.png';
import RN from '../../Assets/Roberto_Nascimento_inteira.png';
import bannerCentral from '../../Assets/oab_central.png';
import banner from '../../Assets/oab_faixa.png';
import oferta from '../../Assets/oferta.png';
import pgto from '../../Assets/pagto.png';
import garantia_oab from '../../Assets/garantia_oab.png';

import Button from '../../Components/Button';

import './styles.css'; 

const OAB: React.FC = () => { 
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const abre_botao = () => setOpen(!open);
  const abre_botao2 = () => setOpen2(!open2);
  const abre_botao3 = () => setOpen3(!open3);
  const abre_botao4 = () => setOpen4(!open4);
  const abre_botao5 = () => setOpen5(!open5);
  const abre_botao6 = () => setOpen6(!open6);

  // useEffect(() => {
  //   if (open === false) {
  //     return
  //   }

  // }, []);

  return (
    <Container> 
      <Row > {/*Header*/}
        <Col className="header">
          <h1 className="header_h1">
            Descubra como um <span className="header_span">EXAMINADOR </span> 
            da banca da <span className="header_span">OAB</span> pode te 
            ajudar a passar na 
          </h1>  
          <h1>
            <span className="header_span">SEGUNDA FASE TRABALHISTA</span>
          </h1>
          <h1 className="header_h1">
            de maneira muito simples e prática
          </h1>
          <h2 className="header_h2">
            (mesmo que você não tenha muito tempo para estudar 
            para a segunda fase)
          </h2>
        </Col> 
      </Row>  
      <Row > {/*video*/}
        <Col className="video">
          <iframe id="Roberto" className="iframe" src="https://www.youtube.com/embed/IdgAwLNy1Cg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </Col>
      </Row> 
      <Row> {/*button*/}
        <Col className="button">
          <a href="#oferta"> 
          <Button id="button_in" type="submit">  
            Quero ser APROVADO na OAB!  
          </Button>
          </a>
        </Col>
      </Row>
      <Row xs="1" sm="2" md="4"> {/*Bio*/}
        <Col className="fotorn" xs={12} sm={4} md={4}>
          <img className="fotorn_img" src={RN} alt="Roberto_Nascimento"/>
        </Col>
        <Col className="Bio" xs={12} sm={8} md={8}>
          <h1 className="Bio_h1">Olá, sou Roberto Nascimento</h1>
          <h1 className="Bio_h1_red">Examinador Licenciado OAB</h1>
          <span className="Bio_span">
            Minha missão é <strong>ajudar alunos que estão prestando a prova 
            OAB</strong> a <span className="span_red">conquistar a tão sonhada carteirinha vermelha</span>. Meu curso 
            é voltado para a Segunda Fase na Área Trabalhista.
          </span>
          <h2 className="Bio_h1">
            Como eu faço isso?
          </h2>
          <span className="Bio_span">
            Em minha jornada já <span className="span_red">ajudei mais de 2 mil alunos</span>, <span className="span_red">com índice 
            de aprovação de 80%</span>. 
            Por muitos anos fiz parte da <strong>banca examinadora do exame da OAB</strong>. 
            Devido ao meu curso preparatório para alunos que prestam a prova 
            da OAB, estou licenciado do meu cargo de examinador.
          </span>
          <h2 className="Bio_h1">
            Segue um pouco do meu currículo:
          </h2> 
          <span className="Bio_span">
            Mestre em Direito Coletivo e 
            Cidadania pela Universidade de Ribeirão Preto; Professor de 
            Cursos Preparatórios e Carreiras Jurídicas; Professor Convidado 
            de Pós Graduação da FAAP (Fundação Armando Alvares Penteado) em 
            Direito e Processo do Trabalho e pela ESD (Escola Superior de 
            Direito) Professor Convidado no Curso de Graduação da USP 
            (Universidade de São Paulo) e do ESA (Escola Superior da 
            Advocacia); Palestrante e Autor de Artigos Trabalhistas; 
            Ex-Diretor da OAB/Ribeirão Preto e da AARP (Associação dos 
            Advogados de Ribeirão Preto); Membro da Comissão Ética e 
            Disciplina da OAB/RP; <span className="span_red">Membro da Banca Examinadora do Exame 
            de Ordem da OAB/RP</span> e colunista do blog Advogado Mestre.
          </span>
        </Col>
      </Row>
      <Row> {/*Banner faixa direciona p plano de compra*/}
        <Col className="bannerCentral" >
          <img className="bannerCentral_img"src={bannerCentral} alt=""/>
          {/* <a href=""></a> */}
        </Col>
      </Row>
      <Row> {/*button*/}
        <Col className="button">
          <a href="#oferta">   
            <Button id="button_in" type="submit">
              Quero começar Agora!
            </Button>
          </a>
        </Col>
      </Row>
      <Row > {/*Aulas h1*/}
        <Col className="aulas_titulo">
          <h1 className="aulas_h1">O que você vai <span className="aulas_span">aprender</span> nesse Curso - 100% Online </h1>  
        </Col> 
      </Row>  
      <Row className="aulas"> {/*Aulas 1*/}
        <Col className="aulas_titulo" xs="12" sm="6" md="6" >MÓDULO I</Col>
        <Col className="aulas_descricao" xs="12" sm="6" md="6">
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 1:
            </h1>
            <span className="aulas_descricao_span">
              Introdução ao Curso
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 2:
            </h1>
            <span className="aulas_descricao_span">
              Verbas Rescisórias
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 3:
            </h1>
            <span className="aulas_descricao_span">
              Reclamação Trabalhista
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Extra
            </h1>
            <span className="aulas_descricao_span">
              Modelos de Reclamações
            </span>
          </div>
        </Col>
      </Row>
      <Row className="aulas_par"> {/*Aulas 2*/}
        <Col className="aulas_descricao_par" xs={{size: 12, order: 1}} sm={{size: 6}} md="6">
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Aula 1:
            </h1>
            <span className="aulas_descricao_span_par">
             Contestação
            </span>
          </div>
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Extra
            </h1>
            <span className="aulas_descricao_span_par">
            Modelo de Contestação
            </span>
          </div>
        </Col>
        <Col className="aulas_titulo_par" xs="12" sm={{size: 6, order: 1}} md="6" >MÓDULO II</Col>
      </Row>
      <Row className="aulas"> {/*Aulas 3*/}
        <Col className="aulas_titulo" xs="12" sm="6" md="6" >MÓDULO III</Col>
        <Col className="aulas_descricao" xs="12" sm="6" md="6">
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 1:
            </h1>
            <span className="aulas_descricao_span">
              Razões Finais
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Extra:
            </h1>
            <span className="aulas_descricao_span">
              Modelo de Razões Finais
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 2:
            </h1>
            <span className="aulas_descricao_span">
              Embargos de Declaração
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Extra
            </h1>
            <span className="aulas_descricao_span">
              Modelo de Embargos
            </span>
          </div>
        </Col>
      </Row>
      <Row className="aulas_par"> {/*Aulas 4*/}
        <Col className="aulas_descricao_par" xs={{size: 12, order: 1}} sm={{size: 6}} md="6">
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Aula 1:
            </h1>
            <span className="aulas_descricao_span_par">
              Recurso Ordinário 
            </span>
          </div>
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Aula 2: 
            </h1>
            <span className="aulas_descricao_span_par">
              Recurso Adesivo
            </span>
          </div>
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Aula 3: 
            </h1>
            <span className="aulas_descricao_span_par">
              Recurso de Revista
            </span>
          </div>
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Aula 4: 
            </h1>
            <span className="aulas_descricao_span_par">
              Contrarrazões
            </span>
          </div>
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Extra: 
            </h1>
            <span className="aulas_descricao_span_par">
              Modelos de Recursos
            </span>
          </div>
        </Col>
        <Col className="aulas_titulo_par" xs="12" sm={{size: 6, order: 1}} md="6" >MÓDULO IV</Col>
      </Row>
      <Row className="aulas"> {/*Aulas 5*/}
        <Col className="aulas_titulo" xs="12" sm="6" md="6" >MÓDULO V</Col>
        <Col className="aulas_descricao" xs="12" sm="6" md="6">
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 1:
            </h1>
            <span className="aulas_descricao_span">
              Agravo de Instrumento
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 2:
            </h1>
            <span className="aulas_descricao_span">
              Agravo Regimental
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Extra:
            </h1>
            <span className="aulas_descricao_span">
              Modelos de Agravos
            </span>
          </div>
        </Col>
      </Row>
      <Row className="aulas_par"> {/*Aulas 6*/}
        <Col className="aulas_descricao_par" xs={{size: 12, order: 1}} sm={{size: 6}} md="6">
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Aula 1A:
            </h1>
            <span className="aulas_descricao_span_par">
              Embargos à Execução 
            </span>
          </div>
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Aula 1B: 
            </h1>
            <span className="aulas_descricao_span_par">
              Impugnação à sentença de liquidação
            </span>
          </div>
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Aula 3: 
            </h1>
            <span className="aulas_descricao_span_par">
              Agravo de Petição
            </span>
          </div>
          <div className="aulas_descricao_div_par">
            <h1 className="aulas_descricao_h1_par">
              Extra: 
            </h1>
            <span className="aulas_descricao_span_par">
              Modelos de Apoio
            </span>
          </div>
        </Col>
        <Col className="aulas_titulo_par" xs="12" sm={{size: 6, order: 1}} md="6" >MÓDULO VI</Col>
      </Row>
      <Row className="aulas"> {/*Aulas 7*/}
        <Col className="aulas_titulo" xs="12" sm="6" md="6" >MÓDULO VII</Col>
        <Col className="aulas_descricao" xs="12" sm="6" md="6">
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 1:
            </h1>
            <span className="aulas_descricao_span">
              Mandado de Segurança
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 2:
            </h1>
            <span className="aulas_descricao_span">
              Ação Rescisória
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 3:
            </h1>
            <span className="aulas_descricao_span">
              Inquérito Judicial
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 4:
            </h1>
            <span className="aulas_descricao_span">
              Embargos de Terceiros
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 5:
            </h1>
            <span className="aulas_descricao_span">
              Embargos no TST
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Aula 6:
            </h1>
            <span className="aulas_descricao_span">
              Ação de Consignação em Pagamento
            </span>
          </div>
          <div className="aulas_descricao_div">
            <h1 className="aulas_descricao_h1">
              Extra:
            </h1>
            <span className="aulas_descricao_span">
              Modelos de Apoio
            </span>
          </div>
        </Col>
      </Row>
      <Row className="aulas_par"> {/*Aulas Bonus*/}
        <Col className="aulas_descricao_par" xs={{size: 12, order: 1}} sm={{size: 6}} md="6">
          <div className="aulas_descricao_div_par">
            <span className="aulas_descricao_span_par">
              Webinar ao Vivo na semana antes da Prova, para Revisão e Dúvidas dos Alunos  
            </span>
          </div>
        </Col>
        <Col className="aulas_titulo_par" xs="12" sm={{size: 6, order: 1}} md="6" >Bonus Especial</Col>
      </Row>
      <Row> {/*button*/}
        <Col className="button">
          <a href="#oferta">
            <Button id="button_in" type="submit">
              Quero garantir minha vaga!
            </Button>
          </a>
        </Col>
      </Row>
      <Row className="depoimentos_titulo"> {/*Depoimentos titulo*/}
        <Col>
          <h1 className="depoimentos_titulo">
            <span className="depoimentos_span">Depoimentos</span> de Alunos 
            sobre o Curso
          </h1>
        </Col>
      </Row>
      <Row className="depoimentos_row" > {/*Depoimentos xs="1" sm="2" md="4"*/}
        <Col className="depoimentos" xs="12" md="6" lg="6">
          <h1 className="depo_h1">
            Péricles
          </h1>
          <span className="depo_span">
            "Recomento muito, é um curso extremamente completo"
          </span>
          <iframe 
            className="depo_iframe" 
            width="340" height="200"
            src="https://www.youtube.com/embed/U7be0z3eXgQ" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </Col>
        <Col className="depoimentos" xs="12" md="6" lg="6">
          <h1 className="depo_h1">
            Ana Paula
          </h1>
          <span className="depo_span">
            "Acredito que foi essencial para a minha aprovação"
          </span>
          <iframe 
            className="depo_iframe" 
            width="340" height="200"
            src="https://www.youtube.com/embed/dytPedAJpqE" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </Col>
        <Col className="depoimentos" xs="12" md="6" lg="6">
          <h1 className="depo_h1">
            Ana Claudia
          </h1>
          <span className="depo_span"> 
            "Um curso bem completo e esclarecedor"
          </span>
          <iframe 
            className="depo_iframe" 
            width="340" height="200"
            src="https://www.youtube.com/embed/9ZJZBCqgnjA" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </Col>
      </Row>
      <Row xs="12" sm="12" md="12"> {/*Banner faixa*/}
        <Col className="bannerFaixa">
          <img className="bannerFaixa_img"src={banner} alt=""/>
          {/* <a href=""></a> */}
        </Col>
      </Row>
      <Row > {/*Oferta*/}
        <Col className="oferta_texto" xs="12" sm="12" md="12">
          <h1 className="oferta_texto_h1">
            <a id="oferta">
            Oferta de Lançamento
            </a>
          </h1>
          <span className="oferta_texto_span">
            Aproveite nossa Oferta por tempo Limitado.
          </span>
        </Col>
        <Col className="oferta" xs="12" sm="12" md="12">
          <img className="oferta_img" src={oferta} alt=""/>
        </Col>
      </Row>
      <Row> {/*button*/}
        <Col className="button">
          <a href="https://pay.hotmart.com/N9875804F?checkoutMode=10&bid=1595336323047" target='_blank'>
            <Button id="button_in" type="submit">
              Adquirir o Curso
            </Button>
          </a>
        </Col>
      </Row>
      <Row className="Formas_pagto" xs="2"> {/*Formas pagto*/}
        <Col className="pagto_" xs="12" sm="6" md="6">
          <img className="pagto_img" src={pgto} alt="Formas de Pagamento"/>
        </Col>
        <Col className="pagto" xs="12" sm="6" md="6">
          <h1>INICIO <span className="pagto_span">IMEDIATO</span>!</h1>
          <h1>ACESSO VÁLIDO POR <span className="pagto_span">6 MESES</span></h1>
          <h1>PAGAMENTO TOTALMENTE <span className="pagto_span">SEGURO!</span></h1>
        </Col>
      </Row>
      <Row className="garantia"> {/*Garantia*/}
        <Col className="garantia" xs="12" sm="12" md="12">
          <h1 className="garantia_h1">Garantia de <span className="pagto_span">Satisfação 100%</span></h1>
        </Col>
        <Col className="garantia_img" xs="12" sm="12" md="12">
          <img src={garantia_oab} alt=""/>
        </Col>
        <Col className="garantia_span" xs="12" sm="12" md="6">
          <span>
            Este curso foi desenvolvido com o conhecimento de <strong>mais 
              de 15 anos de experiência</strong>. Tenho certeza que nosso 
              conteúdo será valioso para você.
            </span>
        </Col>
        <Col className="garantia_span" xs="12" sm="12" md="6">
          <span>
            Caso não esteja satisfeito, você pode pedir seu dinheiro de 
            volta , de forma integral, em até 7 dias.
          </span>
        </Col>
      </Row>
      <Row> {/*Dúvidas*/}
        <Col xs="12" sm="12" md="12">
          <h1 className="duvidas_h1">DÚVIDAS FREQUENTES:</h1>
        </Col>
        <Col xs="12" sm="12" md="12">
          <button  
            onClick={abre_botao} 
            className="duvidas_button">
            O que é o curso OAB Segunda Fase Trabalhista?
          </button>
          <Collapse aria-controls="one" aria-expanded={true} isOpen={open}>
            <Card>
              <CardBody id="one" className="duvidas_button">
                Este produto é um CURSO 100% ONLINE, que tem como objetivo ajudar os candidatos a passar no exame da Ordem do Advogados do Brasil, na segunda fase da especialidade “Trabalhista”. 
                Neste curso ministrado por um examinador licenciado da OAB, contém vídeos aulas explicativas com os temas e matérias que fazem parte do conteúdo cobrado pelos avaliadores do exame, além de muitas dicas fundamentais para auxiliar. Além disso, o curso terá material gráfico (PDF) sobre os temas ensinados nas vídeo aulas.
              </CardBody>
            </Card>
          </Collapse>
        </Col>
        <Col xs="12" sm="12" md="12">
          <button  
              onClick={abre_botao2} 
              className="duvidas_button">
              O curso OAB Segunda Fase Trabalhista tem suporte?
            </button>
            <Collapse isOpen={open2}>
              <Card> 
                <CardBody className="duvidas_button">
                  Sim, possuímos suporte ONLINE através de nossas redes sociais ou pelo e-mail contato@oabsegundafase-trabalhista.com.br.
                  Também temos um grupo no Facebook para alunos, dedicado apenas para dúvidas técnicas sobre a ferramenta.
                  Nosso suporte é exclusivo para dúvidas relacionadas à parte técnica do nosso curso OAB Segunda Fase Trabalhista.
                </CardBody>
              </Card>
            </Collapse>
          {/* <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card>
          <Accordion.Collapse eventKey="0">
            <CardBody>Hello! I'm the body</CardBody>
          </Accordion.Collapse> */}
        </Col> 
        <Col xs="12" sm="12" md="12">
          <button  
            onClick={abre_botao3} 
            className="duvidas_button">
            O Curso OAB Segunda Fase Trabalhista é confiável?
          </button>
          <Collapse isOpen={open3}>
            <Card> 
              <CardBody className="duvidas_button">
                Fique tranquilo! Todos os nossos cursos, seguem os conceitos e diretrizes globais de segurança e garantia de qualidade.
                Suas informações pessoais são criptografadas e utilizadas EXCLUSIVAMENTE para este curso adquirido.  
              </CardBody>
            </Card>
          </Collapse>
        </Col>
        <Col xs="12" sm="12" md="12">
          <button  
            onClick={abre_botao4} 
            className="duvidas_button">
            Quanto tempo eu tenho de acesso ao curso?
          </button>
          <Collapse isOpen={open4}>
            <Card> 
              <CardBody className="duvidas_button">
                Após a compra do curso completo da OAB Segunda Fase Trabalhista, você terá acesso ao conteúdo em nossa plataforma por 06 meses após a liberação do último módulo do curso, visto que pode haver mudanças na lei e no edital do concurso.
              </CardBody>
            </Card>
          </Collapse>
        </Col>
        <Col xs="12" sm="12" md="12">
          <button  
            onClick={abre_botao5} 
            className="duvidas_button">
            O curso OAB Segunda Fase Trabalhista possui garantia?
          </button>
          <Collapse isOpen={open5}>
            <Card> 
              <CardBody className="duvidas_button">
                Sim, queremos total transparência e sua satisfação completa. No curso possui garantia de 07 dias após a compra.
                Se você comprou e não gostou, não importa o motivo, nós devolvemos o seu dinheiro.
                Obs.: Você tem até 07 dias após a sua compra para solicitar o seu dinheiro de volta.
              </CardBody>
            </Card>
          </Collapse>
        </Col>
        <Col xs="12" sm="12" md="12">
          <button  
            onClick={abre_botao6} 
            className="duvidas_button">
            Você tem outras dúvidas?
          </button>
          <Collapse isOpen={open6}>
            <Card> 
              <CardBody className="duvidas_button">
                Você tem outras dúvidas e não encontrou aqui a resposta?
                Fique tranquilo! Envie-nos sua dúvida para o e-mail contato@oabsegundafase-trabalhista.com.br que ficaremos felizes em respondê-los o mais breve possível.  
              </CardBody>
            </Card>
          </Collapse>
        </Col>
      </Row>
      <Row> {/*button*/}
        <Col className="button">
          <a href="#oferta">  
            <Button id="button_in" type="submit">
              Quero aprender com um examinador da OAB!
            </Button>
          </a>
        </Col>
      </Row>
      <Row xs="12" sm="12" md="12"> {/*Banner faixa*/}
        <Col className="bannerFaixa">
          <img className="bannerFaixa_img"src={banner} alt=""/>
          {/* <a href=""></a> */}
        </Col>
      </Row>
      <Row > {/*Footer - col={6} sm={3} md={3} lg={3}*/}
        {/* <Col className="icone">
          <Link className="icone_a" to='https://www.instagram.com/77digitalmarketing/' target='_blank'>
            <FiInstagram />
            <strong className="icone_strong">Instagram</strong>
          </Link>
          <Link className="icone_a" to='https://www.youtube.com/channel/UCXj9MWsB3IN1Cl5rloOKjYg' target='_blank'>
            <span><FiYoutube /></span>
            <strong className="icone_strong">Youtube</strong>
          </Link>
        </Col> */}
        <Col className="setesete">
          <div>
            <a href='https://77digitalmarketing.com/' target='_blank'>
              <img className="setesete_img" src={logo} alt="logo sete sete"/>
            </a>
            <h1>Copyright © 2020 - Criado e Desenvolvido por 77 Digital Marketing</h1>
          </div>
        </Col>
        {/* <Col className="icone">
          <Link className="icone_a" to='https://open.spotify.com/show/3KDFyeYOq2qAmmtIUHRluQ?si=ydGcPiAuQrSpMe3Pz2R31A' target='_blank'>
            <span><FiAlertCircle /></span>
            <strong className="icone_strong">Spotify</strong>
          </Link>
          <Link className="icone_a" to='https://www.facebook.com/77digitalmarketing/?ref=br_rs' target='_blank'>
            <span><FiFacebook /></span>
            <strong className="icone_strong">Facebook</strong>
          </Link>
        </Col> */}
      </Row>
    </Container>
  )
}

export default OAB;