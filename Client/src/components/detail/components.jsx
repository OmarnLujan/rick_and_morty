import styled from "styled-components";




export const Heading = styled.div`
  border-bottom: 4px lightgreen solid;
  padding-bottom: 4px;
  
`;

export const Article = styled.article`
  width: 90%;
  margin: 40px auto 0;
`;

export const Section = styled.section`
  margin-bottom: 40px;
  padding-left: 20px;
`;

export const Body = styled.body`
  height: 100%;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  color: rgb(151, 255, 142);
`;

export const Wrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  border: 4px lightgreen solid;
`;

export const Col = styled.div`
  .card {
    border-bottom: 4px lightgreen solid;
  }

  .card:last-child {
    border-bottom: 0;
  }
`;

export const ColOne = styled(Col)`
  width: 100%;
  max-width: 200px;
  border-right: 4px lightgreen solid;
`;

export const ColTwo = styled(Col)`
  width: 100%;
  max-width: 600px;
`;

export const Card = styled.div`
  padding: 10px;
`;

export const CardTitle = styled.h2`
  margin-top: 0;
  font-weight: 900;
`;

export const CardDetail = styled.h3`
  margin-top: 10;
  font-weight: 700;
  
  text-align:center;
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
`;

export const ScifiBg = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -10;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
    opacity: 0.25;
    z-index: -20;
  }
`;
