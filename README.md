# Movie App using React

리엑트에 대해 다시 공부하기 위해 시작하는 노마드 코더의 리액트 기초 강의

- package.json에서   "scripts"에 있는 test와 eject 삭제(∵ 사용하지 않을거임)
- 프로젝트 dir에 있는 yarn.lock 삭제 (∵ 사용하지 않음)
> yarn.lock의 용도
[이 문서에 정리!](https://github.com/zwonlala/TIL/blob/master/200709.md)

## 1.2
delete lines in index.js  
delete logo.svg  
delete serviceWorker.js  
delete index.css  
delete App.test.js  
delete App.css  
+delete setupTest.js  
delete lines in App.js  

IDE에서 변경한 것이 브라우져에서 바로 적용

React는 내가 작성한 요소들을 생성한다(JS로 만들고 HTML에 집어넣는다...?)  
React는 app.js component를 document.getElementByID("root")에 집어넣는다.  

-> Virtual DOM 개념! / 동작 원리!  
(React는 처음부터 HTML을 넣지 않고, application이 로드될 때, 빈 HTML을 로드하고 component에 작성해놨던 HTML을 집어 넣음!) 

-> React가 빠른 이유!


<br><br><br><br>

## 2.0

make potato.js   
insert potato Component inside of App Component.
<br><br>
### Component

-> `HTML`을 반환하는 함수!  

-> 그리고 **index.js**에서. 

```javascript
ReactDOM.render(<App />, document.getElementById("root");
```

와 같이 `component`를 사용해서 `HTML`처럼 작성하려는 경우에 필요

<br>

ex) **App.js**에는 **App() function**이 있고 해당함수는 `HTML`을 리턴한다.



<br><br>

    
`HTML`과 `javascript`와의 조합을. **`jsx`** 라고 부른다!!  
(**`jsx`** 는 `javascript`안의 `HTML`임. `Component`를 만들고 어떻게 사용해야 하는지에 대한 것!)

<br><br>

#### `Component` 만드는 법!

1. ~.js를 만든다. 

가장 위에 
```javascript
import React from "react";
```
 적어준다. 
(-> 이거 안하면 react는 jsx가 있는 `Component`를 사용하는 것을 이해하지 못한다!)

<br>

2. function ~~를 정의한다.  

(이때 ~~는 `Component` 이름으로, 대문자로 시작해야 함!!)

<br>

3. 그리고 return 문을 사용하여 해당 Component의 구조? HTML?을 리턴한다.

<br>

4. 그리고 하단에 가서 
```javascript
export default ~~;
```
를 한다

<br>
<br>

그리고 여기서 만든 결과물 ~~ `Component`를 index.js에 가서 
```javascript
ReactDOM.render(<App />, document.getElementById("root");
```
위 문장에

```javascript
ReactDOM.render(<App /><~~ />, document.getElementById("root");
```
이렇게 써주면 에러가 난다!!   

(∵ react Application은 하나의 `Component`만을 rendering 해야 하기 때문!!)

∴ 새로만든 ~~ `Component`를 App안에 넣어줘야 한다!!

<br><br><br><br>

## 2.1

delete Potato.js file   
add Food Component inside of index.js
<br><br>
### Props

Component에 정보를 보낼 수 있는 방법!!!

**HTML**에서 ```<div class="hello">```와 같이 속성? 값을 주듯이   
내가 정의한 `Component`에 ```<Food name="kimchi" />``` 이렇게 정보를 보낸다.  

(위에서 한 일은 Food `Component`에 kimchi라는 value로 **`Prop`** name을 주었다!!)  

-> Food `Component`에 name이라는 이름의 **`property`** (**`prop`**)를 kimchi라는 value로 준것!

<br>

ex)
```javascript
<Food name="kimchi" something={true} papago=["hello", 1, 2, 3, 4, true] />
```
-> **string**만 보낼 필요가 없고, **boolean**, **array**, **Object** 다 보낼 수 있다.  
그리고 부모 `Component`에서 자식 `Component`로 원하는 많은 **`props`** 를 보낼 수 있다.

<br>

누군가가 Food `Component`로 정보를 보내려고 하면, React는 이 모든 속성을 가져옴
그리고 Food function `Component`로 argument로 그것들을 넣음!!


동적 데이터가 있는 `Component`가 있음   
-> **jsx** + **`props`** 로 모두 재사용할 수 있음!

<br>

react가 fun.cool.sexy 한 이유는 바로 "재사용 가능한 `component`를 만들 수 있다는 점"  
(-> component를 계속해서 반복해서 사용 가능!)

<br><br><br><br>

## 2.2
Fix code index.js using map fuction to show Component dynamically
<br><br>
### how to show Component Dynamically

이전 코드에서는 **index.js**에서 ```<Food favourite="~~~" />``` 이 코드를 복붙해서 원하는 **component**를 보여줌!

But 실제로 돌아가는 코드에서는 서버로부터 받은 정보를 그렇게 일일히 복붙해서 보여줄 수 없음

