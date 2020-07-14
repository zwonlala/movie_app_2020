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