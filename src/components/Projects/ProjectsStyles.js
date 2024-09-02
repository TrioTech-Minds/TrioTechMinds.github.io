import styled from 'styled-components';





export const Video = styled.video`
width: 100%;
object-fit: cover;
overflow: hidden;
transition: transform 0.3s ease;
height: 30%;

/* Ensure the video plays in a loop */
loop: true;
autoplay: true;
muted: true;
`;

export const YouTubeEmbed = styled.iframe`
width: 100%;
height: 40%;
object-fit: cover;
transition: transform 0.3s ease;
border: none;
`;

export const GridContainer = styled.section`
display: flex;
padding: 3rem;
gap: 3rem;

`;

export const TempDiv = styled.div`
position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    // bottom: 0;
    height: 40px;
    width: 40px;
    px; /* Adjust the width as needed */
    pointer-events: none; /* Make sure the blur doesn't interfere with scrolling */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px; /* Adjust the size of the arrow */
    color: rgba(0, 0, 0, 0.5); /* Adjust the arrow color */
    align-content:center;
    border-radius: 10000px
  }

  &::before {
    left: -45px;
    background: rgba(255, 255, 255, 1);
    content: '<'; /* Left arrow */
    transform: translateY(-5%);
    pointer-events: auto; 
  }

  &::after {
    right: -45px;;
    background: rgba(255, 255, 255, 1);
    content: '>'; /* Right arrow */
    transform: translateY(5%);
    pointer-events: auto; 
  }

  // /* Show blur and arrows only when there is overflow */
  // &:not(:first-child)::before,
  // &:not(:last-child)::after {
  //   display: block;
  // }

`;
export const ScrollDiv = styled.div`
display: flex;
overflow-x: auto;

`;


export const Img = styled.img`
  width:100%;
  height: 40%;
  object-fit: cover;  
`


export const BlogCard = styled.div`
border-radius: 10px;
box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
text-align: center;
height: 800px;
width: 500px;
transition: transform 0.3s ease-in-out;

&:hover {
  transform: scale(1.05);
  }

`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;
}
`;



export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`