∴ dynamic하게 보여줘야하는데 이때 **`map`** 이 사용됨!!

[**map**이 뭔가요...?](https://velog.io/@zwonlala/%EB%B0%B0%EC%97%B4-%EB%82%B4%EC%9E%A5%ED%95%A8%EC%88%98-map)

<br><br>

```javascript
function App() {
  return (
    <div >
      {foodILike.map(dish => 
        <Food 
          name={dish.name} 
          picture={dish.image} />)}
    </div>
  );
}
```

와 같이 App component 안에 **`map`** 함수를 사용하여 foodILike 배열에 저장되어 있는 객체들의 정보를 각각 Food component에 넣어 dynamic하게 뿌려준다!!   

<br>

그리고 위의 Food component는

```javascript
function Food({ name, picture }) {
  return (
    <div>
      <h3>I like { name }</h3>
      <img src={picture} alt={name}/>
    </div>
  );
}
```
와 같이 정의하여 props로 전달받은 data를 뿌려준다!!

<br><br><br><br>

## 2.3 & 2.4
Fix Warning at map function
<hr>

Add rating info at FoodILike array   
Add rating info to Food Component      
Install prop-types 
<br><br>
### map 함수 사용시 주의점!

이전 코드에서처럼 **map**을 그냥 사용하면 이런 에러가 난다.


![스크린샷 2020-07-14 오후 4 54 20](https://user-images.githubusercontent.com/13375734/87404950-c7553480-c5f9-11ea-8e43-c84dd9360d1c.jpg)

<br><br>

> react에서 모든 element들은 유일성을 가져야 하는데,   
list내 child로 들어갈때 uniqueness를 잃어버리기 때문에 map 부분을 수정해줘야 한다!!

<br>


```javascript
{
    id: 1, //추가!
    name: "Kimchi",
    image: "...",
    rating: 5.0
  },
//...
```
foodILike 객체 배열의 각 객체에 id를 추가하고

<br>

```javascript
function App() {
  return (
    <div >
      {foodILike.map(dish => 
        <Food 
          key={dish.id}
          name={dish.name} 
          picture={dish.image} />)}
    </div>
  );
}
```
이렇게 App Component의 map 부분을 수정한다!

<br><br>



<hr>
<br><br>

### PropTypes


1. `npm i prop-types` 명령어를 통해 **`prop-types`** 를 설치한다

2.  **`prop-types`** 를 사용할 파일 맨위에 
```javascript
import PropTypes from "prop-types";
```
라고 import 한다

3.  **`prop-types`** 를 사용할 component 아래에 `~~~.propTypes = { ... }` 로 정의하고

4. ...부분에 해당 component에 해당하는 인자에 대한 설정을 한다.

```javascript
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
```

<br><br>

만약 여기에서 실제로 주어지는 타입이 아닌 다른 타입을 명시하면 이렇게 에러가 뜬다!

![스크린샷 2020-07-14 오후 5 23 18](https://user-images.githubusercontent.com/13375734/87404975-cf14d900-c5f9-11ea-857d-f715b4b360de.jpg)

<br><br><br>

[이 문서](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)를 보고 다양한 **`prop-types`** 사용법을 확인하기!!


<br><br><br><br>


## 3.0

delete Food Component and etc.   
convert App Component from function Component to class Component
<br><br>
### Class Component

#### `class component`만드는 법!

1. `class ~~~ extends React.Component {...}`로 선언

```javascript
class ~~~ extends React.Component {
	...
}
```

class ~~~는 `react component`!  
`react component` 안에는 여러가지가 있음(ex: state, ...) 
그걸 상속 받은 것!
  
<br>

2. render() method 생성

function component에서는 return을 사용하여 원하는 컴포넌트를 반환하듯이

class component에서는 `render() method`를 통해 원하는 컴포넌트를 반환함!

`render() method`는 이미 react component에 존재함! (∴ 상속받은 ~~~ class에도 존재!)  

```javascript
class ~~~ extends React.Component {
	render() {
		return <h1>Im a class component</h1>;
	}
}
```

<br><br>

**Function Component 와 Class Component 비교**


**`function Component`** : function이고, 무언가를 return 함. 그리고 screen에 표시됨!

**`class component`** : class이고, react component로부터 상속받아 확장되고, render 메소드가 실행되어 screen에 표시된다    
(react는 자동적으로 모든 class component의 render method를 실행한다)

class component를 사용하는 이유는 class component에. **`state`** 라는 것이 있기 때문!!

<br><br>

### State

**`state`** 는 object이고

component의 data를 넣을 공간이 있고 이 데이터는 변함!
(-> state를 사용하는 이유!!)

<br>

**`state`** 사용 예시

```javascript
class App extends React.Component {
	state = { //이렇게 변하는 data를 state에 넣고!
		count: 0
	}
	
	render() {
		return <h1>Im a class component</h1>;
	}
}
```

<br>

그리고 **`state`** 를 render 안에 넣고 싶으면

```javascript
//...
	render() {
		return <h1>{this.state.count}</h1>;
	}
//...
```
위와 같이 해주면 된다!

우리가 바꾸고 싶은 데이터를 **`state`** 에 넣는다!!


<br><br>

그럼 데이터를 바꾸는 방법은 어떻게 하는가..?

위 예제에서 조금 추가하면

```javascript
class App extends React.Component {
  state = {
    count: 0
  }

  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  }
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
```
이렇게 된다.


+) 이때 위 코드에서 button tag에서 onClick 속성을 추가할때   
```button onClick={this.add()}>Add</button>```  
이렇게 설정하면 함수를 onClick 속성에 연결하는 것이 아니라 함수가 바로 실행된다..!   
버튼을 클릭해도 add 함수 실행안됨...!  


<br><br><br><br>


## 3.1

change add, minus function using setState()
<br><br>

### setState()

만약 class Component 내의 add 함수와 minus 함수를 다음과 같이 고치면 워닝 메시지가 난다.

```javascript
//생략...

  add = () => {
    this.state.count = 1;
  };
  minus = () => {
    this.state.count = -1;
  }

//생략...
```

![스크린샷 2020-07-20 오후 8 03 40](https://user-images.githubusercontent.com/13375734/87933796-d9871500-cac8-11ea-8d38-886e9c3a3767.jpg)

다음과 같은 워닝 메시지가 출력되는데 `"Do not mutate state directly. Use setState()"` 라고 나온다.

그리고 위와 같이 구현한 add, minus 함수는 정상적으로 작동하지 않는다.   
(∵ 위와 같이 direct하게 **state**를 변경시키면 react가 render function을 refresh 하지 않기 때문이다.)

<br>
<br>

즉 우리는 매번 **state**의 상태를 변경할 때, react가 render function을 호출해서 바꿔주길 원하고 있음.


그래서 **`setState()`** 함수를 사용하면 react는 **state**가 변경되었음을 알고, render function을 다시 호출해준다!

그리고 react는 Virtual Dom을 사용하기 때문에 변화가 있는 부분만 업데이트를 한다!   
(그래서 매우 빠르게 변경할 수 있고, 깜빡거리지 않는다)

<br>
<br>

#### setState() 사용한 버젼(Not good..)

```javascript
//생략...

  add = () => {
    this.setState({count: this.state.count + 1 });
  };
  minus = () => {
    this.setState({count: this.state.count - 1 });
  }

//생략...
```

(위의 코드는 좋은 예시는 아님. 이 **state**에 의존적이고?, 몇가지 성능문제가 있을 수 있음!)

<br>
<br>

#### setState() 사용한 버젼(good😎)


그래서 다음과 같이 작성하는게 좀 더 좋은 코드이다!!


```javascript
//생략...

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }

//생략...
```

`this.state.count`를 가져와서 사용하는 대신, `current`를 가져와서 사용!!   
(이런 코드 스타일이 **state**를 set 할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법!!!)

<br>
<br>

- face tattoo~~

> 매 순간 setState()를 호출할때마다, react는 새로운 state와 함께 render function을 호출한다!!!

> #### 매 순간 setState()를 호출할때마다, react는 새로운 state와 함께 render function을 호출한다!!!

> ### 매 순간 setState()를 호출할때마다, react는 새로운 state와 함께 render function을 호출한다!!!


<br><br><br><br>



## 3.2

change nothing
<br><br>

### Component Life Cycle

react class Component는 render 말고도 더 많은 함수들을 가지고 있다.

**`life cycle method`** 를 가지는데, **`life cycle method`** 는 react가 component를 생성하고 없애는 방법!   
(component가 생성 될 때, render() 전에 호출되는 몇 함수와 render() 된 후 호출되는 함수 )

<https://ko.reactjs.org/docs/react-component.html> 이 문서 참고

<br><br>

#### 1. Mounting
(컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입될 때, "태어나는 것")  
[Mounting 공식 문서](https://ko.reactjs.org/docs/react-component.html#mounting)

 호출되는 함수 순서
- constructor()
- ~static getDerivedStateFromProps()~
- **render()**
- **componentDidMount()**

componentDidMount() : 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출

<br><br>

#### 2. Updating
(props 또는 state가 변경되면 갱신이 발생, "그냥 업데이트")  
[Updating 공식 문서](https://ko.reactjs.org/docs/react-component.html#updating)

호출되는 함수 순서(setState()를 호출할 때 마다 발생!)
- ~static getDerivedStateFromProps()~
- ~shouldComponentUpdate()~
- **render()**
- ~getSnapshotBeforeUpdate()~
- **componentDidUpdate()**

<br><br>

#### 3. Unmounting
(컴포넌트가 DOM 상에서 제거될 때, "component가 죽는 것"-페이지를 바꾸거나, state를 사용해 component를 교체,...)  
[Unmounting 공식 문서](https://ko.reactjs.org/docs/react-component.html#unmounting)

호출되는 함수 순서
- **componentWillUnmount**

  
<br><br>

to be continued...

<br><br><br><br>
