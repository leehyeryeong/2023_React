import MyComponent from "./MyComponent"; //모듈 불러오기

const App = () =>  {
  return <MyComponent name="React" favoriteNumber={2}>리액트</MyComponent> //하나의 자식 속성 값으로 들어감
};

export default App;