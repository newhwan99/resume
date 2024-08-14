import React from 'react';
import './App.css';
import profileImage from './profileImage.png'; // 이미지 파일 경로

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="header-text">
          <h1>안녕하세요, 저는 박유환입니다.</h1>
          <p>자본시장에서 주니어 DevOps 개발자로 일하고 있으며 아키텍처 설계와 데이터 파이프라인을 구축하는 것을 좋아합니다. 긍정적인 마인드와 열려있는 자세가 가장 중요한 개발자의 덕목이라고 생각합니다. 성장하기 위해 다양한 시도를 해보고, 주도적으로 업무 하고자 합니다.</p>
        </div>
      </div>

      <h2>Work Experience.</h2>
      <div className="experience-section">
        <div className="experience-title">
          <div className="experience-company">
            <h3>에프앤가이드.</h3>
            <p>DevOps Engineer<br/>2023.01 - 현재</p>
          </div>
          <div className="project">
            <h4>클라우드 네이티브 환경 구축.</h4>
            <p>2024.05 - 현재</p>
            <h4>Description.</h4>
            <p>클라우드 기반의 인프라를 구축하기 위해 Kubernetes를 구축하고 관리하고 있습니다.</p>
            <h4>Contribution.</h4>
            <ul>
              <li>Kubernetes 클러스터 구축 및 노드 관리</li>
              <li>CI/CD 파이프라인 구축</li>
              <li>기존 서비스 Kubernetes 환경으로 이전</li>
            </ul>
            <h4>Tech Stack.</h4>
            <p>Kubernetes, Helm, GitLab CI/CD, SonarQube, ArgoCD</p>
          </div>
        </div>

        <div className="experience-title">
          <div className="experience-company">
          </div>
          <div className="project">
            <h4>Elastic Search 기반 검색엔진 Poc.</h4>
            <p>2024.03 - 현재</p>
            <h4>Description.</h4>
            <p><a href="https://fnguide.com" target="_blank" rel="noopener noreferrer" class="no-underline">fnguide.com</a>에서 사용되는 리포트 검색엔진을 대체하고 내재화하기 위해 Elastic Search 기반의 Poc을 진행하고 있습니다.</p>
            <h4>Contribution.</h4>
            <ul>
              <li>PDF 파싱 및 색인 파이프라인 구축</li>
              <li>Analyzer 및 Index 설정</li>
              <li>검색 최적화</li>
            </ul>
            <h4>Tech Stack.</h4>
            <p>Elastic Search, Kibana, Kafka, Python</p>
          </div>
        </div>

        <div className="experience-title">
          <div className="experience-company">
          </div>
          <div className="project">
            <h4>배치 스케줄링 서버 구축.</h4>
            <p>2024.03 - 현재</p>
            <h4>Description.</h4>
            <p>배치 및 스케줄링을 위한 서버를 구축하고 필요한 스케줄을 생성하고 관리하고 있습니다.</p>
            <h4>Contribution.</h4>
            <ul>
              <li>Airflow 서버 구축</li>
              <li>Airflow DAG 구성 및 유지보수</li>
            </ul>
            <h4>Tech Stack.</h4>
            <p>Airflow, Python</p>
          </div>
        </div>

        <div className="experience-title">
          <div className="experience-company">
          </div>
          <div className="project">
            <h4>스타트업 DB 구축 및 관리.</h4>
            <p>2023.01 - 2024.03</p>
            <h4>Description.</h4>
            <p>웹 서비스를 위한 스타트업 DB를 구축하고 데이터를 수집 및 정제하였습니다.</p>
            <h4>Contribution.</h4>
            <ul>
              <li>스타트업 투자 데이터 수집 및 클린징</li>
              <li>데이터 수집용 어드민 기획</li>
              <li>웹 서비스용 Table 설계</li>
            </ul>
            <h4>Tech Stack.</h4>
            <p>MSSQL, Python</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2>Skills.</h2>
      <div className="skills-section">
        <div className="skill">
          <h4>Communication.</h4>
          <ul>
            <li>적극적으로 의사 표현하는 것을 좋아합니다.</li>
            <li>긍정적인 자세로 커뮤니케이션 하고자 노력합니다.</li>
            <li>의견들이 모여서 더 좋은 결과를 만든다고 생각합니다.</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Kafka.</h4>
          <ul>
            <li>Kafka를 통해 스트리밍 데이터 파이프라인을 구축할 수 있습니다.</li>
            <li>컨테이너 기반으로 Kafka 클러스터 환경을 구축할 수 있습니다.</li>
            <li>컨슈머가 동일한 메시지를 여러 번 받더라도 중복 없이 한 번만 처리하도록 설계할 수 있습니다.</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Airflow.</h4>
          <ul>
            <li>Airflow를 통해 배치 데이터 파이프라인을 구축할 수 있습니다.</li>
            <li>컨테이너 기반으로 Airflow 클러스터 환경을 구축할 수 있습니다.</li>
            <li>Python을 통해 DAG를 작성할 수 있습니다.</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Elastic Search.</h4>
          <ul>
            <li>Analyzer를 설정하고 검색용 Index를 만들 수 있습니다.</li>
            <li>검색 결과 최적화를 진행한 경험이 있습니다.</li>
          </ul>
        </div>
        <div className="skill">
          <h4>DevOps.</h4>
          <ul>
            <li>Rancher를 이용해 쿠버네티스 클러스터를 구축할 수 있습니다.</li>
            <li>GitLab CI, SonarQube, ArgoCD 등을 이용해 CI/CD를 구축한 경험이 있습니다.</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <h2>Others.</h2>
      <div className="others-section">
        <div className="other">
          <h4>상명대학교.</h4>
          <p>경제금융학부, 빅데이터애널리틱스<br/>2018.03 - 2024.02</p>
          <p>경제금융학부에서 미시경제학, 경제통계 등의 과목을 4 / 4.5 성적으로 이수하였고, 빅데이터애널리틱스 전공에서는 파이썬 프로그래밍, 데이터 시각화(Tableau), 데이터베이스 등의 과목을 4.3 / 4.5 의 우수한 성적으로 이수하였습니다.</p>
        </div>
        <div className="other">
          <h4>Blog.</h4>
          <p>2024.01 - 현재</p>
          <p><a href="https://newhwan.tistory.com/" target="_blank" rel="noopener noreferrer" class="no-underline">newhwan</a>이라는 이름으로 블로그를 운영하고 있으며, 새로운 것을 배우면서 기록하고 공유하고 싶은 내용을 비정기적으로 포스팅합니다.</p>
        </div>
      </div>
      <hr></hr>
      <h2>Contact.</h2>
      <div>
        <ul class="contact-list">
          <li>Mail: <a href="mailto:newhwan99@gmail.com" class="no-underline">newhwan99@gmail.com</a></li>
          <li>Blog: <a href="https://newhwan.tistory.com" target="_blank" rel="noopener noreferrer" class="no-underline">newhwan.tistory.com</a></li>
          <li>GitHub: <a href="https://github.com/newhwan99" target="_blank" rel="noopener noreferrer" class="no-underline">github.com/newhwan99</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
