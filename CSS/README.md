

점점 자세하게 채워넣을꺼임 아마도...

대충 적혀있으니 모르는건 검색 일단ㅋ

# 1.CSS 기초

## 1-1. 스타일과 스타일 시트

- 내부 스타일 시트
- 외부 스타일 시트
- 인라인 스타일 시트

## 1-2.주요 선택자

- 전체선택자
- 태그
- 클래스(.)
- id(#) 한번만 적용
- 그룹(,)

## 1-3.캐스캐이딩 스타일 시트

1. 스타일 우선순위

   > !important
   >
   > 인라인
   >
   > id
   >
   > class
   >
   > 태그
   >
   > 
   >
   > 나중에 온 소스

   

2. 스타일 상속

## 1-4. CSS3와 CSS 모듈

# 2.텍스트

## 2-1.글꼴 관련 스타일

- font-family - 글꼴 지정 (상속됨)
- @fint-face - 웹폰트 사용하기
- font-size - 글자 크기 조절하기 (px,em)
- font-wiegth - 글자 굵기 지정하기(100~900 400:normal, 700:bold)
- font-variant - 작은 대문자표시하기
- font-style - 글자 스타일 지정하기

## 2-2.텍스트 스타일

- color - 글자 색 지정하기
- text-decoration - 텍스트에 줄 표시하기 없애기
- text-transform - 텍스트 대소문자 변환
- text-shadow - 텍스트에 그림자 효과 추가하기
- white-space - 공백 처리하기
- letter-spacing - 텍스트 간격 조절하기
- word-spacing - 텍스트 간격 조절하기

## 2-3.문단스타일

- direction 속성 - 글자 크기 방향 지정하기
- text-align - 텍스트 정렬하기
- text-justify - 정렬시 공백 조절하기
- text-indent - 텍스트 들여쓰기
- inline-height - 줄 간격 조절하기
- text-overflow - 넘치는 텍스트 표기하기

## 2-4.목록스타일

- list-style-type - 목록과 불릿과 번호 표기하기
- list-style-image - 불릿 대신 이미지 넣기
- list-style-position - 목록에 들여쓰는 효과내기
- list-style - 전체

# 3.색상, 배경

## 3-1. 웹에서 색상

- 16진수 표기법
- rgb와 rgba 표기법
- hsl과 hsla 표기법
- 색상이름 표기법

## 3-2. 배경 색과 배경이미지

- background-color - 배경 색 지정하기
- background-clip - 배경 적용 범위 조절하기
- background-image - 웹 요소에 배경 이미지 넣기
- background-repeat - 배경 이미지 반복 방법 지정하기
- background-size - 배경 이미지 크기 조절하기
- background-position  - 배경 이미지 위치 조정하기
- background-origin - 배경 이미지 배치할 기준 조절
- background-attachment - 배경 이미지 고정하기

## 3-3. 그라데이션

- linear-gradient - 선형 그라데이션
- radial-gradient - 원형 그라데이션
- 그라데이션 반복

# 4.레이아웃

## 4-1.CSS와 박스 모델

- 블록 레벨 요소
- 인라인 레벨 요소
- 박스모델 - 박스형태의 콘텐츠
- width, height 속성 - 컨텐츠 영역의 크기
- display 속성 - 화면 배치 방법 결정하기  (block, inline, inline-block, none)

## 4-2.테두리 관련 속성들

- border-style - 테두리 승타일 지정하기
- border-width - 테두리 두께 지정하기
- border-color - 테두리 색상 지정하기
- border-radius - 박스 모델 둥글게
- box-sizing - 선택한 요소에 그림자 효과 내기

## 4-3. 여백을 조절하는 속성들

- margin 속성 - 요소 주변 여백 설정하기
- padding 속성 - 콘텐츠 영영과 테두리 영영 사이 여백 설정하기

# 5.포지셔닝

## 5-1.CSS포지셔닝과 주요 속성들

- box-sizing - 박스 너비 기준 정하기 (content-box, border-box)
- float 속성 - 왼쪽이나 오른쪽 배치하기
- clear 속성 - float 속성 해제하기
- position 속성 - 배치 방법 지정하기(static, relative, absolute, fixed, top, bottom, left, right)
- visibility - 요소를 보이게 하거나 보이지 않게 하기
- z-index - 요소 쌓는순서(순자가 클수록 위로)

## 5-2.표 스타일

- border-collapse - 테두리 통합 분리하기
- border-spacing - 인접한 셀 테두리 사이거리 지정
- empty-cells - 빈 셀의 표시 여부 지정하기
- width, height - 표 너비와 높이 지정하기
- table-layout - 콘텐츠에 맞게 셀 지정하기
- text-align - 셀 안에서 수평 정렬하기
- vertical-align - 셀안에서 수직 정렬하기



# 6.CSS 선택자

## 6-1.연결 선택자

- 하위 선택자 (div p {}) - 지정한 모든 하위 요소에 스타일 적용하기
- 자식 선택자 (div > p {}) - 자식 요소에만 스타일 적용하기
- 인접 형제 선택자 (h1 + p {}) - 가장 가까운 형제 요소에 스타일 적용하기(첫번째 동생만 선택함)
- 형제 선택자 (h1 ~ p {}) - 형제 요소에 스타일 적용하기 (모든 형제)



## 6-2.속성 선택자

- [속성] 선택자 (a[href] {}) - 지정한 속성에 스타일 적용하기
- [속성=값]선택자 (a[target="_blank"] {}) - 특정 값을 갖는 속성의 스타일 적용하기
- [속성~=값]선택자 ([class~="button"] {}) - 여러 값중 특정 값이 포함된 속성에 스타일 적용하기
- [속성|=값]선택자 (a[title |="JS"] {}) - 특정 값이 포함된 속성에 스타일 적용하기
- [속성^=값] 선택자 () - 특정 값으로 시작하는 속성에 스타일 적용하기
- [속성$=값]선택자 () - 특정 값으로 끝나는 속성에 스타일 적용하기
- [속성*=값]선택자 () - 값의 일부가 일치하는 속성에 스타일 적용하기



## 6-3.가상클래스(:)와 가상요소(::)

- 사용자 동작에 반응하는 가상 클래스
  1. :link 가상 클래스 선택자 - 방문하지 않은 링크에 스타일 적용하기
  2. :visited 가상 클래스 선택자 - 방문한 링크에 스타일 적용하기
  3. :hover 가상 클래스 선택자 - 웹 요소에 마우스 커서 올려 놓을 때 스타일 적용하기
  4. :active 가상 클래스 선택자 - 웹 요소를 활성화 했을 때의 스타일 적용하기
  5. :focus 가상 클래스 선택자 - 웹 요소에 초점이 맞추어 졌을때 스타일 적용하기
- UI요소 상태에 따른 가상 클래스
  1. :enabled 와 :disabled - 요소를 사용할 수 있을 때와 없을 때
  2. :checked - 라디오 박스나 체크박스에서 해당 항목이 선택 됬을 때 스타일 적용하기
- 구조 가상 클래스
  1. :root 가상 클래스 선택자 - 문서 전체에 적용하기
  2. :nth-child(n)와 :nth-last-child(n) - 자식요소의 위치에 따라 스타일 적용하기
  3. :nth-of-type(n)와 :nth-last-of-type(n) - 특정 태그 위치에 스타일 적용하기
  4. :first-child와 :last-child - 첫번째, 마지막 요소에 스타일 적용하기
  5. :first-of-type와 :last-of-type - 형제 관계 요소의 위치에 따라 스타일 적용하기
  6. :only-child, :only-of-type -하나뿐인 자식요소에 스타일 적용하기
- 그 외 가상 클래스
  1. :target 가상 클래스 선택자 - 앵커 목적지에 스타일 적용하기
  2. :not 가상 클래스 선택자 - 특정 요소가 아닐 때 스타일 적용하기
- 가상 요소
  1. ::first-line ::first-letter - 첫번째 줄 첫번째 글자에 스타일 적용하기
  2. ::before ::after 요소 - 내용의 앞,뒤에 콘텐츠 추가하기



# 7.CSS와 애니메이션

## 7-1.변형

- 2차원 변형과 3차원 변형
- transform과 변형 함수

```css
.photo{
    transform: translate(50px, 100px);
}
```

- translate 변형 함수 - 요소 이동시키기
- scale 변형 함수 - 요소 확대/ 축소 시키기
- rotate 변형 함수 - 요소 회전하기
- skew 변형 함수 - 요소를 비틀어 왜곡하기

2차원 변형 함수

| 변형 함수         | 설명                                         |
| ----------------- | -------------------------------------------- |
| translate(tx, ty) | 지정한 크키만큼 x축과 y축으로 이동한다.      |
| translateX(tx)    | 지정한 크키만큼 x축으로 이동한다.            |
| translateY(ty)    | 지정한 크키만큼 y축으로 이동한다.            |
| scale(sx, sy)     | 지정한 크키만큼 x축과 y축으로 확대/축소한다. |
| scaleX(sx)        | 지정한 크키만큼 x축으로 확대/축소한다.       |
| scaleY(sy)        | 지정한 크키만큼 y축으로 확대/축소 한다.      |
| rotate(deg)       | 지정한 각도만큼 회전한다.                    |
| skew(ax, ay)      | 지정한 각도만큼 x축과 y축으로 왜곡한다.      |
| skewX(ax)         | 지정한 각도만큼 x축으로 왜곡한다             |
| skewY(ay)         | 지정한 각도만큼 y축으로 왜곡한다.            |

3차원 변형 함수

검색해보자...ㄱㅊ다



## 7-2 변형과 관련된 속성들

- transform-origin 속성 - 변형 기준점 설정하기
- perspective, perspective-origin 속성 - 원금감 표현하기
- transform-style 속성 - 3D 변형 적용하기
- backface-visibility 속성 - 요소의 뒷면 표시하기

## 7-3 트랜지션

트랜지션이란 웹 요소의 스타일 속성이 바뀌는 것!

- transistion-property 속성 - 트랜지션을 적용할 속성 지정하기

기본형) transistion-property : all | none | <속성이름>

