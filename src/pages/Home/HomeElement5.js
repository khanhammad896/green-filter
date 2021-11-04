import React from "react";
import styled from "styled-components";
import gradient from "../../assets/green-gradient-blue2.png";
import youtube from "../../assets/yt.png";

const HomeElement5 = () => {
  return (
    <>
      <HomeElement5Wrapper gradient={gradient}>
        <div className="w-container">
          <div class="titles-div">
            <div class="titles-div flex w-clearfix">
              <h1>Watch The World Show Us Off on</h1>
              <img src={youtube} alt="youtube" class="image-6" />
            </div>
          </div>
        </div>
      </HomeElement5Wrapper>
    </>
  );
};

export default HomeElement5;

const HomeElement5Wrapper = styled.div`
  padding-top: 250px;
  padding-bottom: 200px;
  background-image: url(${(props) => props.gradient});
  background-position: 0px 0px;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;

  .w-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }

  .w-container:before,
  .w-container:after {
    content: " ";
    display: table;
  }

  .titles-div {
    position: relative;
    left: 0%;
    display: block;
    width: 60%;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: auto;
    text-align: center;
    text-transform: none;
  }
  .titles-div.flex {
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .image-6 {
    display: inline-block;
    width: 200px;
    margin-left: 10px;
    float: right;
  }
`;
