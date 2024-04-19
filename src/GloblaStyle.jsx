import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Kumbh+Sans:wght@100..900&display=swap");

:root {
  --th-c-1: #004f51;
  --th-c-2: #ffb400;
  --th-c-3: #ebefe9;
  --th-c-4: #000;
  --th-c-5: #fff;
  --th-fs-1: 40px;
  --th-fs-4: 32px;
  --th-fs-2: 24px;
  --th-fs-3: 18px;
  --th-font-1: "Kumbh Sans", sans-serif;
  --th-font-2: "Inter", sans-serif;
}

/* html {
    font-size: 62.5%;
}

body {
    color: #222;
    font-size: 1.6rem;
} */
* {
  user-select: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--th-c-1);
  font-family: var(--th-font-1);
  font-weight: 700;
  line-height: 120%;
}

h1 {
  font-size: var(--th-fs-1);
  line-height: 150%;
  letter-spacing: 8px;
  text-transform: uppercase;
}

h2 {
  font-size: var(--th-fs-2);
}

h3 {
  font-size: var(--th-fs-3);
}

p {
  font-family: var(--th-font-1);
  font-size: var(--th-fs-3);
  font-weight: 400;
  line-height: 160%;
}

a {
  font-family: var(--th-font-1);
  font-size: var(--th-fs-3);
  font-weight: 400;
  line-height: 122%;
  text-decoration: none;
}

.th-btn {
  padding: 10px 40px;
  font-size: var(--th-fs-3);
  color: #fff;
  font-family: var(--th-font-1);
  font-size: var(--th-fs-3);
  border: 2px solid transparent;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 0.9px;
  text-align: center;
  transition: all .5s;
}

.th-btn-1 {
  border: 2px solid var(--th-c-5);
  font-weight: 300;
  background-color: transparent;
  color: var(--th-c-5);
}

.th-btn-1:hover {
  background-color: var(--th-c-1);
  border: 2px solid var(--th-c-1);
}

.th-btn-2 {
  background-color: #ffc333;
  color: var(--th-c-1);
}

.th-btn-2:hover {
  background-color: var(--th-c-2);
  border: 2px solid #b37e00;
}

.th-btn-3 {
  background-color: #337274;
  color: var(--th-c-2);
}

.th-btn-3:hover {
  background-color: var(--th-c-1);
  border: 2px solid #002f31;
}

/* 
Scroll Bar style start
*/

::-webkit-scrollbar {
  /* width */
  width: 6px;
}

::-webkit-scrollbar-track {
  /* Track */
  background-color: var(--th-c-4);
}

::-webkit-scrollbar-thumb {
  background-color: var(--th-c-1);
  border-radius: 20px;
}

.row {
  padding: 0px !important;
}

/* Scroll Bar style Section End */
`;