| 속성 값     | 설명                                                         |
| ----------- | ------------------------------------------------------------ |
| all         | 기본값이다. 요소의 모든 속성이 트랜지션 대상이 된다.         |
| none        | 트랜지션 동안 아무 속성도 바뀌지 않는다.                     |
| <속성 이름> | 트랜지션 효과를 적용할 속성 이름을 지정한다. 여러개 일경우 쉼표(,)로 구분 |

```css
transistion-property:all;
transistion-property:background;
transistion-property:width,height;
```



- transistion-duration 속성 - 트랜지션 진행 시간 지정하기

기본형) transistion-duration : <시간>



- transistion-timing-function 속성 - 트랜지션 속도 곡선 지정하기

기본형) transistion-timing-function: 

| 속성 값               | 설명                                                     |
| --------------------- | -------------------------------------------------------- |
| linear                | 시작부터 끝까지 똑같은 속도로                            |
| ease                  | 처음 천천 점점 빨라지다가 마지막에 천천히. 기본값        |
| ease-in               | 시작을 느리게                                            |
| ease-out              | 느리게 끝남                                              |
| ease-in-out           | 느리게 시작하고 느리게 끝남                              |
| cubic-bezier(n,n,n,n) | 베지에 함수를 직접 정의해 사용. n에 사용할수있는값은 0~1 |



- transistion-delay 속성 - 지연시간 설정하기

## 7-4 애니메이션

- CSS와 애니메이션

  | 속성                      | 설명                                                         |
  | ------------------------- | ------------------------------------------------------------ |
  | @keyframes                | 애니메이션이 바뀌는 지점을 설정합니다.                       |
  | animation-delay           | 애니메이션 지연 시간을 지정합니다.                           |
  | animation-direction       | 애니메이션 종료 후 처음부터 시작할지, 역방향으로 진행할지 지정함 |
  | animation-duration        | 애니메이션 실행 시간을 설정                                  |
  | animation-fill-mode       | 애니메이션이 종료되었거나 지연되어 애니메이션이 실행되지 않는 상태일 때 요소의 스타일을 지정 |
  | animation-iteration-count | 애니메이션 반복 횟수를 지정                                  |
  | animation-name            | @ keyframes로 설정해 놓은 중간 상태의 이름을 지정            |
  | animation-play-state      | 애니메이션을 멈추거나 다시 시작함                            |
  | animation-function        | 애니메이션의 속도 곡선을 지정함                              |
  | animation                 | animain 하위 속성들을 한꺼번에 묶어 지정함                   |

  





















