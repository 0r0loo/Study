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























