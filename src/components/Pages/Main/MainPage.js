import React, { useState } from 'react';
import { Carousel, Card, CardGroup, Button, Container, Row, Col } from 'react-bootstrap';
import image1 from '../../../img/onboarding/background1.png';
import image2 from '../../../img/onboarding/background2.png';
import image3 from '../../../img/onboarding/background3.png';
import maincard1 from '../../../img/onboarding/main_card1.png';
import maincard2 from '../../../img/onboarding/main_card2.png';
import maincard3 from '../../../img/onboarding/main_card3.jpg';
import maincard4 from '../../../img/onboarding/main_card4.jpg';
import styled from 'styled-components';

const CarouselComp = styled.div`
  .caption {
    padding: 450px;

    h1 {
      font-size: 200%;
    }

    h3 {
      font-size: 300%;
    }
  }

  .container1 {
    background-color: #172d4c;
    color: white;
    height: 300px;

    .lead {
      text-align: center;
      font-weight: 700;
      font-size: 1.5rem;
    }

    .lead-content {
      text-align: center;
      font-size: 1.7rem;
    }

    .col- {
      padding: 70px 50px;
    }
  }

  .container2 {
    padding-top: 80px;
  }
`;

const MainPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselComp>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption className="caption">
            <h1>COMMERCE TREND</h1>
            <h3>신선식품 물류를 선도하는 시스템 구축</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption className="caption">
            <h1>대한민국 NO.1</h1>
            <h3>Cold Chain Platform</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption className="caption">
            <h1>TIMF</h1>
            <h3>Connect Freshness</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div class="container-fluid" className="container1">
        <div class="row jumbotron row-main">
          <div class="container2">
            <p class="lead">대한민국 No.1 Cold-Chain Platform</p>
            <p class="lead-content">
              팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를
              제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를
              위한 설비/역량을 보유하고 있습니다.
            </p>
          </div>
        </div>
      </div>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src={maincard1} />
          <Card.Body>
            <Card.Title>새벽배송</Card.Title>
            <Card.Text>
            팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 
            배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
             <Button variant="light">더 알아보기</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={maincard2} />
          <Card.Body>
            <Card.Title>화물주선</Card.Title>
            <Card.Text>
            화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다. 
            팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="light">더 알아보기</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={maincard3} />
          <Card.Body>
            <Card.Title>풀필먼트</Card.Title>
            <Card.Text>
            풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 서비스입니다.
각 화주사별 요구사항을 매뉴얼화해 관리합니다.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="light">더 알아보기</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={maincard4} />
          <Card.Body>
            <Card.Title>그로서리</Card.Title>
            <Card.Text>
            급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다. 
            기존 물류망을 활용헤 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="light">더 알아보기</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      
      <Container >
        
        <Row className="justify-content-md-center">
         <h1>Connect</h1>
          <Col>

          </Col>
        </Row>
      </Container>


    </CarouselComp>
  );
};

export default MainPage;
