import React, { useEffect, useState } from "react";
import { Container, LogoImg, UserImg } from "./Styled.jsx"

export default function Nav() {

  return(
    <Container>
        <LogoImg
            alt="Netflix logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
        />
        <UserImg 
            alt="User logged"
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        />
    </Container>
  )
}