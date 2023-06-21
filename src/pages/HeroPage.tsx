import React from "react";
import styled from "styled-components";
import Button from "../components/reUse/Button";
import hero from "../assets/blog-post-single-1.jpeg"
import Vid from "../assets/Demo.mp4"

const HeroPage = () => {

const data:any= [
  {title: 'Discover'}, {title: 'Animation'}, 
  {title: 'Branding'}, {title: 'Illustration'}, 
  {title: 'Mobile'},  {title: 'Print'},  {title: 'Product Design'}, 
  {title: 'Design'}, {title: 'Typography'}, {title: 'Web Design'}
]


  return (
    <div>
      <Container>
        <Top>
{
  data.map((el:any)=>(
<Shape>
{el.title}
</Shape>
  ))
}
        </Top>
        <Bgvid src={Vid} autoPlay loop muted/>
<Back>
<Main>
          <BigText>
            Get Your New Book With Best Price Find Your Book Now
          </BigText>
          <SmallText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta
            sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi
            delectus nostrum sapiente cupiditate.
          </SmallText>
          <SearchHolder>
            <InputHolder>
              <Input placeholder="Keyword" />
            </InputHolder>
            <Line></Line>
            <Select>
              <option value="Category">Category</option>
              <option value="Education">Education</option>
              <option value="Fine Art">Fine Art</option>
              <option value="History">History</option>
            </Select>
            <Line></Line>

            <Select>
              <option value="Writer">Writer</option>
              <option value="Dc Valerian">Dc Valerian</option>
              <option value="Willams Daniel">Willams Daniel</option>
              <option value="Thywill">Thywill </option>
            </Select>
            <Button wid="100px" text="search" />
          </SearchHolder>
        </Main>
</Back>
      </Container>
    </div>
  );
};

export default HeroPage;



const Shape =styled.div`
padding: 10px 15px;
display: flex;
border-radius: 20px;
justify-content: center;
align-items: center;
background-color: black;
opacity: 0.6;
color: white;
cursor: pointer;
transition: all 400ms ;

:hover{
  background-color: white;
  color: black;
  opacity: 1;
}
`

const Top=styled.div`
 width: 1100px;
 top: 120px;
 /* background-color: red; */
position: absolute;
z-index: 1;
display: flex;
justify-content: space-between;
align-items: center;
`

const Bgvid = styled.video`
height: 100%;
width: 100%;
position: absolute;
object-fit: cover;
z-index: -1;
` 

const Line = styled.div`
  height: 20px;
  width: 2px;
  background-color: lightgrey;
`;

const Input = styled.input`
  border: none;
  outline: none;
  color: lightgray;
`;
const Select = styled.select`
  width: 20%;
  height: 80%;
  border: none;
  outline: none;
`;
const InputHolder = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchHolder = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const SmallText = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 1.3;
  margin-bottom: 30px;
  color: lightgray;
`;
const BigText = styled.div`
  font-size: 45px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 1.3;
  margin-bottom: 30px;
  color: white;
`;

const Back = styled.div`
background-color: rgba(0,0,0,0.8);
width: 100%;
height: 100%;
/* backdrop-filter: blur(2px); */
display: flex;
align-items: flex-end;
justify-content: center;
z-index: -1;
/* position: relative; */
/* z-index: 1; */


/* line-height: 60px; */
`
const Main = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  z-index: 2;
  /* background-color: red; */

`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: aquamarine; */
  color: black;
  /* background-image: url(${hero}); */
background-repeat: no-repeat;
background-size:100% ;
background-position: center;
background-size:cover;
`;
