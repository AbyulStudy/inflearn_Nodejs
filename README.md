**[Inflearn] Node.js 웹개발로 알아보는 백엔드 자바스크립트의 이해**
--- 
> 강의 링크 : [인프런](https://www.inflearn.com/course/node-js-%EC%9B%B9%EA%B0%9C%EB%B0%9C/dashboard)
> 
> 추가 참고 사이트 : [생활코딩](https://opentutorials.org/course/3370/21424)

**수강 이유**
--- 
***
- 코드스테이츠 팀 프로젝트 진행할때 기능 구현에만 초점을 맞추어 개발을 하다보니 Node.js 백앤드 개발의 기초의 필요성을 느껴 강의를 수강하게 되었습니다.

**부족했던 지식**
--- 
***
## Template Engine

> JSP,ejs를 작성해 본적은 있으나, Template Engine이란 것을 처음 알게 되었습니다.
- 템플릿 양식과 특정 데이터 모델에 따른 입력 자료를 합성하여 결과 문서를 출력하는 소프트웨어(또는 소프트웨어 컴포넌트)를 말합니다.

### Server Side Template Engine


  서버에서 DB 혹은 API에서 가져온 데이터를 미리 정의된 Tempalte에 넣어 HTML을 그려서 클라이언트에 전달해주는 역할을 합니다.
  즉, HTML 코드에서 고정적으로 사용되는 부분은 템플릿으로 만들어두고 생성되는 부분만 템플릿 특정 장송에 끼워넣는 방식으로 동작할 수 있도록 해줍니다.

  ![Untitled](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbkkatE%2FbtqUsdMOZhN%2FnMh5EvwHvD3fR5t9Z2mCz0%2Fimg.png)

  **순서**
  
  1. 서버가 클라이언트의 요청을 받습니다.
  2. 필요한 데이터를 가져옵니다.
  3. 미리 정의된 Template에 해당 데이터를 적절하게 넣습니다.
  4. 서버에서 HTML(데이터가 반영된 Template)를 그립니다.
  5. 해당 HTML을 클라이언트에 전달합니다.


  **종류**
      
  Ex) **JavaScript Template Engine**<br>
    ejs(Embedded JavaScript Templates),  pug(구 jade), Handlebars(Handlebars.js), nunjucks 등 <br>

  Ex) **Java Template Engine**<br>
    Thymeleaf, Freemarker, Groovy, jade4j,Handlebars(Handlebars.java), JSP(Java Server Pages) 등 <br>
***
## 예외 처리
> Use a Middleware! 미들웨어를 사용한 에러 핸들링

추가 참고 사이트 : [sematext 기술블로그](https://sematext.com/blog/node-js-error-handling/)
